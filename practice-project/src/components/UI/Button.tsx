import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

type BaseProps = {
	children?: React.ReactNode;
	textOnly?: boolean;
};

type ButtonLinkProps = LinkProps & BaseProps;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
	BaseProps & {
		to?: never;
	};

// Type guard function to check if props are for ButtonLinkProps
function isLink(
	props: ButtonProps | ButtonLinkProps
): props is ButtonLinkProps {
	return 'to' in props;
}

const Button = ({ textOnly, ...props }: ButtonProps | ButtonLinkProps) => {
	const className = `button ${textOnly ? 'text-only' : ''}`;

	if (isLink(props)) {
		// Props specific to <Link>
		const { children, to, ...rest } = props;
		return (
			<Link
				to={to}
				className={className}
				{...rest}>
				{children}
			</Link>
		);
	} else {
		// Props specific to <button>
		// Since ButtonProps includes all valid <button> attributes, you can spread them directly
		const { children, ...rest } = props;
		return (
			<button
				className={className}
				{...rest}>
				{children}
			</button>
		);
	}
};

export default Button;
