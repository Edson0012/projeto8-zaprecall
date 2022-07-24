import play from "../img/play.svg";
import React from "react";

export default function Quests({ task, reply }) {
    return (
        <>
            <div className="quizz">
                <p>Pergunta {reply + 1}</p>;
                <img src={play} />
            </div>
        </>
    );
}
