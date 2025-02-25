import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import { templateProjects } from "@/utils/template";
import { ModalContext } from "@/context/ModalContext";
import { ToasterContext } from "@/context/ToasterContext";
import { CldUploadWidget, CloudinaryUploadWidgetInfo, CloudinaryUploadWidgetResults } from "next-cloudinary"

export interface ProjectInterface {
  title: string;
  description: string;
  content: string;
  demoURL: string;
  githubURL: string;
  imageURL: string[]
  techStack: string;
  type: string;
}

const CreateProjects = () => {
  const { createContent } = useContext(ModalContext);
  const { setToaster } = useContext(ToasterContext)
  const [dataState, setDataState] = useState<ProjectInterface>({
    title: "",
    description: "",
    content: templateProjects,
    demoURL: "",
    githubURL: "",
    imageURL: [],
    techStack: "",
    type: "real"
  })

  const handlerSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (dataState.imageURL.length === 0) {
      setToaster({ type: "warning", message: "Please upload image or wait for minute" })
    }
    try {
      console.log('POST dataState : ', dataState);
      const res = await fetch("/api/projects", {
        method: "POST",
        body: JSON.stringify(dataState),
      })
      if (res.status) {
        setToaster({ type: "success", message: "Success to create project" })
      }
      setToaster({ type: "danger", message: "Failed to create project" })
    } catch (error) {
      console.log(error);
      setToaster({ type: "danger", message: "Failed to create project" })
    }
  }

  const handleUpload = async (result: CloudinaryUploadWidgetResults) => {
    const resultUpload = result.info as CloudinaryUploadWidgetInfo
    const image = resultUpload.secure_url
    setDataState(prevState => ({
      ...prevState,
      imageURL: [...prevState.imageURL,image]
    }))
  };

  return (
    <div className="p-7 bg-white min-w-[60vh] -mt-4">
      <form onSubmit={handlerSubmit} className="w-full flex flex-col gap-2">
        <div className="sticky top-4 h-fit w-full flex flex-col bg-white z-10 pb-2 border-b border-slate-200">
          <h2>Create Projects</h2>
        </div>
        <div>
          <h3 className="mt-1 text-sm font-normal">Title</h3>
          <input onChange={(e) => setDataState({ ...dataState, title: e.target.value })} type="text" className="border border-gray-400 w-full px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-lg" />
          <h3 className="mt-1 text-sm font-normal">Description</h3>
          <input onChange={(e) => setDataState({ ...dataState, description: e.target.value })} type="text" className="border border-gray-400 w-full px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-lg" />
          <h3 className="mt-1 text-sm font-normal">Demo URL</h3>
          <input onChange={(e) => setDataState({ ...dataState, demoURL: e.target.value })} type="text" className="border border-gray-400 w-full px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-lg" />
          <h3 className="mt-1 text-sm font-normal">Github URL</h3>
          <input onChange={(e) => setDataState({ ...dataState, githubURL: e.target.value })} type="text" className="border border-gray-400 w-full px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-lg" />
          <h3 className="mt-1 text-sm font-normal">Tech Stack</h3>
          <input onChange={(e) => setDataState({ ...dataState, techStack: e.target.value })} type="text" className="border border-gray-400 w-full px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-lg" />
          <h3 className="mt-1 text-sm font-normal">Type</h3>
          <select onChange={(e) => setDataState({ ...dataState, type: e.target.value })} className="border border-gray-400 w-full px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-lg" >
            <option value="real">Real</option>
            <option value="dummy">Dummy</option>
          </select>
          <h3 className="mt-1 text-sm font-normal">Image Showcase</h3>
          {/* <input onChange={handlerChangeImage} multiple type="file" className="border border-gray-400 w-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-lg" /> */}
          <CldUploadWidget
            uploadPreset="profile"
            options={{ multiple: true, folder: "profile", maxFiles: 10, uploadPreset: "profile", cloudName: "dllhxulpv" }}
            onSuccess={handleUpload}
            onError={(error) => console.error("Upload Error:", error)}>
            {({ open }) => (
              <button type="button" className="flex gap-4 justify-center items-center px-4 py-1 w-fit rounded-lg bg-toska-light text-center font-semibold text-slate-200 hover:text-white hover:bg-toska-dark hover:font-bold" onClick={() => open()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-cloud-arrow-up" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708z" />
                  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                </svg>
                Unggah Foto
              </button>
            )}
          </CldUploadWidget>
        </div>
        <div>
          <h3 className="mt-1 text-sm font-normal">Content</h3>
          {/* <QuillEditor onChange={(e: string) => setDataState({ ...dataState, content: e })} value={dataState.content} ref={quillRef} /> */}
          <div className="flex justify-start items-center gap-4 mt-4">
            <button type="submit" className="px-2 py-1 rounded bg-green-500 text-white font-semibold">Submit</button>
            <button type="reset" onClick={() => createContent(null)} className="px-2 py-1 rounded bg-gray-500 text-white font-semibold">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  )
};

export default CreateProjects;