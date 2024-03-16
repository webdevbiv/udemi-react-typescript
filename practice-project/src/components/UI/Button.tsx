import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

// Setting up shared BaseProps that will be used no matter if a <button> or <Link> should be rendered
type BaseProps = {
	children: ReactNode;
	textOnly?: boolean;
};

// Setting up Button / Link specific props
// The `to` prop will be used to determine if a <button> or <Link> should be rendered
type ButtonProps = ComponentPropsWithoutRef<'button'> &
	BaseProps & { to?: never };
type ButtonLinkProps = LinkProps & BaseProps & { to: string };

function isRouterLink(
	props: ButtonProps | ButtonLinkProps
): props is ButtonLinkProps {
	return 'to' in props;
}

export default function Button(props: ButtonProps | ButtonLinkProps) {
	if (isRouterLink(props)) {
		const { children, textOnly, ...otherProps } = props;
		return (
			<Link
				className={`button ${textOnly ? 'button--text-only' : ''}`}
				{...otherProps}>
				{children}
			</Link>
		);
	}

	const { children, textOnly, ...otherProps } = props;

	return (
		<button
			className={`button ${textOnly ? 'button--text-only' : ''}`}
			{...otherProps}>
			{children}
		</button>
	);
}
