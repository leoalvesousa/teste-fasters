import Style from "../../styles/System.module.scss";
import settingImg from "../../assets/setting.svg";
import logoutImg from "../../assets/logout.svg";
import Image from "next/image";

export default function System() {
    return (
        <div className={Style.container}>
            <h3>System</h3>
            <ul>
                <li>
                    <Image className='img' src={settingImg} />
                    <span>Configurações</span>
                </li>
                <li>
                    <Image className='img' src={logoutImg} />
                    <span>Sair</span>
                </li>
            </ul>
        </div>
    );
}
