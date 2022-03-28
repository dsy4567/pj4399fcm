// ==UserScript==
// @name         破解4399防沉迷和屏蔽广告
// @namespace    https://dsy4567.github.io/
// @version      1.0
// @description  将4399的防沉迷和广告拒之门外,欢迎访问我的主页:https://dsy4567.github.io
// @author       dsy
// @match        http://www.4399.com/flash/*
// @icon         https://dsy4567.github.io/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.onload=function(){
    if (document.getElementById("addiv")!=null){
    document.getElementById("addiv").remove();}
    if (document.getElementById("Anti_open")!=null){
    document.getElementById("Anti_open").remove();}
    if (document.getElementById("Anti_mask")!=null){
    document.getElementById("Anti_mask").remove();}
    if (document.getElementById("pusher")!=null){
    document.getElementById("pusher").remove();}}
})();
