import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma.js";

export class AuthService {
  async login(email: string, password: string) {
    const admin = await prisma.admin.findUnique({
      where: { email },
      include: { profile: true },
    });

    if (!admin || !admin.isActive) {
      return null;
    }

    const isValid = await bcrypt.compare(password, admin.password);
    if (!isValid) {
      return null;
    }

    // Update lastLoginAt
    await prisma.admin.update({
      where: { id: admin.id },
      data: { lastLoginAt: new Date() },
    });

    const token = jwt.sign(
      { id: admin.id, email: admin.email },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    return {
      token,
      admin: {
        id: admin.id,
        email: admin.email,
        name: admin.profile?.name,
      },
    };
  }

  async me(id: number) {
    return prisma.admin.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        lastLoginAt: true,
      },
    });
  }
}