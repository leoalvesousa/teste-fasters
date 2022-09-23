import "../styles/globals.scss";
import { HydrationProvider } from "react-hydration-provider";

function MyApp({ Component, pageProps }) {
    return (
        <HydrationProvider>
            <Component {...pageProps} />
        </HydrationProvider>
    );
}

export default MyApp;
