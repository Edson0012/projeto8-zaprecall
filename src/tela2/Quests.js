import play from "../img/play.svg";
import React from "react";
import rotate from "../img/rotate.svg";
import Rotate from "./Rotate";
import not from "../img/not.svg";
import correct from "../img/correct.svg";
import remmember from "../img/remmember.svg";

export default function Quests({ task, reply }) {
    const [quizz, setQuizz] = React.useState(true);
    const [question, setQuestion] = React.useState("p-quest");
    const replyQuizz = () => {
        setQuizz(false);
    };

    return (
        <>
            {quizz ? (
                <div className="quizz">
                    <p className={question}>Pergunta {reply + 1}</p>
                    {question === "p-quest" && (
                        <img src={play} onClick={replyQuizz} />
                    )}
                    {question === "p-decoration" && <img src={not} />}
                    {question === "p-correct" && <img src={correct} />}
                    {question === "p-remmember" && <img src={remmember} />}
                </div>
            ) : (
                <Rotate
                    task={task}
                    rot={rotate}
                    setQuizz={setQuizz}
                    setQuestion={setQuestion}
                />
            )}
        </>
    );
}
