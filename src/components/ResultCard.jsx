import "../styles/ResultCard.scss";

const ResultCard = ({ card }) => {
  return (
    <div className="result-card">
      <div className="result-card__top">
        <span>
          {card[4]} - {card[5]}
        </span>
        <span>Email : {card[2]}</span>
      </div>
      <div className="result-card__bottom">
        {card[0]} - {card[3].slice(card[3].length - 4, card[3].length)}
      </div>
      <div className="result-card__line" />
    </div>
  );
};

export default ResultCard;
