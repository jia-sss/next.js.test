import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import c from "clsx";

// https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView
export default function Refs() {
    const refs = useRef(new Map<number, HTMLLIElement>());

    function scrollToId(itemId: number) {
        const map = refs.current;
        const node = map.get(itemId);
        node?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
        });
    }

    return (
        <>
            <nav className="text-center text-slate-950">
                {[
                    { name: "Tom", id: 0 },
                    { name: "Maru", id: 5 },
                    { name: "Jellylorum", id: 9 },
                ].map(({ name, id }) => (
                    <button
                        key={id}
                        className="m-1"
                        onClick={() => scrollToId(id)}
                    >
                        {name}
                    </button>
                ))}
            </nav>
            <div className="w-full overflow-hidden">
                <ul className="list-none whitespace-nowrap pl-5">
                    {catList.map(cat => (
                        <li
                            className="list-none whitespace-nowrap inline p-3"
                            key={cat.id}
                            ref={node => {
                                const map = refs.current;
                                if (node) {
                                    map.set(cat.id, node);
                                } else {
                                    map.delete(cat.id);
                                }
                            }}
                        >
                            <img
                                className="p-2.5 -m-2.5 transition duration-200 ease-linear"
                                src={cat.imageUrl}
                                alt={"Cat #" + cat.id}
                            />
                        </li>
                    ))}
                </ul>
            </div>

            <hr className="mt-10" />
            <CatFriends />
        </>
    );
}

function CatFriends() {
    const selectedRef = useRef<HTMLLIElement>(null);
    const [index, setIndex] = useState(0);

    return (
        <>
            <nav className="text-center">
                <button
                    className="m-1"
                    onClick={() => {
                        flushSync(() => {
                            if (index < catList.length - 1) {
                                setIndex(index + 1);
                            } else {
                                setIndex(0);
                            }
                        });
                        selectedRef.current?.scrollIntoView({
                            behavior: "smooth",
                            block: "nearest",
                            inline: "center",
                        });
                    }}
                >
                    下一步
                </button>
            </nav>
            <div className="w-full overflow-hidden">
                <ul className="list-none whitespace-nowrap pl-5">
                    {catList.map((cat, i) => (
                        <li
                            className="list-none whitespace-nowrap inline p-3"
                            key={cat.id}
                            ref={index === i ? selectedRef : null}
                        >
                            <img
                                className={c(
                                    "p-2.5",
                                    "-m-2.5",
                                    "transition",
                                    "duration-200",
                                    "ease-linear",
                                    { "bg-green-400": index === i },
                                )}
                                src={cat.imageUrl}
                                alt={"猫猫 #" + cat.id}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

const catList: { id: number; imageUrl: string }[] = [];
for (let i = 0; i < 10; i++) {
    catList.push({
        id: i,
        imageUrl: "https://placekitten.com/250/200?image=" + i,
    });
}
