<template>
    <div class="container">
        <!-- <a href="#markerHospital">Vá para o marker!</a> -->
        <h1>Hospitais</h1>
        <div class="container w-75 p-3">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div>
                    <CardsMain
                        imgSrc="https://saolucascopacabana.com.br/Lists/Destaque%20Institucional/Attachments/1/Foto-Fachada_Aplic-Nova-Marca.jpg?RenditionID=7"
                        imgAlt="Imagem de uma praia" cardLink="" cardHeading="Hospital São Lucas"
                        cardMsg="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
                        <a href="#marker" class="stretched-link" @click="divClick"> Ver no Google Maps </a>
                    </CardsMain>
                </div>
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
        const center = { lat: -22.972171404234892, lng: -43.1929320512094 }  
        const zoom = 15
        /* const markerOptions = { position: center, label: 'SL', title: 'São Lucas' } */

        return { center, zoom }
    },
    methods: {
        divClick() {
            /* this.center = { lat: -22.967095200000003, lng: -43.17993655260279 } */
            this.zoom = 21
            console.log(this.center);
            console.log(this.zoom);
        }
    }
})
</script>
                