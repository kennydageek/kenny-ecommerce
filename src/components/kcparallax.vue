<template>
  <div class="parallax-card">
    <h1 class="parallax-heading">A different way of doing busineess</h1>

    <p class="parallax-text">
      At KenCommerce we believe products should not onlly be made well but
      should also <strong>do good</strong> and <strong>empower people</strong>.
      100% of profits from your purchase are reinvested for social good -
      directly impacting the people making your product.
    </p>

    <kcbutton>Shop Now</kcbutton>
  </div>
</template>

<script>
import kcbutton from '@/components/kcbuttonsec';

export default {
  name: 'kc-components',
  components: {
    kcbutton,
  },
};
</script>

<style scoped>
.parallax-card {
  min-width: 24rem;
  max-width: 24rem;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.536);
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.651);
}

.parallax-heading {
  font-size: 1.6rem;
  text-transform: uppercase;
  margin-bottom: 3rem;
  text-align: center;
}

.parallax-text {
  font-size: 1.4rem;
  margin-bottom: 2rem;
}
</style>
