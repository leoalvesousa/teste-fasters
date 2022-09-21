import Style from "../../styles/MyAccount.module.scss";
import profileImg from "../../assets/profile-circle.svg";
import peopleImg from "../../assets/people.svg";
import boardImg from "../../assets/menu-board.svg";
import Image from "next/image";

export default function MyAccount() {
    return (
        <div className={Style.container}>
            <ul>
                <li>
                    <Image className='img' src={profileImg} />
                    <span>Meus Eventos</span>
                </li>
                <li>
                    <Image className='img' src={peopleImg} />
                    <span>Meu Time</span>
                </li>
                <li>
                    <Image className='img' src={boardImg} />
                    <span>Minhas Atividades</span>
                </li>
            </ul>
        </div>
    );
}