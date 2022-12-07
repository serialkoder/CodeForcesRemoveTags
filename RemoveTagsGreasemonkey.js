// GreaseMonkey script to remove tags from the page
//
// ==UserScript==
// @name         Remove Tags
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove Tags from the page
// @author       Serial
// @match        https://codeforces.com/*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';
    while(document.getElementsByClassName("tag-box").length>0){
        document.getElementsByClassName("tag-box")[0].remove();
    }
} )();
