<template>
    <div class="container">
        <h3>Explore a cidade do Rio!</h3>
        <div class="container w-50 p-3">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <CardsMain imgSrc="https://magazine.zarpo.com.br/wp-content/uploads/2020/04/praia-do-leblon_zarpo-1.png"
                    imgAlt="Imagem de uma praia" cardLink="/praias" cardHeading="Praias" cardMsg=""></CardsMain>
                <CardsMain imgSrc="https://all.accor.com/magazine/imagerie/accessible-rio-4721.jpg"
                    imgAlt="Imagem de um ponto turístico" cardLink="/pontostur" cardHeading="Pontos turísticos"
                    cardMsg="">
                </CardsMain>
                <CardsMain
                    imgSrc="https://1.bp.blogspot.com/-yb-zJyNmNZE/YI7OoPb3MVI/AAAAAAABefk/-y8nsD8wPL4eaUJzfPUANec0Gr0yZC8RQCLcBGAsYHQ/s16000/20210417_140525.jpg"
                    imgAlt="Imagem de um restaurante" cardLink="/restaurantes" cardHeading="Restaurantes" cardMsg="">
                </CardsMain>
                <CardsMain
                    imgSrc="https://www.elasviajando.com.br/wp-content/uploads/2021/06/hotel-com-vista-para-o-mar-no-rj-7-1170x730.jpg"
                    imgAlt="Imagem de um hotel" cardLink="/hoteis" cardHeading="Hotéis" cardMsg=""></CardsMain>
                <CardsMain
                    imgSrc="https://saolucascopacabana.com.br/Lists/Destaque%20Institucional/Attachments/1/Foto-Fachada_Aplic-Nova-Marca.jpg?RenditionID=7"
                    imgAlt="Imagem de um hospital" cardLink="/hospitais" cardHeading="Hospitais" cardMsg=""></CardsMain>
                <CardsMain imgSrc="https://www.atribunarj.com.br/wp-content/uploads/2021/02/cidadedapolicia.jpg"
                    imgAlt="Imagem de uma delegacia" cardLink="/delegacias" cardHeading="Delegacias" cardMsg="">
                </CardsMain>
            </div>
        </div>
        <h3 class="heading-carousel">Eventos que estão rolando na cidade!</h3>
        <CarouselMain class="carrossel"></CarouselMain>
        <!-- <ul id="js-items">
            <li v-if="!items.length">Desculpe, não há itens</li>
            <li v-for="item in items" :key="item.task">
                {{ item.task }} </li>
        </ul> -->

    </div>
</template>
<!-- <ul id = "js-items">
    <li v-if="!items.length">Desculpe, não há itens</li>
    <li v-for="item in items" :class="{ 'done': item.status }">
    {{ item.task }}  </li>

</ul>

<script>
    Vue.createApp({
        data(){
            return{
                items: []
            }
        },
        created() {
            fetch("data.json")
            .then(res => res.json())
            .then(data => {
                this.items = data.items
            })
        }
    }).mount("#js-items")
</script> -->

<script>
import CardsMain from '@/components/CardsMain.vue';
import CarouselMain from '@/components/CarouselMain.vue';

export default {
    name: "MainPage",
    components: { CardsMain, CarouselMain },
    /* data() {
        return {
            items: []
        }
    },
    created() {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => {
                this.items = data.items
            })
    } */
}
</script>


<style scoped>


.heading-carousel {
    margin-top: 30px;
}

/* h2{
    font-size: 2.7vmax;
} */
</style>