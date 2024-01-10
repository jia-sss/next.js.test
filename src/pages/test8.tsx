import { useEffect, useState } from "react";
import { setTimeout } from "timers";

const get = () => {
    return new Promise<number>(resolve => {
        setTimeout(() => {
            resolve(1);
        }, 1000);
    });
};

export default function Test8() {
    const [a, setA] = useState<number>(0);
    const [user, setUser] = useState<number>();

    const getA = async () => {
        const a = await get();
        setA(a);
    };

    useEffect(() => {
        const aa = Date.now();
        console.log(aa, Date.now());

        setTimeout(() => {
            setUser(1);
            console.log(aa, Date.now());
        }, 300);
        getA();
    }, []);
    return user && <CC a={a}></CC>;
}

const CC = ({ a }: { a: number }) => {
    // console.log(a);
    useEffect(() => {
        console.log(a);
    }, [a]);

    return <div></div>;
};
