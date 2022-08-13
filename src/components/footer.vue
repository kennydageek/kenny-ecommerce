<template>
  <footer class="footer">
    <h1 class="heading__primary">KenCommerce</h1>
    <p class="section__heading">Kenny's Portfolio: Kehinde Ajibade</p>
    <div class="section-socials">
      <p>
        <a href="https://www.linkedin.com/in/kehinde-ajibade/" target="_blank"
          ><i class="fa-brands fa-linkedin"></i
        ></a>
      </p>
      <p>
        <a
          href="https://twitter.com/Kennyractural?t=P6ANmT1GxMU5RQUgeOb3ig&s=09"
          target="_blank"
          ><i class="fa-brands fa-twitter"></i
        ></a>
      </p>
      <p>
        <a href="https://github.com/kennydageek" target="_blank"
          ><i class="fa-brands fa-github"></i
        ></a>
      </p>
    </div>
    <p class="footer-text">
      UI designed and developed by Kenny. Web Application built with Vue solely
      for practice and showcase purposes
    </p>
  </footer>
</template>

<script>
export default {
  name: 'kc-footer',
};
</script>

<style scoped>
.footer {
  padding: 3rem 5rem;
  min-height: 30rem;
  background-color: #4ca2e4;
}

.heading__primary {
  font-size: 4.2rem;
  text-align: center;
  font-family: fraunces, sans-serif;
  /* color: #4ca2e4; */
  margin-bottom: 1rem;
}

.section__heading {
  text-align: center;
  font-size: 2rem;
  /* color: white; */
  margin-bottom: 1rem;
}

.section-socials {
  display: flex;
  justify-content: space-between;
  /* background: blue; */
  width: 15rem;
  margin: 0 auto 1rem auto;
  font-size: 2.8rem;
  color: white;
}

a {
  color: white;
  transition: all 0.2s ease-in-out;
}

a:hover {
  color: black;
}

.footer-text {
  text-align: center;
  /* width */
}
</style>
