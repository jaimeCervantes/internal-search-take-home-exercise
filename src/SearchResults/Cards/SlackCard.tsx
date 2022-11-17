import cardStyles from './Card.module.scss';

export default function ImageCard(props) {
  return <div className={cardStyles.card} data-cy="search-result-slack">
    <h2 className={cardStyles.title}>{props.channel}</h2>
    <p>{props.author}</p>
    <p>{props.message}</p>
  </div>
}