import "../app/globals.css";
import type { AppProps } from "next/app";
import "antd/dist/reset.css";

function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default App;
