import cardStyles from './Card.module.scss';

export default function ImageCard(props) {
  return (
    <article className={cardStyles.card} data-cy="search-result-image">
      <h2 className={cardStyles.title}>{props.description}</h2>
      <img src={props.image} alt={props.description} width="100%" />
    </article>
  )
}