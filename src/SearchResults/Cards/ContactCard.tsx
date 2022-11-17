import withCard from './Card';
import cardStyles from './Card.module.scss';

export default withCard(Contact, 'search-result-contact');

type ContactProps = {
  name: string;
  company: string;
  emails: Array<string>;
  phones: Array<string>;
}

function Contact(props: ContactProps) {
  return (
    <>
      <h2 className={cardStyles.title}>{props.name}</h2>
      <p>{props.company}</p>
      <h4>emails:</h4>
      {props.emails?.map((email: string) => (<p key={email}>{email}</p>))}
      <h4>Phones:</h4>
      {props.phones?.map((phone: string) => (<p key={phone}>{phone}</p>))}
    </>
  )
}
