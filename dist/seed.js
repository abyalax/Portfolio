import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
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
                content: 'Lorem ipsum dolor sit amet',
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
}
main()
    .catch((e) => {
    console.error('❌ Error seeding database: ', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
