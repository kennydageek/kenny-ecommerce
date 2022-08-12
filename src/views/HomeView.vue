<template>
  <div>
    <header class="header">
      <navigation />
      <div class="header-content">
        <h1 class="heading__primary">
          The Art of <br />
          Slaying
        </h1>
        <p class="header__text">
          Do you need clothes and accessories that look cheaply<br />expensive
          and comfortable at the same time? Then<br />
          you are at the right place
        </p>
        <kcbutton />
      </div>
    </header>

    <section class="section-customer-fav">
      <h1 class="section-heading">Customer Favorites</h1>
      <div class="section-wrapper">
        <productcard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
      <kcbuttonsec class="section__btn">View All Products</kcbuttonsec>
    </section>
  </div>
</template>

<script>
import navigation from '@/components/navigation';
import kcbutton from '@/components/kcbutton';
import kcbuttonsec from '@/components/kcbuttonsec';
import productcard from '@/components/productcard';
import axios from 'axios';

export default {
  components: {
    navigation,
    kcbutton,
    kcbuttonsec,
    productcard,
  },

  data() {
    return {
      products: [],
    };
  },

  created() {
    axios
      .get('https://fakestoreapi.com/products?limit=3')
      .then((res) => {
        this.products = res.data;

        console.log(this.products);
      })
      .catch((error) => {
        console.log('There was an error:' + error.response);
      });
  },
};
</script>

<style scoped>
.header {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('../../public/images/pexels-anna-shvets-5325586.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* padding: 0 2rem; */
}

.header-content {
  padding: 0 2rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.heading__primary {
  font-family: 'fraunces', serif;
  color: rgba(247, 248, 246, 0.5);
  letter-spacing: 2px;
  color: #27d9b5;
  background-image: -webkit-linear-gradient(0deg, #4ca2e4, #dcd8e6);
  background-clip: text;
  -webkit-background-clip: text;
  /* text-fill-color: transparent; */
  -webkit-text-fill-color: transparent;
  font-size: 5.8rem;
  margin-bottom: 2rem;
}

.header__text {
  font-size: 1.8rem;
  color: #faf9fa;
  margin-bottom: 4rem;
}

.nav-list__links:hover {
  color: #4ca2e4;
}

.section-customer-fav {
  min-height: 30rem;
  /* background: red; */
  padding: 5rem 3rem;
}

.section-heading {
  text-align: center;
  font-family: montserrat, sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 4rem;
}

.section-wrapper {
  /* background: red; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.section__btn {
  margin-top: 3rem;
}

@media only screen and (min-width: 769.99px) {
  .header-content {
    padding: 0 15rem;
  }

  .section-wrapper {
    justify-content: center;
  }
}

@media only screen and (min-width: 1050.99px) {
  .header-blob {
    display: block !important;
  }
}
</style>
