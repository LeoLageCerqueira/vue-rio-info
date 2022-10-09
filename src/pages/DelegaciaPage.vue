<template>
    <div class="container">
        <h1>Delegacias</h1>
        <div class="container w-75 p-3">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <CardsMain imgSrc="https://www.atribunarj.com.br/wp-content/uploads/2021/02/cidadedapolicia.jpg"
                    imgAlt="Imagem de um ponto turístico" cardLink="" cardHeading="Cidade da Policia"
                    cardMsg="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
                    <a href="#marker" class="stretched-link" @click="divClick"> Ver no Google Maps </a>
                </CardsMain>


                <GoogleMap api-key="AIzaSyA7km0ZUlQWuTy7BfnVBuL52e0TkgcLA1M" id="marker"
                    style="width: 100%; height: 500px " :center="center" :zoom="zoom">
                    <InfoWindow :options="{ position: center, content: 'Clique no ícone debaixo do pop-up' }" />
                </GoogleMap>

            </div>

        </div>

    </div>
</template>

<script>
import CardsMain from "@/components/CardsMain.vue";
import { defineComponent } from 'vue'
import { GoogleMap, InfoWindow } from 'vue3-google-map'

export default defineComponent({
    components: { GoogleMap, CardsMain, InfoWindow },
    setup() {
        const center = { lat: -22.881832630402787, lng: -43.255508363261754 }
        const zoom = 15

        return { center, zoom }
    },
    methods: {
        divClick() {
            this.zoom = 21
            console.log(this.center);
            console.log(this.zoom);
        }
    }
})
</script>

<style>
#marker {
    color: black;
}
</style>