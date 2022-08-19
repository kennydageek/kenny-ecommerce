<template>
  <div class="nav">
    <p class="cancel" @click="closeNav()">
      <i class="fa-solid fa-xmark"></i>
    </p>
    <ul class="nav-list">
      <li class="nav-list-item">
        <router-link class="nav-list__links" :to="{ name: 'shop-men' }"
          >Shop Men</router-link
        >
      </li>

      <li class="nav-list-item">
        <router-link class="nav-list__links" :to="{ name: 'shop-women' }"
          >Shop Women</router-link
        >
      </li>

      <li class="nav-list-item">
        <router-link class="nav-list__links" :to="{ name: 'jewelleries' }"
          >Jewelleries</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    closeNav() {
      let cancel = document.querySelector('.nav');
      cancel.classList.add('hidden');
      //   console.log(cancel);
    },
  },
};
</script>

<style scoped>
.hidden {
  display: none !important;
}

.nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100vh;
  background: white;
  padding: 3rem;
}

.nav-list {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style-type: none;
}

.nav-list__links {
  text-decoration: none;
  color: black;
  transition: all 0.2s ease-in-out;
}

.nav-list__links:hover {
  color: #4ca2e4;
}

.nav-list-item {
  margin: 2rem 0;
  font-size: 2.4rem;
}

.cancel {
  text-align: right;
  font-size: 2rem;
  cursor: pointer;
}
</style>
