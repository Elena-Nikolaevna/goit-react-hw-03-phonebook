import React from 'react';
import propTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ children }) => (
	<>
		<ul className={css.contactsList}>
			{children}
		</ul>
	</>
);

ContactList.propTypes = {
    children: propTypes.node.isRequired,
};

export default ContactList;