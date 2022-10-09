<template>
    <div>
        <footer>
            <div class="caixa-footer">
                <p>&copy; Copyright Rio-Info</p>
                <ul class="social">
                    <li><a id="facebook" href="http://www.facebook.com/">Facebook</a></li>
                    <li><a id="twitter" href="https://twitter.com/">Twitter</a></li>
                    <li><a id="google" href="https://currents.google.com/">Google</a></li>
                </ul>
            </div>
        </footer>
    </div>
</template>

<style scoped>
footer {
    background-color: rgb(16, 16, 59);
    color: #ccc;
    margin: 30px 0px;
    clear: both;
    height: 100px;
    margin-bottom: 0;
}

footer img {
    vertical-align: middle;
    margin-left: 30px;
}

ul.social li a {
    width: 32px;
    height: 32px;
    display: inline-block;
    text-indent: -9999px;

}

ul.social li #facebook {
    background-image: url(@/assets/sociais.png);
    background-position: 0px;
}

ul.social li #twitter {
    background-image: url(@/assets/sociais.png);
    background-position: 32px;
}

ul.social li #google {
    background-image: url(@/assets/sociais.png);
    background-position: 80px;
}

.caixa-footer {
    display: flex;
    position: relative;
    padding: 10px;
}

.caixa-footer p {
    margin-top: 40px;
}

.social {
    position: absolute;
    top: 30px;
    right: 20px;

}

ul.social li {
    display: inline;
}
</style>