// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");

function map(f, opt) {
  if (opt !== undefined) {
    return Caml_option.some(Curry._1(f, Caml_option.valFromOption(opt)));
  }
  
}

var Functor = /* module */[/* map */map];

var $$Option = /* module */[/* Functor */Functor];

exports.$$Option = $$Option;
/* No side effect */
