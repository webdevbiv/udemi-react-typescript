import React from 'react';
import { Link } from 'react-router-dom';

type BaseProps = {
	children: React.ReactNode;
	textOnly?: boolean;
	onClick?: () => void; // Add other common props as needed
};

type ButtonProps = BaseProps & {
	to?: string; // Make 'to' optional
	// Include any other props specific to when acting as a <Link>
};

const Button = ({ to, textOnly, children, onClick, ...rest }: ButtonProps) => {
	const className = `button ${textOnly ? 'text-only' : ''}`;

	// When 'to' prop is provided, render as a <Link>
	if (to) {
		return (
			<Link
				to={to}
				className={className}
				{...rest}>
				{children}
			</Link>
		);
	}

	// Otherwise, render as a <button>
	return (
		<button
			className={className}
			onClick={onClick}
			{...rest}>
			{children}
		</button>
	);
};

export default Button;
