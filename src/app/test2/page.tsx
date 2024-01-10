"use client";

import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, message, Upload } from "antd";

const props: UploadProps = {
    name: "file",
    action: "/api/upload",
    headers: {
        authorization: "authorization-text",
    },
    onChange(info) {
        if (info.file.status !== "uploading") {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === "done") {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === "error") {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

export default async function Test2() {
    const res = await fetch(
        "https://chat-gpt-next-web-mu-lilac-41.vercel.app/api/openai/v1/chat/completions",
        // "/api/openai/v1/chat/completions",
        {
            headers: {
                accept: "text/event-stream",
                "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                authorization: "Bearer ak-Winwin202306",
                "content-type": "application/json",
                "sec-ch-ua":
                    '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": '"macOS"',
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest",
            },
            referrer: "https://chat-gpt-next-web-mu-lilac-41.vercel.app/",
            referrerPolicy: "strict-origin-when-cross-origin",
            body: '{"messages":[{"role":"system","content":"IMPORTANT: You are a virtual assistant powered by the gpt-3.5-turbo model, now time is 2023/6/29 16:56:00}"},{"role":"user","content":"你好"}],"stream":true,"model":"gpt-3.5-turbo","temperature":0.5,"presence_penalty":0}',
            method: "POST",
            mode: "cors",
            credentials: "include",
        }
    );
    const data = await res.json();
    console.log(data);
    return (
        <>
            <Upload {...props}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
            <Button download="123.mp4" href="/api/download">
                下载
            </Button>
        </>
    );
}
