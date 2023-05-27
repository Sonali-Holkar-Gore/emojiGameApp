import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, onClickPlayAgain} = props
  const imgUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const resultDisplay = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'
  return (
    <div className="result-container">
      <div className="result-details-container">
        <h1 className="result">{resultDisplay}</h1>
        <p className="best-score">{scoreLabel}</p>
        <p className="final-score">{score}/12</p>
        <button
          className="play-again-button"
          type="button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <img src={imgUrl} className="result-image" alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
