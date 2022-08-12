<template>
  <div>
    <router-link :to="{ name: 'categories' }" class="btn btn__primary"
      ><slot>Shop now</slot></router-link
    >
  </div>
</template>

<script>
export default {
  name: 'kc-buton',
};
</script>

<style scoped>
.btn {
  /* background: linear-gradient(to right, #4ca2e4, #dcd8e6); */
  padding: 1rem 3.5rem;
  text-transform: uppercase;
  font-family: quicksand;
  font-weight: 600;
  font-size: 1.5rem;
  text-decoration: none;
}

.btn__primary {
  background-color: transparent;
  border: 1px solid #4ca2e4;
  color: #dcd8e6;
  transition: all 0.2s ease-in-out;
}

.btn__primary:hover {
  background: #4ca2e4;
  color: #dcd8e6;
  border: 1px solid #dcd8e6;
}
</style>
