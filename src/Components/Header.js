import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Tasks from './Tasks';

const Header = (props) => {
	const { title } = props;

	const clicked = (e) => {
		console.log('کلیک شد');
		console.log(e);
	};

	return (
		<header className="header">
			<h1>{title}</h1>
			<Button onClick={clicked} color="green" text="اضافه کردن" />
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
