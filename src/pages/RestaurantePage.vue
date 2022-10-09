<template>
    <div class="container">
        <h1>Restaurantes</h1>
        <div class="container w-75 p-3">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <CardsMain imgSrc="https://duisktnou8b89.cloudfront.net/img/stores/6089903080a72.png"
                    imgAlt="Imagem de uma praia" cardLink="/praias" cardHeading="Amir"
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
        const center = { lat: -22.965475458404843, lng: -43.17676259116765 }
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