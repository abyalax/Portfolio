import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { IncomingForm } from "formidable";
import fs from "fs";

export const config = {
    api: {
        bodyParser: false,
    },
};

const uploadDir = path.join(process.cwd(), "public/assets/upload");

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const form = new IncomingForm({
            uploadDir,
            keepExtensions: true,
            multiples: true,
        });
        form.parse(req, async (err, _fields, files) => {
            if (err) {
                console.error("Error parsing the files", err);
                return res.status(500).json({ error: "Error parsing the files" });
            }
            let fileData;
            if (Array.isArray(files.file)) {
                fileData = files.file
            } else {
                fileData = files.file;
            }
            if (!fileData) {
                return res.status(400).json({ error: "No file uploaded" });
            }
            try {
                const urls: string[] = [];
                const renamePromises = fileData.map(async (fileData, index) => {
                    const ext = path.extname(fileData.originalFilename || fileData.newFilename || "");
                    const date = new Date();
                    const time = `${date.getHours()}-${date.getMinutes()}_${index}`;
                    const uniqueName = `${date.toISOString().replace(/:/g, "-").split("T")[0]}_${time}${ext}`;
                    console.log('uniqueName:', uniqueName);

                    const newPath = path.join(uploadDir, uniqueName);
                    console.log('Renaming from:', fileData.filepath, 'to:', newPath);

                    fs.rename(fileData.filepath, newPath, (err) => {
                        if (err) {
                            console.error("Error during file renaming:", err);
                            return res.status(500).json({ error: "Error during file renaming" });
                        }
                    });
                    urls.push(`/assets/upload/${uniqueName}`);
                });

                await Promise.all(renamePromises);
                return res.status(201).json({ urls });
            } catch (error) {
                console.error("Error during file renaming:", error);
                return res.status(500).json({ error: "Error during file renaming" });
            }
        });
    } else {
        return res.status(405).json({ error: "Method not allowed" })
    }
}