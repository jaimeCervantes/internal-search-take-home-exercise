import cardStyles from './Card.module.scss';

export default function TweetCard(props) {
  return <div className={cardStyles.card} data-cy="search-result-tweet">
    <h2 className={cardStyles.title}>{props.user}</h2>
    <p>{props.message}</p>
  </div>
}