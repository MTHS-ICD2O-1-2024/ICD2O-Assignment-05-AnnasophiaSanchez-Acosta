// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall updated by Anna S.
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

function factorial(n) {
  let result = 1
  let i = 1
  while (i <= n) {
    result *= i
    i++
  }
  return result
}

function calculateTrig() {
  const angle = parseFloat(document.getElementById("angle").value)
  const iterations = parseInt(document.getElementById("iterations").value)
  const func = document.getElementById("functionChoice").value

  let result = 0
  let n = 0

  while (n < iterations) {
    const sign = n % 2 === 0 ? 1 : -1
    const exponent = func === "sin" ? 2 * n + 1 : 2 * n
    const term = (sign * Math.pow(angle, exponent)) / factorial(exponent)
    result += term
    n++
  }

  document.getElementById(
    "result"
  ).innerHTML = `Estimated ${func}(${angle}) = ${result.toFixed(
    6
  )} using ${iterations} terms.`
}
