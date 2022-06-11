import './styles/reset.css'
// import $ from 'jquery'
// import 'bootstrap'
import './styles/grid.css'
import './styles/main.scss'

import SmartHeader from 'smart-header-js'

window.addEventListener("DOMContentLoaded", (e) => {

    new SmartHeader({
        breakpoint: 1200, //Default 1200
        mobClass: "--mob", //Default --mob
        burgerClass: "--burger-link", //Default --burger-link
        closeClass: "--close-mob", //Default --close-mob
        preset: "full_window_filling"
    });

})