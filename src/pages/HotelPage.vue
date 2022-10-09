<template>
    <div class="container">


        
        <h1>Hotéis</h1>
        <div class="container w-75 p-3">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <CardsMain imgSrc="https://ilovetrip.com.br/wp-content/uploads/Windsor-Marapendi-1.jpg"
                    imgAlt="Imagem de um hotel" cardLink="" cardHeading="Windsor"
                    cardMsg="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
                    <a href="#marker" class="stretched-link" @click="windsorClick"> Ver no Google Maps </a>
                </CardsMain>
                <CardsMain imgSrc="https://invexo.com.br/blog/wp-content/uploads/2021/01/sheraton-leblon.jpg"
                    imgAlt="Imagem de um hotel" cardLink="/hoteis" cardHeading="Sheraton"
                    cardMsg="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
                    <a href="#marker" class="stretched-link" @click="sheratonClick"> Ver no Google Maps </a>
                </CardsMain>
                <GoogleMap api-key="AIzaSyA7km0ZUlQWuTy7BfnVBuL52e0TkgcLA1M" id="marker" style="width: 100%; height: 500px"
                    :center="center" :zoom="zoom">
                    <InfoWindow :options="{ position: locations[0], content: 'Clique no ícone debaixo do pop-up' }" />
                    <InfoWindow :options="{ position: locations[1], content: 'Clique no ícone debaixo do pop-up' }" />
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
    components: { GoogleMap, InfoWindow, CardsMain },
    setup() {
        const center = { lat: -22.9725245, lng: -43.19253980428782 }
        const zoom = 14
        const locations = [
            { lat: -22.967150711507067,  lng: -43.18003038808659},
            { lat: -22.99214215, lng: -43.23314565979372 }
        ]
        /* const markerOptions = { position: center, label: 'SL', title: 'São Lucas' } */

        return { center, locations, zoom }
    },
    methods: {
        windsorClick() {
            this.center = { lat: -22.967189248998274,   lng: -43.18007531089668,}
            this.zoom = 19
        },
        sheratonClick() {
            this.center = { lat: -22.992141212371973, lng: -43.233293379227796 } , 
            this.zoom = 19
        }
    }
})
</script>