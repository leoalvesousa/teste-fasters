import Style from "../../styles/ListMenu.module.scss";
import calendarImg from "../../assets/calendar.svg";
import messageImg from "../../assets/message.svg";
import reportImg from "../../assets/diagram.svg";
import Image from "next/image";

export default function ListMenu() {
    return (
        <div className={Style.container}>
            <ul>
                <li>
                    <Image src={calendarImg} />
                    <span>Agenda</span>
                </li>
                <li>
                    <Image src={messageImg} />
                    <span>Mensagens</span>
                </li>
                <li>
                    <Image src={reportImg} />
                    <span>Relatórios</span>
                </li>
            </ul>
        </div>
    );
}
