import styles from './Card.module.scss';
import { useState } from 'react';

export default function withCard(Child: Function, type: string) {
  return function (props: { pinned?: Boolean }) {
    const [isPinned, setIsPinned] = useState(() => Boolean(props.pinned));

    function togglePin() {
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