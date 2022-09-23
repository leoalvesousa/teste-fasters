import Image from "next/image";
import { useState } from "react";
import bellImg from "../../assets/bell.svg";
import iconImg from "../../assets/icon.svg";
import searchImg from "../../assets/search.svg";
import ContentModal from "../../components/ContentModal/ContentModal";
import Modal from "../../components/Modal/Modal";
import Style from "../../styles/Header.module.scss";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={Style.container}>
            <div className={Style.wrapDate}>
                <h1>Janeiro</h1>
                <h3>Quinta-Feira - 4 de Janeiro - 2022</h3>
            </div>
            <div className={Style.wrapButtons}>
                <button className={Style.eventButtons} onClick={() => setIsOpen(true)}>
                    + Create event
                </button>
                <Modal open={isOpen}>
                    <ContentModal onClose={() => setIsOpen(false)} />
                </Modal>

                <div className={Style.search}>
                    <button>
                        <Image src={searchImg} />
                    </button>
                    <input placeholder='Search task, event, calendar ' />
                </div>

                <button className={Style.buttons}>
                    <Image className='img' src={bellImg} />
                </button>
                <button className={Style.buttons}>
                    <Image className='img' src={iconImg} />
                </button>
            </div>
        </div>
    );
}
