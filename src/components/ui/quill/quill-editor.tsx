import { forwardRef } from "react";
import ReactQuill from "react-quill";
import { QuillOptions } from "react-quill";

const options: QuillOptions = {
    modules: {
        toolbar: true
    },
    placeholder: "Write something awesome like at Microsoft Word...",
    theme: "snow"
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const QuillEditor = forwardRef<HTMLDivElement, any>((props, ref) => (
    <div ref={ref}>
        <ReactQuill {...props} theme={options.theme} placeholder={options.placeholder} modules={options.modules} />
    </div>
));

export default QuillEditor;
