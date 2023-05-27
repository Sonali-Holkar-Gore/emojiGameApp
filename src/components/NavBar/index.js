import './index.css'

const NavBar = props => {
  const {topScore, isGameInProgress, currentScore} = props
  return (
    <nav className="navbar-container">
      <div className="logo-name-container">
        <img
          className="emoji-logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="name">Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="score-container">
          <p className="score">Score: {currentScore}</p>
          <p className="score">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}
export default NavBar
