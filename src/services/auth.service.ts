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

  async changePassword(id: number, currentPassword: string, newPassword: string) {
    const admin = await prisma.admin.findUnique({
      where: { id },
    });

    if (!admin || !admin.isActive) {
      return { ok: false as const, reason: "NOT_FOUND" as const };
    }

    const isValid = await bcrypt.compare(currentPassword, admin.password);
    if (!isValid) {
      return { ok: false as const, reason: "INVALID_CURRENT" as const };
    }

    const hashedPassword = await bcrypt.hash(newPassword, 12);
    await prisma.admin.update({
      where: { id },
      data: { password: hashedPassword },
    });

    return { ok: true as const };
  }
}