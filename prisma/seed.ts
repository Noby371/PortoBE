import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Memulai proses seeding...");

  // ── Admin ──────────────────────────────────────────────────────────────────
  await prisma.admin.deleteMany();

  const hashedPassword = await bcrypt.hash("admin123456", 12);

  const admin = await prisma.admin.create({
    data: {
      email: "thisme371@gmail.com",
      password: hashedPassword,
      isActive: true,
    },
  });
  console.log("✅ Admin seeded:", admin.email);

  // ── Profile ────────────────────────────────────────────────────────────────
  await prisma.profile.deleteMany();

  await prisma.profile.create({
    data: {
      name: "FathBoy",
      title: "Fullstack Developer & IoT Engineer",
      bio: "Fresh Graduate Teknik Informatika di Universitas Wiraraja Madura. Berpengalaman dalam pengembangan sistem IoT, web fullstack, dan mobile application. Co-founder InnoTech — software house yang berfokus pada solusi teknologi untuk bisnis lokal.",
      email: "thisme371@gmail.com",
      phone: "+62 858-5954-1243",
      location: "Sumenep, Madura, Indonesia",
      githubUrl: "https://github.com/username",
      linkedinUrl: "https://linkedin.com/in/username",
      adminId: admin.id,
    },
  });
  console.log("✅ Profile seeded");

  // ── Skills ─────────────────────────────────────────────────────────────────
  await prisma.skill.deleteMany();

  await prisma.skill.createMany({
    data: [
      { name: "ESP32", category: "IOT", level: 85 },
      { name: "Arduino / C++", category: "IOT", level: 80 },
      { name: "MQTT Protocol", category: "IOT", level: 75 },
      { name: "Sensor Integration", category: "IOT", level: 80 },
      { name: "Node.js", category: "BACKEND", level: 85 },
      { name: "Express.js", category: "BACKEND", level: 85 },
      { name: "TypeScript", category: "BACKEND", level: 80 },
      { name: "PHP", category: "BACKEND", level: 75 },
      { name: "Laravel", category: "BACKEND", level: 75 },
      { name: "C#", category: "BACKEND", level: 65 },
      { name: "Vue.js", category: "FRONTEND", level: 80 },
      { name: "HTML / CSS", category: "FRONTEND", level: 85 },
      { name: "JavaScript", category: "FRONTEND", level: 80 },
      { name: "PostgreSQL", category: "DATABASE", level: 80 },
      { name: "MySQL", category: "DATABASE", level: 80 },
      { name: "Prisma ORM", category: "DATABASE", level: 75 },
      { name: "Git & GitHub", category: "TOOLS", level: 80 },
      { name: "Microsoft Word", category: "TOOLS", level: 90 },
      { name: "Microsoft Excel", category: "TOOLS", level: 85 },
      { name: "Microsoft PowerPoint", category: "TOOLS", level: 85 },
      { name: "Linux (Ubuntu)", category: "DEVOPS", level: 70 },
    ],
  });
  console.log("✅ Skills seeded");

  // ── Projects ───────────────────────────────────────────────────────────────
  await prisma.project.deleteMany();

  await prisma.project.createMany({
    data: [
      {
        title: "WMS — Sistem Monitoring Tempat Sampah IoT",
        slug: "wms-iot-trash-monitoring",
        description:
          "Sistem pemantauan kepenuhan tempat sampah secara real-time menggunakan ESP32, sensor ultrasonik HC-SR04, dan logika Fuzzy Tsukamoto.",
        type: "THESIS",
        status: "IN_PROGRESS",
        techStack: [
          "ESP32",
          "C++",
          "MQTT",
          "Node.js",
          "TypeScript",
          "Express",
          "Prisma",
          "PostgreSQL",
          "Vue.js",
        ],
        featured: true,
        startDate: new Date("2024-09-01"),
      },
      {
        title: "InnoTech — Software House Sumenep",
        slug: "innotech-software-house",
        description:
          "Co-founder dan developer di InnoTech, startup software house di Sumenep yang berfokus pada solusi web, mobile, IoT, dan konsultasi IT.",
        type: "STARTUP",
        status: "IN_PROGRESS",
        techStack: ["Node.js", "Vue.js", "Laravel", "PHP", "MySQL"],
        featured: true,
        startDate: new Date("2024-01-01"),
      },
      {
        title: "SPK Naive Bayes — Rekomendasi Topik Skripsi",
        slug: "spk-naive-bayes",
        description:
          "Sistem Pendukung Keputusan berbasis PHP untuk merekomendasikan topik skripsi mahasiswa menggunakan metode Naive Bayes dengan Laplace Smoothing.",
        type: "ACADEMIC",
        status: "COMPLETED",
        techStack: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
        featured: false,
        startDate: new Date("2024-03-01"),
        endDate: new Date("2024-06-01"),
      },
      {
        title: "Modul Praktikum IoT Interaktif",
        slug: "modul-praktikum-iot",
        description:
          "Modul pembelajaran IoT berbasis HTML interaktif untuk siswa SMK/SMA dan mahasiswa, mencakup dasar ESP32, GPIO, WiFi, dan MQTT.",
        type: "ACADEMIC",
        status: "COMPLETED",
        techStack: ["HTML", "CSS", "JavaScript", "ESP32", "MQTT"],
        featured: false,
        startDate: new Date("2024-06-01"),
        endDate: new Date("2024-08-01"),
      },
    ],
  });
  console.log("✅ Projects seeded");

  // ── Experience ─────────────────────────────────────────────────────────────
  await prisma.experience.deleteMany();

  await prisma.experience.createMany({
    data: [
      {
        company: "InnoTech",
        role: "Co-Founder & Fullstack Developer",
        description:
          "Memimpin pengembangan teknis dan strategi bisnis software house di Sumenep.",
        startDate: new Date("2024-01-01"),
        isCurrent: true,
        location: "Sumenep, Madura",
        type: "WORK",
      },
      {
        company: "Universitas Wiraraja Madura",
        role: "Pemateri ITClass — IoT",
        description:
          "Mengajar Internet of Things kepada mahasiswa mencakup ESP32, sensor, dan protokol MQTT.",
        startDate: new Date("2024-02-01"),
        endDate: new Date("2024-08-01"),
        isCurrent: false,
        location: "Sumenep, Madura",
        type: "WORK",
      },
      {
        company: "Madura Store",
        role: "Teknisi — Magang",
        description:
          "Melakukan diagnosis dan perbaikan perangkat keras laptop, instalasi sistem operasi, dan troubleshooting software.",
        startDate: new Date("2023-06-01"),
        endDate: new Date("2023-08-01"),
        isCurrent: false,
        location: "Sumenep, Madura",
        type: "INTERNSHIP",
      },
      {
        company: "Universitas Negeri Yogyakarta",
        role: "Mahasiswa Pertukaran — PMM",
        description:
          "Mengikuti program Pertukaran Mahasiswa Merdeka di Universitas Negeri Yogyakarta.",
        startDate: new Date("2023-02-01"),
        endDate: new Date("2023-06-01"),
        isCurrent: false,
        location: "Yogyakarta",
        type: "ORGANIZATION",
      },
    ],
  });
  console.log("✅ Experience seeded");

  // ── Education ──────────────────────────────────────────────────────────────
  await prisma.education.deleteMany();

  await prisma.education.create({
    data: {
      institution: "Universitas Wiraraja Madura",
      degree: "Sarjana Komputer (S.Kom)",
      field: "Teknik Informatika",
      startYear: 2021,
      endYear: 2025,
      isCurrent: false,
      description:
        "Lulusan 2025. Fokus riset pada sistem IoT, fuzzy logic, dan pengembangan perangkat lunak.",
    },
  });
  console.log("✅ Education seeded");

  console.log("\n🎉 Seeding selesai!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding gagal:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
