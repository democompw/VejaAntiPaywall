// ==UserScript==
// @name         VEJA Anti-Paywall
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  ...
// @author       DemoComDC
// @match        https://veja.abril.com.br/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener( "message", function (e) {
        //e.stopPropagation();
        if (e.data.action == 'showOffer') {
            //setTimeout(function() {
            console.log('Rodando anti-paywall');
            document.getElementById('piano_offer').style.display = 'none';
            document.querySelector('.piano-offer-overlay').style.display = 'none';
            document.querySelector('body').style = '';
            //}, 1);
        }
        //var eData = JSON.parse(e.data);
        //console.log('RODOU', e.data.action, e);
    }, true);

})();