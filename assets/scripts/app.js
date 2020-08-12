Vue.component('header-component', {

    template:`
    <a href="index.html">
        <div class="header">

            <h1>
                Combinación eficaz
            </h1>
            <!-- <img src="assets/images/header.png" alt=""> -->

        </div>
    </a>
    `

})

Vue.component("footer-component",{

    template:`

    <footer>

            <div class="container-fluid">
                <img class="sup-footer" src="assets/images/sup-footer.png" alt="">
                    <div class="enlaces">
                        <div class="eficacia">
                            <a href="hyaneb-eficacia.html" onclick="pintarEficacia()">
                                Hyaneb<sup>®</sup>
                                <br> Eficacia
                            </a>
                        </div>
                        <div class="admon">
                            <a href="hyaneb-admon.html" onclick="pintarAdmon()">
                                Hyaneb<sup>®</sup> <br>
                                Administración
                            </a>
                        </div>
                        <div class="covid">
                            <a href="hyaneb-covid-19.html" onclick="pintarCovid()">
                                Hyaneb<sup>®</sup> <br>
                                y COVID-19
                            </a>
                        </div>
                        <div class="uso">
                            <a href="hyaneb-instrucciones.html" onclick="pintarUso()">
                                Hyaneb<sup>®</sup> <br>
                                Instruciones de uso
                            </a>
                        </div>
                </div>
                </div>
            </footer>
    
    `

})

new Vue({
    el: '#app',
    
    data(){

        return{

            title: "Hola"
        }
    }
  })