import type { SearchFieldProps } from "./SearchField.d";
import styles from './SearchField.module.scss';

export default function SearchField({ label, onSearchHandler }: SearchFieldProps) {
  return (
    <label className={styles.label} data-cy="search-field">
      {label}
      <input type="search" onChange={onSearchHandler} className={styles.input}/>
    </label>
  );
}