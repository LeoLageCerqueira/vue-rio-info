<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/main">Rio-Info</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li class="nav-item">
                            <router-link class="nav-link" aria-current="page" to="/main">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/restaurantes">Onde comer</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/hoteis">Onde ficar</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Explorar
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <router-link class="dropdown-item" to="/pontostur">Pontos turísticos</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/praias">Praias</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/restaurantes">Restaurantes</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/hoteis">Hotéis</router-link>
                                </li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/hospitais">Hospitais</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/delegacias">Delegacias</router-link>
                                </li>
                            </ul>

                        </li>
                        <div class="d-flex justify-content-end">
                            <li class="nav-item">
                                <router-link class="nav-link" to="/comentarios">Deixe seu comentário</router-link>
                            </li>
                        </div>
                    </ul>

                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>