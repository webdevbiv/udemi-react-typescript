import { Link, LinkProps } from 'react-router-dom';

type ButtonProps = LinkProps &
	React.ButtonHTMLAttributes<HTMLButtonElement> & {
		text: string;
		textOnly?: boolean;
	};

const Button = ({ to, text, textOnly, ...rest }: ButtonProps) => {
	const className = 'button ' + (textOnly ? 'text-only' : '');

	return to ? (
		<Link
			to={to}
			className={className}
			{...rest}>
			{text}
		</Link>
	) : (
		<button
			className={className}
			{...rest}>
			{text}
		</button>
	);
};

export default Button;
