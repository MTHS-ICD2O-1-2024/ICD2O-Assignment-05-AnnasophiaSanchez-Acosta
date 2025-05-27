// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall updated by Anna S.
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

function factorial(number) {
  let result = 1
  let counter = 1
  while (counter <= number) {
    result *= counter
    counter++
  }
  return result
}

function calculateTrig() {
  const angle = parseFloat(document.getElementById("angle").value)
  const iterations = parseInt(document.getElementById("iterations").value)
  const func = document.getElementById("functionChoice").value

  let result = 0
  let termCount = 0
  let sign = 1  // start positive

  while (termCount < iterations) {
    let exponent
    if (func === "sin") {
      exponent = 2 * termCount + 1
    } else {
      exponent = 2 * termCount
    }

    const term = sign * Math.pow(angle, exponent) / factorial(exponent)
    result += term

    // Flip the sign for next term:
    if (sign === 1) {
      sign = -1
    } else {
      sign = 1
    }

    termCount++
  }

  document.getElementById("result").innerHTML =
    "Estimated " + func + "(" + angle + ") = " + result.toFixed(6) +
    " using " + iterations + " terms."
}
