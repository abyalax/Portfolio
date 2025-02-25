import Link from "next/link";

const AdminHome = () => {
    
  return (
    <section className="min-h-screen flex justify-center items-center bg-slate-800">
        <div className="flex flex-col justify-center gap-4 ">
            <Link className="text-white font-semibold hover:text-yellow-500" href={"/admin/projects"}>Projects</Link>
            <Link className="text-white font-semibold hover:text-yellow-500" href={"/admin/blogs"}>Blogs</Link>
        </div>
    </section>
  )
};

export default AdminHome;