import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
	<> 
	{contacts.map(({ id, name, number }) => (
		<li key={id} className={css.contactsItem}>
			<p className={css.contactText}>
				{name}: {number}
			</p>
			<button
				className={css.button}
				type='button'
				onClick={() => onDeleteContact(id)}>
				Delete
			</button>
		</li>
	))}
		{/* <ul className={css.contactsList}>
			{children}
		</ul> */}
	</>
);

ContactList.propTypes = {
	contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
    
};

export default ContactList;

/* export const ContactsList = ({ foundContact, deleteContact }) => {
  return (
    <ul>
      {foundContact.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <p>{name}</p>
            <p>{number}</p>

            <button type="button" onClick={() => deleteContact(id)}>
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  foundContact: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
}; */