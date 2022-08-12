<template>
  <div>
    <nav class="navigation">
      <div class="nav-menu">
        <i class="fa-solid fa-bars"></i>
      </div>

      <ul class="nav-list hidden">
        <li class="nav-list-item">
          <router-link class="nav-list__links" :to="{ name: 'categories' }"
            >Categories</router-link
          >
        </li>

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

      <router-link class="nav-list__links" :to="{ name: 'home' }">
        <div class="nav-logo">
          <img
            src="https://cdn.shopify.com/s/files/1/2337/2329/files/Organic_Savanna_logo_-_homepage_2_125x.png?v=1616758509"
            alt="logo"
            class="nav-logo__image"
          />
        </div>
      </router-link>
      <div class="nav-cart">
        <div class="nav-cart-user">
          <i class="fa-solid fa-user"></i>
        </div>
        <div class="nav-cart-cart">
          <i class="fa-solid fa-bag-shopping"></i>

          <div class="nav-cart-number">
            <p class="nav-cart-number__number">0</p>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navigation-comp',
};
</script>

<style scoped>
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3.5rem;
  box-shadow: 0 0px 5px 1px #c9cbc9;
  background-color: white;
}

.nav-menu {
  cursor: pointer;
  font-size: 2.4rem;
  color: black;
}

.nav-logo {
  width: 10rem;
}

.nav-logo__image {
  width: 100%;
  height: 100%;
}

.nav-cart {
  display: flex;
  /* position: relative; */
  justify-content: space-between;
  width: 6rem;
  font-size: 2.4rem;
  color: black;
}

.nav-cart-cart {
  cursor: pointer;
}

.nav-cart-user {
  cursor: pointer;
}

.nav-cart-number {
  position: relative;
}

.nav-cart-number__number {
  position: absolute;
  background-color: #4ca2e4;
  color: white;
  border-radius: 5px;
  padding: 0.3rem 0.5rem;
  font-size: 1.4rem;
  top: -4.1rem;
  left: 1.5rem;
}

.nav-list {
  display: flex;
  justify-content: space-between;
  list-style: none;
  /* background: red; */
  width: 40rem;
}

.nav-list-item {
}

.nav-list__links {
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
}

.nav-list__links:hover {
  color: #4ca2e4;
}

@media only screen and (min-width: 769.99px) {
  .navigation {
    padding: 1.5rem 15rem;
  }
  .nav-menu {
    display: none;
  }

  .nav-list {
    display: flex !important;
  }
}
</style>
