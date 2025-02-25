import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const contentProjects = `
# Profile and Blog CMS GenBI Organization

## Ringkasan
Web ini berfungsi sebagai branding organisasi penerima Beasiswa Bank Indonesia sekaligus sebagai platform untuk berita, artikel tentang GenBI, dan program kerja (proker) yang akan serta sudah dijalankan oleh organisasi GenBI di Universitas Islam Kadiri-Kediri.

## Latar Belakang

### Masalah / Kebutuhan
- **Branding Organisasi:** Meningkatkan branding organisasi GenBI melalui website dengan optimalisasi search engine optimization (SEO).
- **Platform Informasi:** Menyediakan platform terstruktur untuk menyebarkan informasi terkait GenBI kepada anggota dan masyarakat umum.
- **Pengelolaan Konten:** Memudahkan pengelolaan konten organisasi dalam satu sistem yang aman dan mudah digunakan.

### Motivasi
- **Branding:** Sebagai program kerja dari divisi Kominfo untuk melakukan branding organisasi GenBI.
- **Transparansi & Aksesibilitas:** Meningkatkan transparansi dan aksesibilitas informasi terkait kegiatan, artikel, dan agenda organisasi.
- **Digitalisasi:** Mendorong digitalisasi dan modernisasi sistem informasi dalam organisasi.

## Fitur Utama
- **Profile Organisasi GenBI:** Informasi tentang GenBI, termasuk sejarah, struktur organisasi, dan visi-misi.
- **Agenda Organisasi GenBI:** Agenda program kerja organisasi dengan tampilan kalender interaktif.
- **Blog:** News, artikel, dan informasi kegiatan GenBI.
- **Halaman Admin:** Dashboard admin dengan proteksi autentikasi untuk mengelola website, termasuk manajemen artikel, agenda, dan profil organisasi.

## Teknologi
- **Frontend:** Next.js, Tailwind CSS, Tanstack
- **Backend:** Next.js API Routes
- **Database:** MySQL
- **Authentication:** Next Auth
- **Media Storage:** Cloudinary
- **Tools Lain:**  
  - Vercel (Deployment)
  - GitHub (Version Control)
  - TanStack Table (Data Table)

## Alur Kerja
1. **Admin Login:** Admin masuk melalui halaman autentikasi.
2. **Pengelolaan Konten:** Admin dapat mengelola konten seperti profil organisasi, agenda, dan blog dari dashboard.
3. **Akses Pengunjung:** Pengunjung dapat mengakses informasi tentang GenBI melalui website.
4. **Optimasi SEO:** Sistem melakukan optimasi SEO agar konten lebih mudah ditemukan di mesin pencari.

## Implementasi & Pengembangan

### Pendekatan
- **Metodologi Agile:** Menggunakan Scrum dengan sprint untuk pengembangan fitur.
- **Issue Tracking:** Menggunakan GitHub Projects atau Trello untuk pengelolaan tugas.

### Tahapan
1. **Perencanaan:** Menentukan kebutuhan fitur dan merancang wireframe.
2. **Pengembangan:**  
   - Membangun frontend dengan Next.js.  
   - Backend dengan API Routes.  
   - Implementasi autentikasi menggunakan Next Auth beserta session management.
3. **Pengujian:** Melakukan pengujian unit, integrasi, dan UI untuk memastikan fitur berjalan dengan baik.
4. **Deployment:** Menggunakan Vercel untuk hosting free. Rencana web akan dihosting bersama web kampus dengan subdomain.

## Challenges & Solusi
- **Optimasi SEO:**  
  Menggunakan teknik server-side rendering (SSR) di Next.js untuk meningkatkan ranking di mesin pencari.
- **Keamanan Autentikasi Admin:**  
  Menggunakan Next Auth untuk memastikan hanya admin yang dapat mengakses dashboard.
- **Manajemen Media:**  
  Menyimpan dan mengelola media (gambar, file) menggunakan Cloudinary agar lebih efisien.
- **Kinerja Database:**  
  Menggunakan MySQL untuk manajemen data.
`

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const { key } = req.query
        if (key !== process.env.KEY_SEED_DATABASE) return res.status(401).json({ message: 'Unauthorized' })
        try {
            const prisma = new PrismaClient()
            console.log('🌱 Seeding database...');
            await prisma.blog.createMany({
                data: [
                    { title: 'Blog Post 1', description: 'Lorem ipsum dolor sit amet', content: 'Lorem ipsum dolor sit amet' },
                    { title: 'Blog Post 2', description: 'Consectetur adipiscing elit', content: 'Lorem ipsum dolor sit amet' },
                    { title: 'Blog Post 3', description: 'Sed do eiusmod tempor incididunt', content: 'Lorem ipsum dolor sit amet' },
                ],
            });
            await prisma.project.createMany({
                data: [
                    {
                        title: 'Web Profile Portfolio',
                        description: 'Personal Branding, Portfolio dan Blog',
                        content: 'Lorem ipsum dolor sit amet',
                        techStack: 'Next JS, NextAuth, Tailwind and Tanstack',
                        githubURL: 'https://github.com/abyalax/Portfolio',
                        demoURL: 'https://profile-abya.vercel.app/',
                        imageURL: [],
                        type: 'real'
                    },
                    {
                        title: 'Profile and CMS GenBI Organization',
                        description: 'Branding organisasi penerima Beasiswa Bank Indonesia sekaligus tempat untuk platform berita, artikel tentang GenBI, dan proker yang akan serta sudah dijalankan oleh organisasi GenBI di Universitas Islam Kadiri-Kediri.',
                        content: contentProjects,
                        techStack: 'Next JS, NextAuth, Tailwind and Tanstack',
                        githubURL: 'https://github.com/abyalax/Projects-GENBI',
                        demoURL: 'https://projects-genbi.vercel.app/',
                        imageURL: [
                            "https://res.cloudinary.com/dllhxulpv/image/upload/v1740198115/profile/a_iwhto1.png",
                            "https://res.cloudinary.com/dllhxulpv/image/upload/v1740198115/profile/b_mvuvvl.png",
                            "https://res.cloudinary.com/dllhxulpv/image/upload/v1740198116/profile/c_r1adpz.png",
                            "https://res.cloudinary.com/dllhxulpv/image/upload/v1740198111/profile/d_lsmzhh.png",
                            "https://res.cloudinary.com/dllhxulpv/image/upload/v1740198111/profile/e_mzosah.png",
                            "https://res.cloudinary.com/dllhxulpv/image/upload/v1740198111/profile/e_mzosah.png",
                            "https://res.cloudinary.com/dllhxulpv/image/upload/v1740198115/profile/g_q3zsxh.png"
                        ],
                        type: 'real'
                    },
                ],
            });
            console.log('✅ Seeding selesai!');

            const blogs = await prisma.blog.findMany()
            const projects = await prisma.project.findMany()

            res.status(201).json({
                message: 'Database seeded successfully',
                data: {
                    blogs, projects
                }
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error seeding database', error });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}