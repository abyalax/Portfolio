import { useState } from "react";
import QuillEditor from "./quill-editor";

interface data {
  content: string
}

const CreateContent = () => {
  const [data, setData] = useState<data>({ content: "" })
  
  return (
    <div>
      <QuillEditor onChange={(e) => setData({ ...data, content: e })} value={data.content}/>
    </div>
  )
};

export default CreateContent;