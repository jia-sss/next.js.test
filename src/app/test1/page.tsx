"use client";

import { useId } from "react";
import { useImmer } from "use-immer";
export default function Test() {
    const id = useId();
    console.log(id);

    return (
        <div
            className="h-20 bg-red-500"
            onClickCapture={e => {
                //onClickCapture会优先执行
                console.log([e.target]); //会打印dom对象
            }}
        >
            <button
                onClick={() => {
                    console.log(1);
                }}
            >
                1111
            </button>
            <button
                onClick={() => {
                    console.log(2);
                }}
            >
                2222
            </button>
            <Test1 />
        </div>
    );
}

const Test1 = () => {
    const [obj, setObj] = useImmer({
        a: 1,
        b: {
            c: 2,
        },
    });

    const [arr, setArr] = useImmer([{ a: 1 }, { a: 2 }]);

    return (
        <>
            <div>
                {obj.a} <br />
                {obj.b.c}
            </div>
            {arr.map((item, index) => (
                <span key={index}>{item.a},</span>
            ))}
            <br />
            <button
                onClick={() => {
                    setObj(v => {
                        v.b.c++;
                    });
                    setArr(v => {
                        v[1].a++;
                    });
                }}
            >
                set
            </button>
            <button
                onClick={() => {
                    setArr(v => {
                        v.push({ a: 3 });
                    });
                }}
            >
                push
            </button>
        </>
    );
};
