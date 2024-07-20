

export default function PieceSelector({piece, selectPiece}){

    const pieces = ['sword', 'helmet', 'chestpiece', 'necklace', 'ring', 'boots'];

    return(
        <div className="gear-element-container">
            {pieces.map(item => 
                <button
                    className={piece === item ? 'gear-element-button selected' : 'gear-element-button'}
                    onClick={() => selectPiece(item)}
                >
                    <img className="gear-element-icon" src={`./images/${item}.png`} alt={`${item}`}/>
                </button>
            )}
        </div>
    )
}