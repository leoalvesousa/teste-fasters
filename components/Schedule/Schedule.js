import { PinDropSharp, PortraitSharp } from "@material-ui/icons";
import Style from "../../styles/Schedule.module.scss";
import NewSchedule from "./NewSchedule";
export default function Schedule(props) {
    return (
        <div className={Style.container}>
            <table style={{ borderTop: "0.2px solid #E8E8E8" }}>
                <tr>
                    <td style={{ width: "180px", color: "#B4BAC5" }} rowSpan='2'>
                        {props.time}
                    </td>
                    <td style={{ width: "850px", height: "40px", borderLeft: "1px solid #E8E8E8" }}>
                        {props.time == "08:00" && <NewSchedule />}
                    </td>
                </tr>
                <tr>
                    <td style={{ height: "40px", borderLeft: "1px solid #E8E8E8" }}></td>
                </tr>
            </table>
        </div>
    );
}
