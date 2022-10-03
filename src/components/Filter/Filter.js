import React from 'react';
import propTypes from 'prop-types';
import css from './Filter.module.css';


const Filter = ({ filter, onChange }) => {
    return (
        <div className={css.filterWrap}>
            <label className={css.label}>Find contact by name</label>
            <input
                className={css.input}
                value={filter}
                type='text'
                onChange={onChange}
            ></input>
        </div>
    );
};

Filter.propTypes = {
  filter: propTypes.string,
  onChange: propTypes.func,
};

export default Filter;