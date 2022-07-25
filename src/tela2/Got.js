export default function Got({ party, deck, sad }) {
    console.log(deck);

    const result = deck.includes("p-decoration");
    return (
        <>
            {result ? (
                <>
                    <div className="got">
                        <img src={sad} />
                        <strong>Putz...</strong>
                    </div>
                    <p>Ainda faltam alguns... Mas não desanime!</p>
                </>
            ) : (
                <>
                    <div className="got">
                        <img src={party} />
                        <strong>Parabéns!</strong>
                    </div>
                    <p>Você não esqueceu de nenhum flashcard!</p>
                </>
            )}
        </>
    );
}
