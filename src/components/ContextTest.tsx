import { useContext } from "react";
import { TestContext } from "~/pages/test4";

export default function ContextTest() {
    const {
        state: { count },
        dispatch,
    } = useContext(TestContext);
    return (
        <div>
            {count}
            <button
                onClick={() => {
                    dispatch({ type: "increment" });
                }}
            >
                +
            </button>
            <button
                onClick={() => {
                    dispatch({ type: "decrement" });
                }}
            >
                -
            </button>
        </div>
    );
}
