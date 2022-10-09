<template>
  <div class="col">
    <div class="card h-100 ">
      <img :src="imgSrc" class="card-img-top" :alt="imgAlt" style="width:100%; height: 70%">
      <div class="card-body">
        <h5 class="card-title">{{ cardHeading }}</h5>
        <p class="card-text"> {{ cardMsg }}</p>
        <router-link class="stretched-link" :to="cardLink"></router-link>
        <slot></slot>
      </div>
    </div>
  </div>
</template>




<script>
export default {
  props: {
    imgSrc: String,
    imgAlt: String,
    cardLink: String,
    cardHeading: String,
    cardMsg: String
  },
  name: 'CardsMain'
}
</script>

<style scoped>

.col {
  margin-top: 40px;
  color: black;
}

 /*  div{
    margin-top: 40px;
  } */
/* h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
} */
</style>
