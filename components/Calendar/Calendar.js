import "react-calendar/dist/Calendar.css";
import Agenda from "react-calendar";
import { useState } from "react";

export default function Calendar() {
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <Agenda onChange={onChange} value={value} />
        </div>
    );
}
