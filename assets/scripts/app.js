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
                <!-- <img class="sup-footer" src="assets/images/sup-footer.png" alt=""> -->
                <div class="container-fluid">
                    <div class="enlaces">
                        <div class="eficacia">
                            <router-link to="/eficacia">
                                Hyaneb<sup>®</sup>
                                <br> Eficacia
                            </router-link>
                        </div>
                        <div class="admon">
                            <router-link to="/admon">
                                Hyaneb<sup>®</sup> <br>
                                Administración
                            </router-link>
                        </div>
                        <div class="covid">

                            <router-link to="/covid-19">
                                Hyaneb<sup>®</sup> <br>
                                y COVID-19
                            </router-link>
                        </div>
                        <div class="uso">
                            <router-link to="/instrucciones-uso">
                                Hyaneb<sup>®</sup> <br>
                                Instruciones de uso
                            </router-link>
                        </div>
                </div>
                </div>
            </footer>
    `
});

const Portada = {

    template: ` 
    <section class="container-fluid index">

        <div class="logo text-center">
            <img src="assets/images/logo-index-1.png" alt="">
            <h3>
                Movilización de secreciones mucosas en la UCI
            </h3>
        </div>
        <div class="mar-ballena">
            <div class="chiesi">
                <div class="">
                    <p>
                        No olvide que en www.SmallAirways.es encontrará información de interés sobre su especialidad.
                    </p>
                </div>
                <div class="text-right">
                    <img src="assets/images/logo-chiesi-removebg-preview.png" alt="">
                </div>
            </div>
        </div>

    </section>
    `
};

const Eficacia = {

    template : `
    
    <section class="container-fluid hy-eficacia">

            <a href="index.html">
                <div class="header">

                    <h1>
                        Combinación eficaz
                    </h1>
                </div>
            </a>

            <div class="body">
                <div class="row">
                    <div class="col-md-4 text-center caja-hyaneb">
                        <img src="assets/images/caja-hyaneb.png" alt="">
                    </div>
                    <div class="col-md-6">
                        <img src="assets/images/body-eficacia-1.png" alt="">
                    </div>
                </div>
                <div class="images">
                    <img class="central" src="assets/images/body-eficacia-2.png" alt="">
                    <router-link to="/eficacia-1">
                        <img src="assets/images/icono-proximo.png" alt="" class="icono-proximo">
                    </router-link>
                </div>
                <p>
                    1. Martínez-García MÁ, et al. Normativa sobre el tratamiento de las bronquiectasias en el adulto. Arch Bronconeumol. 2017. http://dx.doi.org/10.1016/j.arbres.2017.07.016. 2.Marques Ferreira, AC et al. Hypertonic Saline as a Useful
                    Tool for Sputum Induction and Pathogen Detection in Cystic Fibrosis. Lung 2017;195:431–439.
                </p>
            </div>
    </section>
    <img class="sup-footer" src="assets/images/sup-footer.png" alt="">
    `
}

const Admon = {

    template: `

    <section class="container-fluid hy-admon">

        <a href="index.html">
            <div class="header">
                <h1>
                    Forma de administración
                </h1>
            </div>
        </a>

        <div class="body">

            <h3>
                <span>
                    Nebulización mediante
                </span> <br>
                nebulizador tipo JET1
            </h3>

            <div class="images">
                <img src="assets/images/body-forma-admon.png" alt=""> 
                <router-link to="/admon-1">
                    <img class="icono-proximo" src="assets/images/icono-proximo.png" alt="">
                </router-link>
            </div>
            <!-- <div class="caja-hyaneb">
                <img src="assets/images/caja-hyaneb.png" alt="">
            </div> -->
            <p>
                1.Instrucciones de uso Hyaneb®
            </p>
        </div>
    </section>
    
    `
};

const Covid ={

    template : `

    <section class="container-fluid hy-covid">

        <a href="index.html">
            <div class="header">
                <h1>
                    Broncoscopia en pacientes con COVID-19 <br>
                    <strong>Recomendaciones de consenso SEPAR y AEER</strong>
                </h1>
                <!-- <img src="assets/images/header.png" alt=""> -->
            </div>
        </a>

        <div class="body">

            <img src="assets/images/body-covid-19.png" alt="">

            <a href="https://doi.org/10.1016/j.arbres.2020.03.017" class="enlace" target="_blank">
                <img src="assets/images/icono-hoja.png" alt="">
                1. Cordovilla R, et al. Recomendaciones de consenso SEPAR y AEER sobre el uso de la broncoscopia y la toma de muestras de la vía respiratoria en pacientes con sospecha o con infección confirmada por COVID-19. Arch Bronconeumol.
                2020. https://doi.org/10.1016/j.arbres.2020.03.017
            </a>

        </div>
    </section>
    
    `
}

Instrucciones = {

    template: `
    <section class="container-fluid hy-uso">

            <a href="index.html">
                <div class="header">
                    <h1>
                        Instrucciones de uso Hyaneb®
                    </h1>
                    <!-- <img src="assets/images/header.png" alt=""> -->
                </div>
            </a>

            <div class="body">

                <h3>
                    Solución para inhalación para movilizar las secreciones mucosas
                </h3>

                <p>
                    <span>
                        Uso previsto
                    </span> <br>
                    La nebulización de Hyaneb® facilita la movilización de las secreciones viscosas de las vías aéreas gracias a un mecanismo osmótico. El alto porcentaje de sal
                    atrae agua y facilita la hidratación del moco. Hyaneb®está particularmente indicado en pacientes con fibrosis quística y en pacientes con bronquiectasias. <br>
                </p>

                <p>
                    <span>
                        Composición
                    </span> <br>
                    Hyaneb® solución hipertónica para inhalación contiene 70 mg/ml de cloruro de sodio, 1 mg/ml de hialuronato de sodio y agua destilada.
                </p>
                <p>
                    <span>
                        Contraindicaciones
                    </span> <br>
                    Hyaneb® está contraindicado en pacientes con hipersensibilidad conocida a sus componentes.
                    Instrucciones de uso
                    Puede utilizarse con cualquier nebulizador jet. Para un resultado óptimo se recomienda usar un nebulizador jet de PARI. También puede utilizarse con
                    nebulizadores de membrana vibratoria. En caso de utilizar un sistema nebulizador eFlow®rapid se recomienda, para mejorar la nebulización, humedecer la
                    membrana sumergiéndola en agua destilada antes de cada uso. No es necesario humedecer la membrana si se acaba de utilizar el nebulizador. La boquilla del
                    nebulizador se coloca en la boca y el paciente debe respirar normalmente durante la sesión de aerosolterapia, que dura en torno a 10 minutos. Temperatura
                    de utilización: nebulizar la solución a temperatura ambiente.
                </p>
                
                <p>
                    <span>
                        Precauciones de empleo
                    </span>
                </p>

                    <ul>
                        <li>
                            El producto es solo para uso inhalatorio.
                        </li>
                        <li>
                            La primera vez que se use el producto debe realizarse bajo control médico o de personal cualificado. El uso por 
                            parte de niños debe hacerse bajo la supervisión de un adulto.
                        </li>
                        <li>
                            En pacientes particularmente sensibles es aconsejable la administración previa de un broncodilatador para prevenir 
                            broncoespasmo, especialmente al inicio del tratamiento. La medicación previa con un broncodilatador debe hacerse bajo control médico.
                        </li>
                        <li>
                            En caso de broncoespasmo o tos persistente interrumpir el tratamiento y comunicárselo al médico que le trata.
                        </li>
                        <li>
                            No utilizar el producto en caso de que el vial estuviera dañado o no perfectamente cerrado en el momento de la primera apertura.
                        </li>
                        <li>
                            No usar el producto después de la fecha de caducidad indicada en el envase. No reutilizar el contenido restante del vial.
                        </li>
                    </ul> 

                    <p>
                        No mezclar la solución hipertónica con otros medicamentos.
                    </p>

                    <p>
                        <span>
                            Posología
                        </span> <br>
                        Utilizar un vial de 5 ml dos veces al día o según prescripción médica. Es posible empezar con un volumen inferior e ir aumentándolo progresivamente.
                    </p>
                    <p>
                        <span>
                            Condiciones de conservación.
                        </span> <br>
                        Conservar a temperatura ambiente y mantener alejado del alcance de los niños.
                    </p>

            </div>
    </section>
    `
}

const Eficacia1 = {

    template: `
    <section class="container-fluid hy-eficacia hy-eficacia-1">

        <a href="index.html">
            <div class="header">
                <!-- <img src="assets/images/header.png" alt=""> -->
                <h1>
                    En pacientes con secreciones mucosas espesas
                </h1>
            </div>
        </a>

        <div class="body">
            <div class="images">
                
                <router-link to="/eficacia">
                    <img src="assets/images/icono-anterior.png" alt="" class="icono-anterior">
                </router-link>

                <img src="assets/images/mucosas-espesas.png" alt="">

                <a href="hyaneb-eficacia.html" style="display: none">
                    <img src="assets/images/icono-proximo.png" alt="" class="icono-proximo">
                </a>

            </div>

            <!-- <div class="caja-hyaneb">
                <img src="assets/images/caja-hyaneb.png" alt="">
            </div> -->
            <p>
                *En pacientes con bronquiectasias y en pacientes con fibrosis quística.
                <br>
                <br>
                1.Instrucciones de uso Hyaneb® 2. Kellett F, Robert N.M. Nebulised 7% hypertonic saline improves lung function and quality of life in bronchiectasis. Respir Med. 2011 Dec;105(12):1831-5. 3. Furnari ML, Termini L, Traverso G, et al.
                Nebulized hypertonic saline containing hyaluronic acid improves tolerability in patients with cystic fibrosis and lung disease compared with nebulized hypertonic saline alone: a prospective, randomized, double-blind, controlled study. Ther
                Adv Respir Dis. 2012;6(6):315‐322. 4. Máiz, Girón, Prats, Clemente, Polverino, Cañoet al. Addition of hyaluronic acid improves tolerance to 7% hypertonic saline solution in bronchiectasis patients. Ther Adv Respir Dis. 2018; 12: 1-10.
                2018; 12: 1-10.
            </p>
        </div>
    </section>
    `
}

const Admon1 = {

    template: `
    
    <section class="container-fluid hy-admon-1">

        <a href="index.html">
            <div class="header">
                <h1>
                    Ventilación espontánea
                </h1>
            </div>
        </a>

        <div class="body">

            <div class="images">
                <router-link to="/admon">
                    <img src="assets/images/icono-anterior.png" alt="" class="icono-anterior">
                </router-link>
                <img src="assets/images/body-forma-admon-1.png" alt="">
                <router-link to="/admon-2">
                    <img src="assets/images/icono-proximo.png" alt="" class="icono-proximo">
                </router-link>
            </div>
        </div>
    </section>
    
    `
}
const Admon2 = {

    template: `
    
    <section class="container-fluid hy-admon-2">

    <a href="index.html">
            <div class="header">
                <h1>
                    Ventilación mecánica: <strong>vía aérea artificial</strong>
                </h1>
                <!-- <img src="assets/images/header.png" alt=""> -->
            </div>
        </a>

        <div class="body">
            <div class="images">
                <router-link to="/admon-1">
                    <img src="assets/images/icono-anterior.png" alt="" class="icono-anterior">
                </router-link>
                 <img src="assets/images/body-forma-admon-2.png" alt="">
                <router-link to="/admon-3">
                    <img src="assets/images/icono-proximo.png" alt="" class="icono-proximo">
                </router-link>
            </div>
        </div>
    </section>
    `
}
const Admon3 = {

    template: `
    
    <section class="container-fluid hy-admon hy-admon-3">

        <a href="index.html">
            <div class="header">
                <h1>
                    Ventilación mecánica: <br>
                    <strong>
                        insuflación-exuflación mecánica (IEM)
                    </strong>
                </h1>
                <!-- <img src="assets/images/header.png" alt=""> -->
            </div>
        </a>

        <div class="body">
            <div class="images">
                <router-link to="/admon-2">
                    <img src="assets/images/icono-anterior.png" alt="" class="icono-anterior">
                </router-link>
                <img src="assets/images/body-forma-admon-3.png" alt="">
            </div>

            <p class="ha3">
                1. JD Martí Romeu, M Vendrell Relat. Manual SEPAR de Procedimientos 27. Técnicas manuales e instrumentales para el drenaje de secreciones bronquiales en el paciente adulto. SEPAR. Marzo 2014.
            </p>

        </div>
        </section>
    `
}

const routes = [

    { path: '/', component: Portada },
    { path: '/eficacia', component: Eficacia },
    { path: '/eficacia-1', component: Eficacia1 },
    { path: '/admon', component: Admon },
    { path: '/covid-19', component: Covid },
    { path: '/instrucciones-uso', component: Instrucciones },
    { path: '/admon-1', component: Admon1 },
    { path: '/admon-2', component: Admon2 },
    { path: '/admon-3', component: Admon3 },
]

const router = new VueRouter({
    routes // short for `routes: routes`
  })



const app = new Vue({
    router
  }).$mount('#app')

/* new Vue({
    el: '#app',
    
    data(){

        return{

            title: "Hola"
        }
    }
  }) */