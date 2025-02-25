import Head from "next/head"
import { ReactNode } from "react"

const AdminLayout = ({ children }: { children: ReactNode }) => {
    return (

        <section className="flex w-full min-h-screen text-white">
            <Head>
                <title>Admin</title>
                <link rel="icon" href="/a.png" type="image/png" />
            </Head>
            <main className="min-w-full text-[#edf0f7] bg-[#272727] min-h-full p-6">
                {children}
            </main>

        </section>
    )
}

export default AdminLayout
