// ==UserScript==
// @name         VEJA Anti-Paywall
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Remove o Paywall no site da VEJA
// @author       DemoComDC
// @match        https://veja.abril.com.br/*
// @grant        GM_registerMenuCommand
// ==/UserScript==

(function() {
    'use strict';
    function unlockPaywall() {
            document.querySelector('.piano-offer-overlay').style.display = 'none';
            document.getElementById('piano_offer').style.display = 'none';
            //document.querySelector('body').style = '';
            document.body.classList.remove('disabledByPaywall');
    }
    GM_registerMenuCommand("Remove Paywall", unlockPaywall);
    window.addEventListener( "message", function (e) {
        //e.stopPropagation();
        //if (e.data.action == 'showOffer') {
        if (typeof e.data.eventLabel != undefined && e.data.eventLabel == "Bloqueio contabilizado") {
            //setTimeout(function() {
            console.log('Rodando anti-paywall');
            unlockPaywall();
            //}, 1);
        }
        //var eData = JSON.parse(e.data);
        //console.log('RODOU', e.data.action, e);
    }, true);

})();