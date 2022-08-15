<template>
  <div class="container">
    <div class="heading">
      <div class="img-container">
        <img src="#" alt="" class="img-container__img" />
      </div>
      <p class="container__title">Mens Cotton Jacket</p>
      <p class="delete"><i class="fa-solid fa-trash"></i></p>
    </div>

    <div class="quantity-price">
      <p class="quantity">$55.99 x 1</p>
      <p class="divider">|</p>
      <p class="price">$55.99</p>
    </div>

    <div class="add-minus">
      <p class="minus">&mdash;</p>
      <p class="number">1</p>
      <p class="add">+</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cart-card',
};
</script>

<style scoped>
.container {
  min-width: 20rem;
  max-width: 30rem;
  /* padding: 4rem 0; */
  background: white;
  padding: 2rem;
  box-shadow: 0 0 0.2rem 0 rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  /* border: 1px solid #4ca2e4; */
}

.heading {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.img-container {
  max-width: 10rem;
  height: 5rem;
}

.img-container__img {
  width: 100%;
  height: 100%;
}

.container__title {
  align-self: center;
}

.delete {
  align-self: center;
  cursor: pointer;
}

.quantity-price {
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  border: 1px solid #4ca2e4;
  margin-bottom: 2rem;
}

.quantity {
}

.divider {
  align-self: center;
}

.price {
}

.add-minus {
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background: #4ca2e4;
}

.minus,
.add {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: white;
  /* border: 1px solid white; */
  font-weight: 600;
  text-align: center;
}

.minus {
}

.add {
}
</style>
