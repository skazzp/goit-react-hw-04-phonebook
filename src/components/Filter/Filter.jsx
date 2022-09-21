import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ setFilter, filterState }) => {
  return (
    <label htmlFor="filter">
      <p className={css.label}>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filterState}
        onChange={setFilter}
      />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  filterState: PropTypes.string,
  setFilter: PropTypes.func,
};
