import Style from "../../styles/ContentModal.module.scss";

export default function ContentModal({ onClose }) {
    return (
        <div className={Style.Modal}>
            <div className={Style.items}>
                <h2>Horario</h2> <input className={Style.time} type='time' id='appt' name='appt' />
            </div>

            <div className={Style.items}>
                <h2>Titulo</h2>
                <input className={Style.title} placeholder='Titulo' />
            </div>
            <div className={Style.items}>
                <h2>Descrição</h2>
                <input className={Style.description} placeholder='Descreva seu evento ' />
            </div>
            <div className={Style.items}>
                <h2>Data</h2>
                <input className={Style.date} type='date' />
            </div>
            <div className={Style.items}>
                <h2>Local</h2>
                <button onClick={onClose}>X</button>
            </div>
        </div>
    );
}
