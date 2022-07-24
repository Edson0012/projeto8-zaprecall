import React from "react";

export default function Rotate({ task, rot, quizz }) {
    const [rota, setRota] = React.useState(false);

    return (
        <>
            {!rota ? (
                <div className={quizz}>
                    <p>{task.question}</p>
                    <img
                        src={rot}
                        onClick={() => {
                            setRota(true);
                        }}
                    />
                </div>
            ) : (
                <div className={quizz}>
                    <p>{task.answer}</p>
                    <div className="quests-reply">
                        <button className="not">Não lembrei</button>
                        <button className="remember">Quase não lembrei</button>
                        <button className="correct">zap!</button>
                    </div>
                </div>
            )}
        </>
    );
}
