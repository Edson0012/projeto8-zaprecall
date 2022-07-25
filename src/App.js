import Section from "./gamestart/Section";
import React from "react";
import GameScreen from "./tela2/GameScreen";

export default function App() {
    const [screen, setScreen] = React.useState(true);
    return <> {screen ? <Section inicial={setScreen} /> : <GameScreen />}</>;
}
