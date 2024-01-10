import s from "./index.module.css";
import Head from "next/head";

export default function Tree() {
    return (
        <>
            <Head>
                <style>
                    {`
                        body{
                            background:none !important;
                        }
                    `}
                </style>
            </Head>
            <div className={s.tree} id="tree">
                <details>
                    <summary>
                        <span className={s["tree-item"]}>项目1</span>
                    </summary>
                    <details>
                        <summary>
                            <span className={s["tree-item"]}>文件夹0</span>
                        </summary>
                    </details>
                    <details>
                        <summary>
                            <span className={s["tree-item"]}>文件夹1</span>
                        </summary>
                    </details>
                    <details>
                        <summary>
                            <span className={s["tree-item"]}>文件夹1-1</span>
                        </summary>
                        <details>
                            <summary>
                                <span className={s["tree-item"]}>
                                    文件夹1-1-2
                                </span>
                            </summary>
                        </details>
                        <details>
                            <summary>
                                <span className={s["tree-item"]}>
                                    文件夹1-1-3
                                </span>
                            </summary>
                            <details>
                                <summary>
                                    <span className={s["tree-item"]}>
                                        文件夹1-1-3-1
                                    </span>
                                </summary>
                            </details>
                            <details>
                                <summary>
                                    <span className={s["tree-item"]}>
                                        文件夹1-1-3-2
                                    </span>
                                </summary>
                            </details>
                        </details>
                        <details>
                            <summary>
                                <span className={s["tree-item"]}>
                                    文件夹1-1-4
                                </span>
                            </summary>
                        </details>
                    </details>
                    <details>
                        <summary>
                            <span className={s["tree-item"]}>文件夹1-2</span>
                        </summary>
                        <details>
                            <summary>
                                <span className={s["tree-item"]}>
                                    文件夹1-2-1
                                </span>
                            </summary>
                        </details>
                    </details>
                    <details>
                        <summary>
                            <span className={s["tree-item"]}>文件夹1-3</span>
                        </summary>
                    </details>
                    <details>
                        <summary>
                            <span className={s["tree-item"]}>文件夹1-4</span>
                        </summary>
                    </details>
                </details>
                <details>
                    <summary>
                        <span className={s["tree-item"]}>项目1</span>
                    </summary>
                    <details>
                        <summary>
                            <span className={s["tree-item"]}>文件夹0</span>
                        </summary>
                    </details>
                    <details>
                        <summary>
                            <span className={s["tree-item"]}>文件夹1-1</span>
                        </summary>
                        <details>
                            <summary>
                                <span className={s["tree-item"]}>
                                    文件夹1-1-2
                                </span>
                            </summary>
                        </details>
                        <details>
                            <summary>
                                <span className={s["tree-item"]}>
                                    文件夹1-1-3
                                </span>
                            </summary>
                            <details>
                                <summary>
                                    <span className={s["tree-item"]}>
                                        文件夹1-1-3-1
                                    </span>
                                </summary>
                            </details>
                            <details>
                                <summary>
                                    <span className={s["tree-item"]}>
                                        文件夹1-1-3-2
                                    </span>
                                </summary>
                            </details>
                        </details>
                        <details>
                            <summary>
                                <span className={s["tree-item"]}>
                                    文件夹1-1-4
                                </span>
                            </summary>
                        </details>
                    </details>
                    <details>
                        <summary>
                            <span className={s["tree-item"]}>文件夹1-2</span>
                        </summary>
                        <details>
                            <summary>
                                <span className={s["tree-item"]}>
                                    文件夹1-2-1
                                </span>
                            </summary>
                        </details>
                    </details>
                    <details>
                        <summary>
                            <span className={s["tree-item"]}>文件夹1-3</span>
                        </summary>
                    </details>
                    <details>
                        <summary>
                            <span className={s["tree-item"]}>文件夹1-4</span>
                        </summary>
                    </details>
                </details>
            </div>
        </>
    );
}
