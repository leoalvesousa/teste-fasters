import Image from "next/image";
import Style from "../../styles/NextEvent.module.scss";
import clockImg from "../../assets/clock.svg";

export default function NextEvent() {
    return (
        <div className={Style.container}>
            <div className={Style.event}>
                <h2>Entrevista com RH</h2>
                <h3>20 Setembro 2022</h3>
                <div className={Style.clock}>
                    <Image className='img' src={clockImg} />
                    <span> 08:00 - 09:30 AM </span>
                </div>
            </div>
        </div>
    );
}
