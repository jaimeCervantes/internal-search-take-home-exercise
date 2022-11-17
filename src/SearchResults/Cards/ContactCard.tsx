import cardStyles from './Card.module.scss';

export default function ContactCard(props) {
  return (
    <article className={cardStyles.card} data-cy="search-result-contact">
      <h2 className={cardStyles.title}>{props.name}</h2>
      <p>{props.company}</p>
      <h4>emails:</h4>
      {props.emails?.map((email: string) => (<p>{email}</p>))}
      <h4>Phones:</h4>
      {props.phones?.map((phone: string) => (<p>{phone}</p>))}
    </article>
  );
}