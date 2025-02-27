import prisma from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

export const config = {
    api: {
        bodyParser: true,
    },
};

const postValidation = z.object({
    title: z.string().min(10),
    description: z.string().min(30),
    demoURL: z.string().startsWith('https'),
    githubURL: z.string().startsWith('https://github'),
    imageURL: z.array(z.string().startsWith('https://res.cloudinary.com')).min(1),
    techStack: z.string().nonempty(),
    content: z.string().nonempty(),
    type: z.enum(['real', 'dummy'])
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        const projects = await prisma.project.findMany();
        if (projects.length === 0) return res.status(404).json({ message: "No projects found" })
        return res.status(200).json(projects);
    }
    else if (req.method === "POST") {
        const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
        const parsed = postValidation.safeParse(body)
        if (!parsed.success) return res.status(400).json({ message: parsed.error })
        const response = await prisma.project.create({
            data: parsed.data
        })
        if (!response) return res.status(500).json({ message: "Failed to create project" })
        return res.status(200).json({ message: "Success" })
    } else {
        return res.status(405).json({ message: "Method not allowed" })
    }
}