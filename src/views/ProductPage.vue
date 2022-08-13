<template>
  <div>
    <navigation class="nav" />
    <div class="product-container">
      <div class="product-image">
        <img :src="product.image" alt="" class="product-image__image" />
      </div>
      <div class="product-content">
        <div class="product-text">
          <p class="product__category">{{ product.category }}</p>
          <h1 class="product__heading">{{ product.title }}</h1>
          <p class="product__description">{{ product.description }}</p>
          <a href="#" class="btn">Buy Now</a>
        </div>
      </div>
    </div>
    <section class="section-parallax">
      <kcparallax />
    </section>

    <kcfooter />
  </div>
</template>

<script>
import productservice from '@/services/productservice.js';
import navigation from '@/components/navigation';
import kcfooter from '@/components/footer';
import kcparallax from '@/components/kcparallax';
// import kcbutton from '@/components/kcbutton';
export default {
  components: {
    navigation,
    kcfooter,
    kcparallax,
    // kcbutton,
  },
  props: ['id'],
  name: 'kc-product',
  data() {
    return {
      product: [],
    };
  },
  created() {
    productservice.getSingleProduct(this.id).then((res) => {
      this.product = res.data;
    });
  },
};
</script>

<style scoped>
.nav {
  /* margin-bottom: 8rem; */
}

.product-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 5rem;
  /* max-width: 90rem; */
  /* height: 30rem; */
  background-color: white;
  margin-bottom: 8rem;
}

.product-image {
  padding: 5rem;
  flex-basis: 40rem;
  min-width: 30rem;
  /* max-height: 80vh; */
  background: white;
  /* border-right: 1px solid #4ca2e4; */
  margin-right: 2rem;
}

.product-image__image {
  width: 100%;
  max-height: 100%;
}

.product-content {
  padding: 2rem;
  flex-basis: 40rem;
  /* min-height: 30rem; */
  background: #4ca2e4;
  box-shadow: 0 0 2rem 0 rgba(0, 0, 0, 0.4);
  min-width: 30rem;
  max-width: 40rem;
}

.product-text {
}

.product__category {
  font-weight: 600;
  text-transform: capitalize;
  margin-bottom: 2rem;
}

.product__heading {
  font-weight: 300;
  font-family: fraunces, sans-serif;
  font-size: 2.4rem;
  margin-bottom: 3rem;
}

.product__description {
  margin-bottom: 3rem;
}

.btn {
  display: block;
  font-family: montserrat, sans-serif;
  font-weight: 600;
  font-size: 1.4rem;
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  background-color: rgba(0, 0, 0, 0.449);
  text-align: center;
  padding: 1rem 0;
  border: 1px solid #4ca2e4;
  transition: all 0.2s ease-in-out;
}

.btn:hover {
  border: 1px solid #4ca2e4;
  background-color: rgb(131, 115, 14);
}

.section-parallax {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 30rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('../../public/images/philanthropy.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  padding: 6rem 0;
  margin-bottom: 8rem;
}

@media only screen and (min-width: 630.99px) {
  .product-container {
    flex-direction: row;
    justify-content: center;
  }

  .product-content {
    align-self: center;
  }
}
</style>
