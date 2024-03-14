type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	label: string;
};
const Input = ({ label, ...rest }: InputProps) => {
	return (
		<div>
			<label htmlFor={rest.id}>
				{label}
				<input {...rest} />
			</label>
		</div>
	);
};

export default Input;
