<template>
  <div class="cart">
    <p class="cancel"><i class="fa-solid fa-xmark"></i></p>
    <div class="heading">
      <p class="cart__heading">Your Cart</p>
      <p class="clear__cart">Clear Cart</p>
    </div>

    <p class="cart__text">Your cart is empty</p>
    <p class="cart__total">Total: $0.00</p>

    <a href="#" class="checkout">Checkout</a>
  </div>
</template>

<script>
export default {
  name: 'kc-cart',
};
</script>

<style scoped>
.cart {
  width: 50%;
  padding: 3rem;
  height: 100vh;
  background: white;
}

.cancel {
  text-align: right;
  font-size: 2.4rem;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 3rem;
}

.heading {
  display: flex;
  justify-content: space-between;
}

.cart__heading {
  font-size: 2rem;
  font-weight: 600;
}

.clear__cart {
  font-weight: 600;
}

.cart__text {
  margin-top: 10rem;
  text-align: center;
  margin-bottom: 3rem;
}

.cart__total {
  font-size: 2.4rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
}

.checkout {
  width: 60%;
  margin: 0 auto;
  display: block;
  text-align: center;
  background: #4ca2e4;
  padding: 1rem 0;
  text-decoration: none;
  color: black;
  font-weight: 600;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;
}

.checkout:hover {
  border: 1px solid #4ca2e4;
  background-color: transparent;
}

@media only screen and (max-width: 689.99px) {
  .cart {
    width: 100%;
  }
}
</style>
