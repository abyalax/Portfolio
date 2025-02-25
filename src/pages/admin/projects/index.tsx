import AdminLayout from "@/component/admin/__layouts"
import { ModalContext } from "@/context/ModalContext"
import { getAllProjects } from "@/services/projects"
import { Project } from "@prisma/client"
import dynamic from "next/dynamic"
import { useContext } from "react"

const CreateProjects = dynamic(() => import("@/component/modal/CreateProjects"), { ssr: false })
const Table = dynamic(() => import("@/component/admin/table/projects/Table"), { ssr: false })

export async function getServerSideProps() {
    const projects = await getAllProjects()
    return {
        props: { projects },
    };
}

const AdminProjectsPage = ({ projects }: { projects: Project[] }) => {

    const { createContent } = useContext(ModalContext)

    return (
        <AdminLayout>
            <div className="fixed top-0 flex gap-4 w-full justify-between my-4 pr-8 z-10 text-[#edf0f7] bg-[#272727]">
                <h2 className="my-3 text-2xl font-semibold">Manage Project Showcase</h2>
                <div className="flex h-fit items-center gap-2 py-2 px-4 hover:bg-slate-500 text-white bg-slate-800 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-upload" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                        <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
                    </svg>
                    <button onClick={() => createContent(<CreateProjects />)}>
                        Create Content
                    </button>
                </div>
            </div>
            <main className="overflow-x-auto overflow-visible max-h-[80vh] scrollbar-hidden pt-10">
                <div className="h-fit w-fit rounded-xl m-1">
                    <Table project={projects} />
                </div>
            </main>
        </AdminLayout>
    )
}

export default AdminProjectsPage
