<template>
  <div class="product-card">
    <h1 class="product__title">School bag</h1>
    <div class="product-image">
      <img
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt="product image"
        class="product-image__image"
      />
    </div>

    <p class="product__price">$10</p>

    <button>Add to Cart</button>
  </div>
</template>

<script>
export default {
  name: 'product-card',
  components: {},
};
</script>

<style scoped>
.product-card {
  box-shadow: 0 0 2rem 0 rgba(0, 0, 0, 0.7);
  padding: 2rem;
  width: 30rem;
  /* height: 20rem; */
}

.product-category {
}

.product-image {
  width: 60%;
  margin: 0 auto;
}

.product-image__image {
  width: 100%;
  /* height: 100%; */
}

.product__title {
  margin-bottom: 2rem;
  color: #4ca2e4;
  text-transform: capitalize;
  font-family: montserrat, sans-serif;
  font-weight: 300;
}

.product__price {
  text-align: center;
  margin: 2rem 0;
}

button {
  display: block;
  padding: 1rem 3.5rem;
  background-color: #4ca2e4;
  border: 1px solid #4ca2e4;
  cursor: pointer;
  font-family: montserrat, sans-serif;
  font-size: 1.4rem;
  text-transform: capitalize;
  margin: 0 auto;
  transition: all 0.2s ease-in-out;
}

button:hover {
  background-color: transparent;
}
</style>
