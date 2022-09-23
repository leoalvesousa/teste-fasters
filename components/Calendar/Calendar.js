import "react-calendar/dist/Calendar.css";
import Agenda from "react-calendar";
import { useEffect, useState } from "react";

export default function Calendar() {
    const [dateState, setDateState] = useState(new Date());
    useEffect((e) => setDateState(e), []);
    const changeDate = (e) => {
        setDateState(e);
    };
    return (
        <div>
            <Agenda onChange={changeDate} value={dateState} onClickDay={(e) => console.log(e)} />
        </div>
    );
}
