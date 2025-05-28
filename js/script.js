// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall updated by Anna S.
// Created on: May 2025
// This file contains the JS functions for index.html

'use strict'

// This function converts degrees to radians.
function convertDegreesToRadians (degreeValue) {
  return degreeValue * (Math.PI / 180)
}

// This function calculates the factorial of a number.
function calculateFactorial (value) {
  let factorialResult = 1
  let counter = 1
  while (counter <= value) {
    factorialResult = factorialResult * counter
    counter = counter + 1
  }
  return factorialResult
}

// This function estimates sine or cosine
function estimateTrig () {
  // Input
  const angleInDegrees = parseFloat(document.getElementById('angleInput').value)
  const numberOfTerms = parseInt(document.getElementById('termsInput').value)
  const selectedFunction = document.querySelector(
    'input[name="func"]:checked'
  ).value

  // Convert the angle from degrees to radians.
  const angleInRadians = convertDegreesToRadians(angleInDegrees)

  let estimatedValue = 0

  let currentTermIndex = 0

  // Repeat for the number of terms the user entered.
  while (currentTermIndex < numberOfTerms) {
    // Process each term based on the function selected (sine or cosine).
    let termValue = 0

    if (selectedFunction === 'sine') {
      const exponent = 2 * currentTermIndex + 1
      const numerator = Math.pow(angleInRadians, exponent)
      const denominator = calculateFactorial(exponent)
      const sign = Math.pow(-1, currentTermIndex)
      termValue = sign * (numerator / denominator)
    } else if (selectedFunction === "cosine") {
      const exponent = 2 * currentTermIndex
      const numerator = Math.pow(angleInRadians, exponent)
      const denominator = calculateFactorial(exponent)
      const sign = Math.pow(-1, currentTermIndex)
      termValue = sign * (numerator / denominator)
    }

    // Add the current term to the total estimated value.
    estimatedValue = estimatedValue + termValue

    // Increase the counter to move to the next term in the series.
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
