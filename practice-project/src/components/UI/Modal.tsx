import { forwardRef, useRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';

export type ModalHandle = {
	open: () => void;
};

type ModalProps = {
	children: React.ReactNode;
	onClose: () => void;
};

const Modal = forwardRef<ModalHandle, ModalProps>(function Modal(
	{ children, onClose },
	ref
) {
	const dialogRef = useRef<HTMLDialogElement>(null);

	useImperativeHandle(ref, () => {
		return {
			open: () => {
				if (dialogRef.current) {
					dialogRef.current.showModal();
				}
			}
		};
	});

	return createPortal(
		<dialog
			ref={dialogRef}
			onClose={onClose}>
			{children}
		</dialog>,
		document.getElementById('modal-root')!
	);
});

export default Modal;
