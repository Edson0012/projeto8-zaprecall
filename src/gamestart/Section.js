import "./style.css";
import zap from "../img/zap.svg";
import React from "react";

export default function Section({ inicial }) {
    return (
        <section className="screen">
            <div className="top">
                <img src={zap} />
                <h1>ZapRecall</h1>
            </div>
            <div
                className="button"
                onClick={() => {
                    inicial(false);
                }}
            >
                Iniciar Recall!
            </div>
            <footer></footer>
        </section>
    );
}
