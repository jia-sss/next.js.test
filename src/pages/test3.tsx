import { useState, useEffect, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function calculateData(windowWidth: number) {
    const circleSize = 60;
    const width = windowWidth / 3;

    return {
        circleSize,
        width,
        from: -circleSize * 2,
        stop: width / 2 + circleSize,
        to: windowWidth + 2 * circleSize,
    };
}

function App() {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [windowWidth]);

    const data = useMemo(() => {
        return calculateData(windowWidth);
    }, [windowWidth]);

    const { scrollYProgress } = useScroll();

    const widthRange = useTransform(
        scrollYProgress,
        [0.1, 0.3, 0.7, 0.9],
        [data.circleSize, data.width, data.width, data.circleSize]
    );

    const rotateRange = useTransform(scrollYProgress, [0.3, 0.7], [0, 540]);

    const xMove = useTransform(
        scrollYProgress,
        [0, 0.1, 0.3, 0.7, 0.9, 1],
        [data.from, data.stop, data.stop, data.stop, data.stop, data.to]
    );

    const opacityChange = useTransform(
        scrollYProgress,
        [0, 0.2, 0.21, 0.565, 0.566, 1],
        [0, 0, 1, 1, 0, 0]
    );

    return (
        <div className="container" style={{ height: "600vh", width: "100vw" }}>
            <div
                style={{
                    height: "100vh",
                    width: "100vw",
                    backgroundColor: "black",
                    position: "fixed",
                    top: 0,
                    display: "flex",
                    // justifyContent:'center',
                    alignItems: "center",
                }}
            >
                <motion.div
                    id="circleContainer"
                    style={{
                        x: xMove,
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <motion.div
                        style={{
                            position: "absolute",
                            zIndex: -1,
                            opacity: opacityChange,
                            fontFamily: "sans-serif",
                            fontSize: "18px",
                        }}
                    >
                        <span
                            style={{
                                color: "gray",
                            }}
                        >
                            time to{" "}
                            <span
                                style={{
                                    fontWeight: "bold",
                                    color: "white",
                                }}
                            >
                                explore
                            </span>
                        </span>
                    </motion.div>
                    <motion.div
                        className="effectCircle"
                        style={{
                            height: data.circleSize,

                            width: widthRange,
                            backgroundColor: "white",
                            borderRadius: data.circleSize / 2,
                            rotate: rotateRange,
                            originX: `${data.width - data.circleSize / 2}px`,
                            originY: 0.5,
                        }}
                    ></motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default App;
