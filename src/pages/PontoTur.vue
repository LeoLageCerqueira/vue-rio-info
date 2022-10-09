<template>
    <div class="container">
        <h1>Pontos turísticos</h1>
        <div class="container w-75 p-3">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <CardsMain
                    imgSrc="https://www.viajali.com.br/wp-content/uploads/2016/08/cristo-rio-de-janeiro-730x486.jpg"
                    imgAlt="Imagem de uma praia" cardLink="" cardHeading="Cristo Redentor"
                    cardMsg="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
                    <a href="#marker" class="stretched-link" @click="cristoClick"> Ver no Google Maps </a>
                </CardsMain>
                <CardsMain
                    imgSrc="https://www.momondo.com.br/discover/wp-content/uploads/sites/282/2016/01/b9921517-5cf6-3614-9f14-b7e7ff365176.jpg"
                    imgAlt="Imagem de um ponto turístico" cardLink="" cardHeading="Parque Lage"
                    cardMsg="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
                    <a href="#marker" class="stretched-link" @click="lageClick"> Ver no Google Maps </a>
                </CardsMain>
                <CardsMain
                    imgSrc="https://www.momondo.com.br/discover/wp-content/uploads/sites/282/2016/01/f6b68978-0256-3db6-ac44-a98c5d609574.jpg"
                    imgAlt="Imagem de um restaurante" cardLink="" cardHeading="Escadaria Selarón"
                    cardMsg="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
                    <a href="#marker" class="stretched-link" @click="selaronClick"> Ver no Google Maps </a>
                </CardsMain>
                <CardsMain
                    imgSrc="https://www.viagensecaminhos.com/wp-content/uploads/2021/02/bondinho-pao-de-acucar-pontos-turisticos-rio-de-janeiro.jpg"
                    imgAlt="Imagem de um hotel" cardLink="" cardHeading="Bondinho do pão de açúcar"
                    cardMsg="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
                    <a href="#marker" class="stretched-link" @click="bondinhoClick"> Ver no Google Maps </a>
                </CardsMain>
                <GoogleMap api-key="AIzaSyA7km0ZUlQWuTy7BfnVBuL52e0TkgcLA1M" id="marker"
                    style="width: 100%; height: 500px" :center="center" :zoom="zoom">
                    <InfoWindow :options="{ position: locations[0], content: 'Clique no ícone debaixo do pop-up' }" />
                    <InfoWindow :options="{ position: locations[1], content: 'Clique no ícone debaixo do pop-up' }" />
                    <InfoWindow :options="{ position: locations[2], content: 'Clique no ícone debaixo do pop-up' }" />
                    <InfoWindow :options="{ position: locations[3], content: 'Clique no ícone debaixo do pop-up' }" />
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
            { lat: -22.951892594756014, lng: -43.2104846032087054 },
            { lat: -22.95815407678391, lng: -43.21164266262867 },
            { lat: -22.915256801282975, lng: -43.17921076363861 },
            { lat: -22.955739757699398, lng: -43.16698796669558 }
        ]
        /* const markerOptions = { position: center, label: 'SL', title: 'São Lucas' } */

        return { center, locations, zoom }
    },
    methods: {
        cristoClick() {
            this.center = { lat: -22.951892594756014, lng: -43.2104846032087054 }
            this.zoom = 18
        },
        lageClick() {
            this.center = { lat: -22.95815407678391,  lng: -43.21164266262867 },
                this.zoom = 18
        },
        selaronClick() {
            this.center = { lat: -22.915256801282975, lng: -43.17921076363861 },
                this.zoom = 18
        },
        bondinhoClick() {
            this.center = { lat: -22.955739757699398, lng: -43.16698796669558 },
                this.zoom = 18
        }
    }
})
</script>
