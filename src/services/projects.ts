import prisma from "@/lib/db"

export const getAllProjects = async () => {
    try {
        const data = await prisma.project.findMany({ orderBy: { createdAt: "desc" } })
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

export const getProjectByID = async (id: number) => {
    try {
        const data = await prisma.project.findUnique({ where: { id } })
        return {
            ...data,
            createdAt: data?.createdAt.toISOString(),
            updatedAt: data?.updatedAt.toISOString(),
        }
    } catch (error) {
        console.log(error);
    }
}

export const getRealProjects = async () => {
    try {
        console.log(process.env.DATABASE_URL);
        // const projectReal = await prisma.project.findMany({ where: { type: "real" }, orderBy: { createdAt: "desc" } })
        const projectReal = await prisma.project.findMany()
        console.log('Result get real project',projectReal);
        return projectReal.map((project) => ({
            ...project,
            createdAt: project.createdAt.toISOString(),
            updatedAt: project.updatedAt.toISOString(),
        }));
    } catch (error) {
        console.log(error);
        return []
    }
}

export const getDumyProjects = async () => {
    try {
        // const projectDummy = await prisma.project.findMany({ where: { type: "dummy" }, orderBy: { createdAt: "desc" } })
        const projectDummy = await prisma.project.findMany()
        console.log('Result get dummy project',projectDummy);
        
        return projectDummy.map((project) => ({
            ...project,
            createdAt: project.createdAt.toISOString(),
            updatedAt: project.updatedAt.toISOString(),
        }));
    } catch (error) {
        console.log(error);
        return []
    }
}