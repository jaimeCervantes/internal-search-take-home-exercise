import withCard from './Card';
import styles from './Card.module.scss';

export default withCard(Image, 'search-result-image');

function Image(props) {
  return (
    <>
      <h2 className={styles.title}>{props.description}</h2>
      <img src={props.image} alt={props.description} width="100%" />
    </>
  )
}