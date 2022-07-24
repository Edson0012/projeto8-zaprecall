import play from "../img/play.svg";
import React from "react";
import rotate from "../img/rotate.svg";
import Rotate from "./Rotate";

export default function Quests({ task, reply }) {
    const [quizz, setQuizz] = React.useState("quizz");
    const replyQuizz = () => {
        setQuizz("reply-task");
    };

    return (
        <>
            {quizz === "quizz" ? (
                <div className={quizz}>
                    <p>Pergunta {reply + 1}</p>
                    <img src={play} onClick={replyQuizz} />
                </div>
            ) : (
                <Rotate task={task} rot={rotate} quizz={quizz} />
            )}
        </>
    );
}
