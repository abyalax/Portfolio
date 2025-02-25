import { formatDate } from "@/utils/utils";
import { Blog } from "@prisma/client";

export default function RowDetailView({ blog }: { blog: Blog }) {
  console.log({ blog });
  return (
    <div className="flex flex-col h-fit gap-4 px-24 py-5 border border-gray-500">
      <div className="max-w-[100vw] w-fit">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="flex gap-4">
              {/* <Link className="font-semibold hover:text-yellow-600" href={blog.demoURL}>Sites : {blog.demoURL}</Link>
              <Link className="font-semibold hover:text-yellow-600" href={blog.githubURL}>GitHub : {blog.githubURL}</Link> */}
            </div>

            <div className="flex gap-4 items-center">
              <p className="m-0 font-semibold">Created : {formatDate(blog.createdAt)}</p>
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
    </div>

  );
}
