import { useCallback, useEffect, useState } from "react";

export default function Animation() {
    const [left, setLeft] = useState(0);

    const distance = 1500; // 需要移动的距离
    const timeCount = 3000; // 需要使用的时间

    const handler = useCallback((time: number) => {
        // time为rAF返回的毫秒级时间单位，当time的大于timeCount的值则停止
        // time理论上是从 1 开始到timeCount定义的3000，
        if (time > timeCount) {
            time = timeCount;
        }
        // 这句代码的作用是 time理论上是从 1 至 3000
        // 当到达3000的时候，time * distance / timeCount得到的一定是distance的值1500
        setLeft((time * distance) / timeCount);
        window.requestAnimationFrame(handler); // 循环调用，渲染完成会停止
    }, []);

    useEffect(() => {
        console.log("useEffect");

        window.requestAnimationFrame(handler);
    }, [handler]);

    return (
        <div className="w-full h-full relative">
            <div
                className="w-[100px] h-[100px] bg-black absolute top-0"
                style={{ left: `${left}px` }}
            ></div>
        </div>
    );
}
