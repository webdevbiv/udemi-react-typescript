import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
type ModalProps = {
	children: React.ReactNode;
};

const Modal = ({ children }: ModalProps) => {
	const dialogRef = useRef<HTMLDialogElement>(null);

	const open = () => {
		if (dialogRef.current) {
			dialogRef.current.showModal();
		}
	};

	useEffect(() => {
		// Expose the open method to the outside
		(window as any).openModal = open;
	}, []);

	return ReactDOM.createPortal(
		<dialog ref={dialogRef}>{children}</dialog>,
		document.getElementById('modal-root')!
	);
};

export default Modal;
