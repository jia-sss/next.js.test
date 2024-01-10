import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Test12() {
    const router = useRouter();
    useEffect(() => {
        Notification.requestPermission(status => {
            console.log(status);
            console.log(Notification.permission);
        });

        setInterval(() => {
            const notice = new Notification("title", {
                body: "body",
                data: {
                    url: "https://baidu.com",
                    status: "open",
                },
            });
            notice.onclick = e => {
                console.log(e);
                router.push("/");
            };
        }, 3000);
    }, []);
    return (
        <div>
            <button
                onClick={() => {
                    // Notification.requestPermission(status => {
                    //     console.log(status);
                    //     console.log(Notification.permission);
                    // });
                    const notice = new Notification("title", {
                        body: "body",
                        data: {
                            url: "https://baidu.com",
                            status: "open",
                        },
                    });
                    notice.onclick = e => {
                        console.log(e);
                        router.push("/");
                    };
                }}
            >
                通知
            </button>
        </div>
    );
}
