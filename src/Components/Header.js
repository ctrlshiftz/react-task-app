import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = (props) => {
	const { title } = props;
	return (
		<header className="header">
			<h1>{title}</h1>
			<Button color="green" text="اضافه کردن" />
		</header>
	);
};

Header.defaultProps = {
	title: 'مدیریت وظایف'
};

Header.propTypes = {
	title: PropTypes.string
};

export default Header;
