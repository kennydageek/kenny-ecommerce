<template>
  <div>
    <button @click="addToCart"><slot>View All Products</slot></button>
  </div>
</template>

<script>
export default {
  name: 'kc-button-sec',

  methods: {
    addToCart() {
      console.log('Kenny');
    },
  },
};
</script>

<style scoped>
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
