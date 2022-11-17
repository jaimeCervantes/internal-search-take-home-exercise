import cardStyles from './Card.module.scss';

export default function GoogleDriveCard(props) {
  return (
    <article className={cardStyles.card} data-cy="search-result-gdrive">
      <h2 className={cardStyles.title}>{props.title}</h2>
      <p>{props.path}</p>
      <h4>Shared with:</h4>
      {props.shared_with?.map((item: string) => (<p>{item}</p>))}
    </article>
  );
}