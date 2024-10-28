import { FormEvent, useEffect, useState } from "react";

const Contact = () => {
    const [formState, setForm] = useState({
        to_name: "Abya",
        from_name: "",
        from_email: "",
        from_phone: "",
        message: "",
    });

    useEffect(() => {
        console.log(formState)
    }, [formState])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formState);
        console.log(import.meta.env);
        fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                service_id: import.meta.env.VITE_SERVICE_ID,
                template_id: import.meta.env.VITE_TEMPLATE_ID,
                user_id: import.meta.env.VITE_USER_ID,
                template_params: formState
            })
        })
    }

    return (
        <div>
            <h2 className="text-white text-5xl my-10 text-center font-semibold">Contact Me</h2>
            <div className="px-44 flex gap-16 min-h-96">
                <div className="w-full text-white p-4">
                    <h2 className="text-3xl font-semibold mb-4 text-center">Let's Get in Touch</h2>
                    <p className="text-center mt-4 mb-14 text-[#808080]">
                        I’m currently looking for any new opportunities, my inbox is always open.
                        Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                    </p>
                    <h2 className="text-xl font-semibold my-2 text-center">Address</h2>
                    <p className="text-center text-[#808080]">Plemahan Sub-district, Kediri Regency, East Java, Indonesia</p>
                    <h2 className="text-xl font-semibold my-2 text-center">Phone</h2>
                    <p className="text-center text-[#808080]">+62 877 6529 0292</p>
                    <h2 className="text-xl font-semibold my-2 text-center">Email</h2>
                    <p className="text-center text-[#808080]">abyalaxx@gmail.com</p>
                </div>


                <div className=" w-full shadow-2xl shadow-black text-white">
                    <form className="flex flex-col gap-6 p-10" onSubmit={handleSubmit}>
                        <input className="min-h-11 bg-transparent focus:outline-none border-b-2 border-slate-500 appearance-none" name="name" type="text" placeholder="Your Name" onChange={(e) => setForm({ ...formState, from_name: e.target.value })} />
                        <input className="min-h-11 bg-transparent focus:outline-none border-b-2 border-slate-500 appearance-none" type="email" name="email" placeholder="Your Email" onChange={(e) => setForm({ ...formState, from_email: e.target.value })} />
                        <input className="min-h-11 bg-transparent focus:outline-none border-b-2 border-slate-500 appearance-none" type="number" min={9} name="phone" placeholder="Your Phone" onChange={(e) => setForm({ ...formState, from_phone: e.target.value })} />
                        <textarea className="bg-transparent focus:outline-none border-b-2 border-slate-500 appearance-none" name="message" placeholder="Your Message" onChange={(e) => setForm({ ...formState, message: e.target.value })} />

                        <button className="bg-slate-500 hover:bg-slate-400 font-semibold text-lg px-11 py-3 rounded-md" type="submit" >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Contact;