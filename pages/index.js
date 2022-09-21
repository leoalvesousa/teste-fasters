import Style from "../styles/Home.module.scss";
import Header from "./Header";
import LeftMenu from "./LeftMenu";
import MainContent from "./MainContent";

export default function Home() {
    return (
        <div className={Style.container}>
            <LeftMenu />
            <div className={Style.main}>
                <Header />
                <MainContent />
            </div>
        </div>
    );
}
