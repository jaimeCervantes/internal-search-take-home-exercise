import withCard from './Card';
import styles from './Card.module.scss';

export default withCard(GoogleDriveAsset, 'search-result-gdrive');

function GoogleDriveAsset(props) {
  return (
    <>
      <h2 className={styles.title}>{props.title}</h2>
      <p>{props.path}</p>
      <h4>Shared with:</h4>
      {props.shared_with?.map((item: string) => (<p key={item}>{item}</p>))}
    </>
  );
}