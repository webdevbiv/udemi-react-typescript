import {
	type CartItem as CartItemType,
	addToCart,
	removeFromCart
} from '../store/cart-slice';
import { useCartSelector, useCartDispatch } from '../store/hooks';
import { getCartItems } from '../store/selectors';
import CartItem from './CartItem';

export default function CartItems() {
	const dispatch = useCartDispatch();
	const cartItems = useCartSelector(getCartItems);

	const formattedTotalPrice = `$${cartItems
		.reduce((total, item) => total + item.price * item.quantity, 0)
		.toFixed(2)}`;

	function handleRemoveFromCart(id: string) {
		dispatch(removeFromCart(id));
	}

	function handleAddToCart(item: CartItemType) {
		dispatch(addToCart(item));
	}

	return (
		<div id='cart'>
			{cartItems.length === 0 && <p>No items in cart!</p>}

			{cartItems.length > 0 && (
				<ul id='cart-items'>
					{cartItems.map((item) => (
						<CartItem
							key={item.id}
							item={item}
							handleRemoveFromCart={handleRemoveFromCart}
							handleAddToCart={handleAddToCart}
						/>
					))}
				</ul>
			)}

			<p id='cart-total-price'>
				Cart Total: <strong>{formattedTotalPrice}</strong>
			</p>
		</div>
	);
}
