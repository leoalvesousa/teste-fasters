import Style from "../../styles/LeftMenu.module.scss";
import Image from "next/image";
import fasterImg from "../../assets/Group1.svg";
import ListMenu from "../../components/ListMenu";
import MyAccount from "../../components/MyAccount";
import System from "../../components/System";

export default function LeftMenu() {
    return (
        <div className={Style.container}>
            <Image src={fasterImg} alt='' />
            <ListMenu />
            <h3>MyAccount</h3>
            <MyAccount />
            <System />
        </div>
    );
}
