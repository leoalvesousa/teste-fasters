import Image from "next/image";
import Style from "../../styles/NextEvent.module.scss";
import clockImg from "../../assets/clock.svg";

export default function NextEvent({ items }) {
    return (
        <>
            {items.map((item, index) => (
                <div className={Style.container}>
                    <div className={Style.event}>
                        <h2>{item.title}</h2>
                        <h3> {item.date}</h3>
                        <div className={Style.clock}>
                            <Image src={clockImg} />
                            <span>
                                {item.timeStart} - {item.timeEnd}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
