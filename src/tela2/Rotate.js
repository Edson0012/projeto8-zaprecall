import React from "react";

export default function Rotate({ task, rot, setQuizz, setQuestion, setDeck }) {
    const change = (color) => {
        setQuizz(true);
        setQuestion(color);
        setDeck((deck) => {
            return [...deck, color];
        });
    };

    const [rota, setRota] = React.useState(false);

    return (
        <>
            {!rota ? (
                <div className="reply-task">
                    <p>{task.question}</p>
                    <img
                        src={rot}
                        onClick={() => {
                            setRota(true);
                        }}
                    />
                </div>
            ) : (
                <div className="reply-task">
                    <p>{task.answer}</p>
                    <div className="quests-reply">
                        <button
                            className="not"
                            onClick={() => change("p-decoration")}
                        >
                            Não
                            <br />
                            lembrei
                        </button>
                        <button
                            className="remember "
                            onClick={() => change("p-remmember")}
                        >
                            Quase não lembrei
                        </button>
                        <button
                            className="correct"
                            onClick={() => change("p-correct")}
                        >
                            zap!
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
