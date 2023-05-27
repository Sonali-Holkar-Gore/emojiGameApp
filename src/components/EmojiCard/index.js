import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {emojiName, emojiUrl, id} = emojiDetails
  const clickOnEmoji = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-card-item">
      <button className="button" type="button" onClick={clickOnEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
