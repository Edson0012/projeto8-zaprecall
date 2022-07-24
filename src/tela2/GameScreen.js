import zap from "../img/zap.svg";
import "./style.css";
import task from "./Task";
import Quests from "./Quests";
import React from "react";
import not from "../img/not.svg";
import remmember from "../img/remmember.svg";
import correct from "../img/correct.svg";
export default function GameScreen() {
    const [finish, setFinish] = React.useState("finish");

    const [deck, setDeck] = React.useState([]);

    return (
        <main className="screen2">
            <div className="top2">
                <img src={zap} />
                <h1>ZapRecall</h1>
            </div>
            <section className="body">
                {task.map((data, index) => (
                    <Quests
                        reply={index}
                        task={data}
                        setFinish={setFinish}
                        setDeck={setDeck}
                    />
                ))}
            </section>
            <footer className={finish}>
                {deck.length}/8 CONCLUÍDOS
                <div className="answered">
                    {deck.map((data) => {
                        switch (data) {
                            case "p-decoration":
                                return <img src={not} />;

                            case "p-correct":
                                return <img src={correct} />;

                            case "p-remmember":
                                return <img src={remmember} />;

                            default:
                                break;
                        }
                    })}
                </div>
            </footer>
        </main>
    );
}
