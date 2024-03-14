import { type CartItem } from '../store/cart-slice';

type CartItemProps = {
	item: CartItem;
	handleRemoveFromCart: (id: string) => void;
	handleAddToCart: (item: CartItem) => void;
};

function CartItem({
	item,
	handleRemoveFromCart,
	handleAddToCart
}: CartItemProps) {
	const formattedPrice = `$${item.price.toFixed(2)}`;
	return (
		<li key={item.id}>
			<div>
				<span>{item.title}</span>
				<span> ({formattedPrice})</span>
			</div>
			<div className='cart-item-actions'>
				<button onClick={() => handleRemoveFromCart(item.id)}>-</button>
				<span>{item.quantity}</span>
				<button onClick={() => handleAddToCart(item)}>+</button>
			</div>
		</li>
	);
}

export default CartItem;
