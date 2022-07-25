import zap from "../img/zap.svg";
import "./style.css";
import task from "./Task";
import Quests from "./Quests";
import React from "react";
import not from "../img/not.svg";
import remmember from "../img/remmember.svg";
import correct from "../img/correct.svg";
import party from "../img/party.svg";
import Got from "./Got";
import sad from "../img/sad.svg";

export default function GameScreen() {
    const [deck, setDeck] = React.useState([]);

    return (
        <main className="screen2">
            <div className="top2">
                <img src={zap} />
                <h1>ZapRecall</h1>
            </div>
            {deck.length === 4 ? (
                <section className="body2">
                    {task.map((data, index) => (
                        <Quests reply={index} task={data} setDeck={setDeck} />
                    ))}
                </section>
            ) : (
                <section className="body">
                    {task.map((data, index) => (
                        <Quests reply={index} task={data} setDeck={setDeck} />
                    ))}
                </section>
            )}
            {deck.length === 4 ? (
                <footer className="got-quests">
                    <Got party={party} sad={sad} deck={deck} />
                    {deck.length}/4 CONCLUÍDOS
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
            ) : (
                <footer className="finish">
                    {deck.length}/4 CONCLUÍDOS
                    {deck.length > 0 && (
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
                    )}
                </footer>
            )}
        </main>
    );
}
