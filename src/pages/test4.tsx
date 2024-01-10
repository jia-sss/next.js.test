// context useReducer

import type { Dispatch } from "react";
import { createContext, useReducer } from "react";
import ContextTest from "~/components/ContextTest";

const initialState = {
    count: 0,
};

type State = typeof initialState;
type Action = { type: "increment" | "decrement" };

interface TestContextProps {
    state: State;
    dispatch: Dispatch<Action>;
}

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + 1 };
        case "decrement":
            return { ...state, count: state.count - 1 };
        default:
            throw new Error();
    }
};

export const TestContext = createContext<TestContextProps>(undefined!);

export default function Test4() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <TestContext.Provider value={{ state, dispatch }}>
            <ContextTest />
        </TestContext.Provider>
    );
}
