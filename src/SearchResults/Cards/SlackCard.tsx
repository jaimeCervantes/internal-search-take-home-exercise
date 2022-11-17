import withCard from './Card';
import styles from './Card.module.scss';

export default withCard(Slack, 'search-result-slack');

function Slack(props) {
  return (
    <>
      <h2 className={styles.title}>{props.channel}</h2>
      <p><strong>{props.author}</strong></p>
      <p>{props.message}</p>
    </>
  );
}