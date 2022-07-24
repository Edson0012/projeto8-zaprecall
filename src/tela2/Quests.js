import play from "../img/play.svg";
import React from "react";
import rotate from "../img/rotate.svg";

export default function Quests({ task, reply }) {
    const [quizz, setQuizz] = React.useState("quizz");
    const replyQuizz = () => {
        setQuizz("reply-task");
    };

    return (
        <>
            <div className={quizz}>
                <p>
                    {quizz === "quizz"
                        ? `Pergunta ${reply + 1}`
                        : task.question}
                </p>
                ;
                <img
                    src={quizz === "quizz" ? play : rotate}
                    onClick={replyQuizz}
                />
            </div>
        </>
    );
}
