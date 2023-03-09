import { useDispatch, useSelector } from 'react-redux';
import { getFiltered } from 'redux/contacts/contactsSelector';
import { filterContacts } from 'redux/contacts/contactsSlice';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filtered = useSelector(getFiltered);

  const handleFilter = ev => {
    const { value } = ev.target;
    dispatch(filterContacts(value.trim()));
  };

  return (
    <label name="filter" className={styles.wrapper}>
      <span className={styles.text}>You can find contacts by name</span>
      <input
        type="text"
        name="filter"
        value={filtered}
        onChange={ev => {
          handleFilter(ev);
        }}
        className={styles.input}
      />
    </label>
  );
};

export default Filter;
