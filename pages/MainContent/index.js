import { useEffect, useState } from "react";
import StaticDatePickerDemo from "../../components/Calendar/Calendar";
import NextEvent from "../../components/NexEvent/index";
import Schedule from "../../components/Schedule";
import Style from "../../styles/MainContent.module.scss";

const timeSchedule = () => {
    const time = [];
    for (let x = 0; x <= 23; x++) {
        time.push(`${String(x).length == 1 ? "0" + x : x}:00`);
    }
    return time;
};

export default function MainContent() {
    const [arrayTime, setArrayTime] = useState(timeSchedule);
    useEffect(() => setArrayTime(timeSchedule), []);

    const [data, setData] = useState([]);

    useEffect(() => {
        const data = [];
        const dados = JSON.parse(localStorage.getItem("Eventos"));

        for (const key in dados) data.push(dados[key]);
        setData(data);
    }, []);

    return (
        <div className={Style.container}>
            <div className={Style.calendar}>
                <StaticDatePickerDemo />
                <h2>Next Event</h2>
                <div className={Style.allEvents}>
                    <div className={Style.allEvents}>
                        <NextEvent items={data} />
                    </div>
                </div>
            </div>

            <div className={Style.schedule}>
                {arrayTime.map((value, index) => (
                    <Schedule key={index} time={value} />
                ))}
            </div>
        </div>
    );
}
