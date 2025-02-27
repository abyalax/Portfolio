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
        const projectReal = await prisma.project.findMany({ where: { type: "real" }, orderBy: { createdAt: "desc" } })
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
        const projectDummy = await prisma.project.findMany({ where: { type: "dummy" }, orderBy: { createdAt: "desc" } })

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