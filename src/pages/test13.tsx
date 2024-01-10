import {} from "react";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { css } from "@emotion/css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function Test13() {
    return (
        <div>
            <ReactQuill
                className={css`
                    img {
                        max-width: 200px;
                        vertical-align: unset;
                    }
                `}
                theme=""
                modules={{ toolbar: "" }}
                formats={["image"]}
                onChange={(value, delta, source, editor) => {
                    console.log(editor.getContents().ops);
                }}
            />
        </div>
    );
}
