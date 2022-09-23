import Image from "next/image";
import Style from "../../styles/ContentModal.module.scss";
import xImg from "../../assets/x.svg";
import NextEvent from "../../components/NexEvent/index";
import { useEffect, useState } from "react";
import NewSchedule from "../NewSchedule";
import axios from "axios";

export default function ContentModal({ onClose }) {
    const [event, setEvent] = useState([]);
    const [events, setEvents] = useState([]);
    const [weather, setWeather] = useState({});

    useEffect(() => {
        if (localStorage.getItem("Eventos") !== null)
            setEvents(JSON.parse(localStorage.getItem("Eventos")));
    }, []);

    useEffect(() => {
        localStorage.setItem("Eventos", JSON.stringify(events));
    }, [events]);

    const getValues = (e) => {
        setEvent((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
        return;
    };

    <NextEvent events={events} />;
    <NewSchedule events={events} />;

    function save() {
        setEvents([...events, event]);
    }

    useEffect(() => {
        axios
            .get(
                "https://api.openweathermap.org/data/2.5/weather?q=sao%20paulo&lang=pt_br&units=metric&appid=4dfb358349b7d4b15eafb37d70980725"
            )
            .then(function (response) {
                if (response.status === 200) {
                    setWeather(response.data);
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, []);

    console.log(event.title === "");

    return (
        <div className={Style.Modal}>
            <div className={Style.items}>
                <h2>Defina o horário do seu evento:</h2>
                <div className={Style.hours}>
                    <h2>Inicio</h2>
                    <input
                        className={Style.timeStart}
                        type='time'
                        id='timeStart'
                        name='appt'
                        onChange={getValues}
                    />
                    <h2>Fim</h2>
                    <input
                        className={Style.timeEnd}
                        type='time'
                        id='timeEnd'
                        name='appt'
                        onChange={getValues}
                    />
                </div>
            </div>
            <div className={Style.items}>
                <h2>Data</h2>
                <input className={Style.date} type='date' id='date' onChange={getValues} />
            </div>

            <div className={Style.items}>
                <h2>Titulo</h2>
                <input
                    className={Style.title}
                    placeholder='Titulo'
                    id='title'
                    value={event.title}
                    onChange={getValues}
                />
            </div>
            <div className={Style.items}>
                <h2>Descrição</h2>
                <input
                    className={Style.description}
                    placeholder='Descreva seu evento '
                    id='description'
                    onChange={getValues}
                />
            </div>
            <div className={Style.items}>
                <div className={Style.local}>
                    <h2>Temperatura atual</h2>
                    <span> {weather?.main?.temp} ºC</span>
                </div>

                <button onClick={onClose}>
                    <Image className={Style.xImg} src={xImg} alt='' />
                </button>
                <button className={Style.save} onClick={save} disabled={event?.title === ""}>
                    Salvar
                </button>
            </div>
        </div>
    );
}
