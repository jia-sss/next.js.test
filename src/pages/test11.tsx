import { useEffect } from "react";

export default function Test11() {
    useEffect(() => {
        // 打开我们的数据库
        const request = window.indexedDB.open("myDatabase", 3);

        request.onerror = event => {
            // 使用 request.errorCode 来做点什么！
            alert("失败");
        };
        request.onsuccess = event => {
            // 使用 request.result 来做点什么！
            alert("成功");
        };
    }, []);
    return <div></div>;
}
