import { useEffect, useRef, useState } from "react";
import type { Test1 } from "~/types";
import { Button } from "antd";

export default function Test() {
    const a: Test1 = 10;
    const ref = useRef<HTMLDivElement>(null);
    const [isIntersecting, setIsIntersecting] = useState(false);
    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(
            entries => {
                // console.log(entries[0]);
                setIsIntersecting(entries[0].isIntersecting);
            },
            {
                // root: divref.current,
                rootMargin: "-1px 0px 0px 0px",
                threshold: 1,
            }
        );
        observer.observe(ref.current);
        return () => {
            observer.disconnect();
        };
    }, []);
    return (
        <div className="h-[2000px]">
            <Button type="primary">Test2</Button>
            <div className="h-10"></div>
            <div
                ref={ref}
                className={`w-20 h-20 sticky top-0 
                ${isIntersecting ? "bg-red-500" : "bg-neutral-600"}`}
            ></div>
        </div>
    );
}
