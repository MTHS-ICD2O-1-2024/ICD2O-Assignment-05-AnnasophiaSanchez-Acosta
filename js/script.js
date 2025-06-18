// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall updated by Anna S.
// Created on: May 2025
// This file contains the JS functions for index.html

'use strict'

/**
 * This function converts degrees to radians.
 */
function estimateTrig() {
  // Input
  const angleInDegrees = parseFloat(document.getElementById('angleInput').value)
  const numberOfTerms = parseInt(document.getElementById('termsInput').value)
  const selectedFunction = document.querySelector(
    'input[name="func"]:checked'
  ).value

  // Convert degrees to radians
  const angleInRadians = angleInDegrees * (Math.PI / 180)

  let estimatedValue = 0
  let currentTermIndex = 0

  while (currentTermIndex < numberOfTerms) {
    let exponent
    if (selectedFunction === 'sine') {
      exponent = 2 * currentTermIndex + 1
    } else {
      exponent = 2 * currentTermIndex
    }

    let numerator = 1
    let powerCounter = 0
    while (powerCounter < exponent) {
      numerator = numerator * angleInRadians
      powerCounter = powerCounter + 1
    }

    let denominator = 1
    let factCounter = 1
    while (factCounter <= exponent) {
      denominator = denominator * factCounter
      factCounter = factCounter + 1
    }

    let sign = 1
    if (currentTermIndex % 2 !== 0) {
      sign = -1
    }

    estimatedValue = estimatedValue + (sign * numerator) / denominator
    currentTermIndex = currentTermIndex + 1
  }

  // Output
  document.getElementById('result').innerHTML =
    'Estimated ' +
    selectedFunction +
    '(' +
    angleInDegrees +
    '°) = ' +
    estimatedValue +
    ' using ' +
    numberOfTerms +
    ' terms.'
}
