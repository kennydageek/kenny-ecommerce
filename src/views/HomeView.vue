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
          Do you need clothes and accessories that look cheaply expensive and
          comfortable at the same time? Then you are at the right place
        </p>
        <kcbutton />
      </div>
    </header>
  </div>
</template>

<script>
import navigation from '@/components/navigation';
import kcbutton from '@/components/kcbutton';
export default {
  components: {
    navigation,
    kcbutton,
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
</style>
