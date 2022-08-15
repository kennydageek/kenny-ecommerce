<template>
  <div>
    <navigation class="nav" />
    <cart class="cart hidden" />
    <h1 class="heading__primary">Shop Men</h1>

    <section class="section-product">
      <productcard
        v-for="product in products"
        :key="product.id"
        :choice="product"
      />
    </section>

    <footercomp />
  </div>
</template>

<script>
import productservice from '@/services/productservice.js';
import navigation from '@/components/navigation';
import productcard from '@/components/productcard';
import footercomp from '@/components/footer';
import cart from '@/components/cart';
export default {
  name: 'all-products',
  components: {
    navigation,
    productcard,
    footercomp,
    cart,
  },

  data() {
    return {
      products: [],
    };
  },

  created() {
    productservice.getMen().then((res) => {
      this.products = res.data;
    });
  },
};
</script>

<style scoped>
.cart {
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;
}

.nav {
  margin-bottom: 3rem;
}
.heading__primary {
  text-align: center;
  text-transform: uppercase;
  font-weight: 300;
  font-family: montserrat, sans-serif;
}

.section-product {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 3rem;
  margin-bottom: 8rem;
}
</style>
