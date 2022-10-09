<template>
    <div>
        <h3>Como foi a experiência ao usar este site?</h3>
        <div class="container">
            <form @submit.prevent="submitForm">
                <!-- <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            </div> -->
                <label for="name">Seu nome: </label>
                <input type="text" id="name" name="name" v-model.trim="inputName">

                <h5>Minha experiência ao usar este site foi: </h5>
                <div class="avaliacoes">

                    <label for="avaliacao-bom">Boa</label>
                    <input type="radio" id="avaliacao-bom" value="boa" name="avaliacao" v-model="inputAvaliacao" />
                    <label for="avaliacao-medio">Médio</label>
                    <input type="radio" id="avaliacao-medio" value="média" name="avaliacao" v-model="inputAvaliacao" />
                    <label for="avaliacao-ruim">Ruim</label>
                    <input type="radio" id="avaliacao-ruim" value="ruim" name="avaliacao" v-model="inputAvaliacao" />

                </div>
                <button class="btn btn-secondary" value="submit">Avaliar</button>
            </form>

            <div class="resultados">
                <div class="divBtnResultado">
                    <button class="btn btn-secondary" @click="formResults">Atualizar</button>
                </div>
                <h5>Avaliações: </h5>
                <p v-for="(resultado, index) in resultados" :key="index">
                    <span class="highlight">{{ resultado.name }}</span> teve uma experiência
                    <span :class="avaliacaoStyle">{{ resultado.avaliacao }}</span>.
                </p>
                <!-- <ul>
                    <li v-for="(resultado, index) in resultados" :key="index">
                        {{ resultado.name }}
                        {{ resultado.avaliacao }}
                    </li>
                </ul> -->
            </div>
        </div>
    </div>
</template>

<script>


export default {
    data() {
        return {
            inputName: '',
            inputAvaliacao: null,
            resultados: [],
        }
    },
    computed: {
        avaliacaoStyle() {
            console.log(this.resultados.avaliacao);
            return 'avaliacao--' + this.resultados.avaliacao;
        }
    },
    methods: {
        submitForm() {
            fetch('https://vue-rio-info-api-default-rtdb.firebaseio.com/avaliacoes.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: this.inputName,
                    avaliacao: this.inputAvaliacao

                })
            });
            this.inputName = '';
        },

        formResults() {
            fetch('https://vue-rio-info-api-default-rtdb.firebaseio.com/avaliacoes.json').then((response) => {
                if (response.ok) {
                    return response.json();
                }
            }).then((data) => {
                const resultados = [];
                for (const id in data) {
                    resultados.push({
                        id: id,
                        name: data[id].name,
                        avaliacao: data[id].avaliacao
                    });
                }
                this.resultados = resultados;
            })

        }
    },
    mounted() {
        this.formResults();
    }

}
</script>

<style scoped>
.avaliacao--boa {
    color: blue;
}

form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 30px;
    background-color: whitesmoke;
    color: black;
    /* background-color: rgb(221, 203, 214); */
    /* background-color: white; */
    padding: 30px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
}

form h5 {
    margin-top: 50px;
    margin-bottom: 10px;
}

label {
    padding: 10px;
}

.resultados {
    display: flex;
    position: relative;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 30px;
    /* background-color: rgb(9, 9, 36); */
    background-color: whitesmoke;
    color: black;
    /* background-color: rgb(221, 203, 214); */
    padding: 30px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
}

.resultados h5 {
    margin: 30px;
}


</style>