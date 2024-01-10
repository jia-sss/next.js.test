import { useRef, useEffect, useState } from "react";
import { List, Button } from "antd";

export default function Test9() {
    const chatRef = useRef(null);
    const [arr, setArr] = useState([1, 2]);
    useEffect(() => {
        //始终保持滚动条在最下方
        if (!chatRef.current) return;
        const chatContainer = chatRef.current;
        const ul = document.querySelector("ul.ant-list-items");
        // 监听聊天内容区域的变化
        const observer = new MutationObserver(() => {
            console.log("MutationObserver");
        });
        observer.observe(ul, {
            childList: true,
        });
        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <Button
                onClick={() => {
                    setArr([...arr, 3]);
                }}
            >
                push
            </Button>
            <div
                id="chat-container"
                ref={chatRef}
                style={{
                    overflow: "auto",
                    border: "1px solid #ccc",
                }}
                className="h-full"
            >
                <List
                    itemLayout="vertical"
                    dataSource={arr}
                    renderItem={item => (
                        <List.Item style={{ padding: "5px 20px" }}>
                            <List.Item.Meta
                                title={<div>123</div>}
                                description={
                                    <div>
                                        <span>123</span>
                                        <Button
                                            size="mini"
                                            onClick={() => {
                                                // navigate(
                                                //     `/flowchart/${item.tracingId}`,
                                                // );
                                            }}
                                        >
                                            查看
                                        </Button>
                                    </div>
                                }
                            />
                            <p>123</p>
                        </List.Item>
                    )}
                />
            </div>
        </>
    );
}
