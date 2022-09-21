import React from "react";
import { debounce } from "lodash";
import { Snowflakes, Center, Button, RippleBox } from "../components";
import usePortal from "react-useportal";

const title = "usePortal in next.js app";

export default function App() {
    const {
        openPortal: openFirstPortal,
        closePortal: closeFirstPortal,
        isOpen: isFirstOpen,
        Portal: FirstPortal,
    } = usePortal();

    const [openSecondPortal, closeSecondPortal, isSecondOpen, SecondPortal] = usePortal();
    // popup: ['', '', 'width=600,height=400,left=200,top=200']

    return (
        <Snowflakes>
            <Center>
                <h1 style={{ color: "white" }}>{title}</h1>
                <Button onClick={openFirstPortal}> </Button>
                {isFirstOpen && (
                    <FirstPortal>
                        <RippleBox>
                            <Center style={{ width: "100%", textAlign: "center" }}>
                                <h2>First</h2> <br />
                                To close me:
                                <br />
                                click outside
                                <br />
                                hit ESC,
                                <br />
                                or click the button below
                                <br /> 😊
                                <br />
                                <button
                                    onClick={(e) => {
                                        closeFirstPortal();
                                        openSecondPortal(e);
                                    }}
                                >
                                    Close Me and Open Second
                                </button>
                            </Center>
                        </RippleBox>
                    </FirstPortal>
                )}
                {isSecondOpen && (
                    <SecondPortal>
                        <RippleBox>
                            <Center style={{ width: "100%", textAlign: "center" }}>
                                <h2>Second</h2> <br />
                                To close me:
                                <br />
                                click outside
                                <br />
                                hit ESC,
                                <br />
                                or click the button below
                                <br /> 😊
                                <br />
                                <button onClick={debounce(closeSecondPortal, 300)}>Close Me</button>
                            </Center>
                        </RippleBox>
                    </SecondPortal>
                )}
            </Center>
            <style jsx global>
                {`
                    body {
                        margin: 0px;
                    }
                `}
            </style>
        </Snowflakes>
    );
}
