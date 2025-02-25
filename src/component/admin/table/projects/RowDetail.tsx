import { formatDate } from "@/utils/utils";
import { Project } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export default function RowDetailView({ project }: { project: Project }) {
  return (
    <div className="flex flex-col h-fit gap-4 px-24 py-5 border border-gray-500">
      <div className="max-w-[100vw] w-fit">
        {project.imageURL.length ? (
          <Image src={project.imageURL[0]} alt="" height={500} width={1000} className="object-cover object-center" />
        ) : null}
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="flex gap-4">
              <Link className="font-semibold hover:text-yellow-600" href={project.demoURL}>Sites : {project.demoURL}</Link>
              <Link className="font-semibold hover:text-yellow-600" href={project.githubURL}>GitHub : {project.githubURL}</Link>
            </div>

            <div className="flex gap-4 items-center">
              <p className="m-0 font-semibold">Created : {formatDate(project.createdAt)}</p>
            </div>

          </div>
          <div className="flex gap-3">
            <button className="px-2 py-1 bg-transparent border border-gray-500 hover:bg-gray-600 rounded-lg font-semibold">
              Manage
            </button>
            <button className="px-2 py-1 bg-transparent border border-gray-500 hover:bg-gray-600 rounded-lg font-semibold">
              Preview
            </button>
          </div>

        </div>

      </div>
      <ReactMarkdown>{project.content}</ReactMarkdown>

    </div>

  );
}
