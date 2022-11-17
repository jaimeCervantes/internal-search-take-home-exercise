import styles from './Card.module.scss';
import { useState } from 'react';

type CardProps = {
  id: string;
  isPinned?: Boolean;
  updatePin: Function
}

export default function withCard(Child: Function, type: string) {
  
  return function CardWrapper(props: CardProps ) {
    const [isPinned, setIsPinned] = useState(() => Boolean(props.isPinned));

    function togglePin() {
      props.updatePin(props.id, !isPinned);
      setIsPinned(!isPinned);
    }

    return (
      <article className={styles.card} data-cy={type}>
        <div className={styles.actions}>
          {
            isPinned
            ? <button className={styles.action} onClick={togglePin}>📌</button>
            : <button className={styles.action} onClick={togglePin}>Pin</button>
          }
        </div>
        <Child {...props}></Child>
      </article>
    );
  }
}