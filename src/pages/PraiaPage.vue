<template>
    <div class="container">
        <h1>Praias</h1>
        <div class="container w-75 p-3">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <CardsMain imgSrc="https://magazine.zarpo.com.br/wp-content/uploads/2020/04/praia-do-leblon_zarpo-1.png"
                imgAlt="Imagem de uma praia" cardLink="/praias" cardHeading="Leblon" cardMsg="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
                <a href="#marker" class="stretched-link" @click="leblonClick"> Ver no Google Maps </a>
            </CardsMain>
            <CardsMain imgSrc="https://americasoftalmocenter.com/wp-content/uploads/2021/06/praias-barra-da-tijuca.jpg"
                imgAlt="Imagem de um ponto turístico" cardLink="/pontostur" cardHeading="Barra da Tijuca" cardMsg="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
                <a href="#marker" class="stretched-link" @click="barraClick"> Ver no Google Maps </a>
            </CardsMain>
            <CardsMain
                imgSrc="https://a.cdn-hotels.com/gdcs/production62/d586/1be9ef68-2abb-45f3-98e2-3fb842683b9e.jpg"
                imgAlt="Imagem de um restaurante" cardLink="/restaurantes" cardHeading="Copacabana" cardMsg="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
                <a href="#marker" class="stretched-link" @click="copaClick"> Ver no Google Maps </a>
            </CardsMain>
            <GoogleMap api-key="AIzaSyA7km0ZUlQWuTy7BfnVBuL52e0TkgcLA1M" id="marker" style="width: 100%; height: 500px"
                    :center="center" :zoom="zoom">
                    <InfoWindow :options="{ position: locations[0], content: 'Clique no ícone debaixo do pop-up' }" />
                    <InfoWindow :options="{ position: locations[1], content: 'Clique no ícone debaixo do pop-up' }" />
                    <InfoWindow :options="{ position: locations[2], content: 'Clique no ícone debaixo do pop-up' }" />
                    
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
        const center = { lat: -22.9725245, lng: -43.19253980428782 }
        const zoom = 14
        const locations = [
            { lat: -22.9872462137657, lng: -43.221210368830704},
            { lat: -23.013011683047072, lng: -43.32008616544449 },
            { lat: -22.973804672209084, lng: -43.18532644389975 }
        ]
        /* const markerOptions = { position: center, label: 'SL', title: 'São Lucas' } */

        return { center, locations, zoom }
    },
    methods: {
        leblonClick() {
            /* this.center = { lat: -22.9872462137657, lng: -43.221210368830704 } */
            this.center = this.locations[0];
            this.zoom = 18
        },
        barraClick() {
            this.center = { lat: -23.013011683047072, lng: -43.32008616544449 } , 
            this.zoom = 18
        },
        copaClick() {
            this.center = { lat: -22.973804672209084, lng: -43.18532644389975 } , 
            this.zoom = 18
        }
    }
})
</script>
