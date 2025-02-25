import prisma from "@/lib/db"

export const getAllBlogs = async () => {
    try {
        const data = await prisma.blog.findMany({ orderBy: { createdAt: "desc" } })
        return data.map((project) => ({
            ...project,
            createdAt: project.createdAt.toISOString(),
            updatedAt: project.updatedAt.toISOString(),
        }))
    } catch (error) {
        console.log(error);
        return [];
    }
}