// TamperMonkey script to remove codeforces tags from the page

// ==UserScript==
// @name         Remove Codeforces Tags
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove Codeforces Tags from the page
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
