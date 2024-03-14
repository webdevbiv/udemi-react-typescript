import { CartItem, addToCart, removeFromCart } from '../store/cart-slice';
import { useCartSelector, useCartDispatch } from '../store/hooks';
import { getCartItems } from '../store/selectors';

export default function CartItems() {
	const dispatch = useCartDispatch();
	const cartItems = useCartSelector(getCartItems);

	const formattedTotalPrice = `$${cartItems
		.reduce((total, item) => total + item.price * item.quantity, 0)
		.toFixed(2)}`;

	function handleRemoveFromCart(id: string) {
		dispatch(removeFromCart(id));
	}

	function handleAddToCart(item: CartItem) {
		dispatch(addToCart(item));
	}

	return (
		<div id='cart'>
			<p>No items in cart!</p>

			<ul id='cart-items'>
				{cartItems.map((item) => {
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
				})}
			</ul>

			<p id='cart-total-price'>
				Cart Total: <strong>{formattedTotalPrice}</strong>
			</p>
		</div>
	);
}
