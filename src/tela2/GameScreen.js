import zap from "../img/zap.svg";
import "./style.css";
import task from "./Task";
import Quests from "./Quests";

export default function GameScreen() {
    return (
        <main className="screen2">
            <div className="top2">
                <img src={zap} />
                <h1>ZapRecall</h1>
            </div>
            <section className="body">
                {task.map((data, index) => (
                    <Quests reply={index} task={data} />
                ))}
            </section>
            <footer className="finish">0/4 CONCLUÍDOS</footer>
        </main>
    );
}
