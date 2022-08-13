<template>
  <div>
    <navigation class="nav" />
    <h1 class="heading__primary">All products</h1>

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
export default {
  name: 'all-products',
  components: {
    navigation,
    productcard,
    footercomp,
  },

  data() {
    return {
      products: [],
    };
  },

  created() {
    productservice.getAllProducts().then((res) => {
      this.products = res.data;
    });
  },
};
</script>

<style scoped>
.nav {
  margin-bottom: 3rem;
}
.heading__primary {
  text-align: center;
  text-transform: uppercase;
  font-weight: 300;
  font-family: montserrat, sans-serif;
  margin-bottom: 3rem;
}

.section-product {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 3rem;
  margin-bottom: 8rem;
}
</style>
