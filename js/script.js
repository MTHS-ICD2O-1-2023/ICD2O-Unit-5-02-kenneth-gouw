// Copyright (c) 2024 Kenneth All rights reserved
//
// Created by: Kenneth
// Created on: Mar 2024
// This file contains the JS functions for index.html
"use strict"

function alwaysChecked() {
  const optionPositive = (document.getElementById("option-positive").checked)

  if (optionPositive == true) {
    const pRand = Math.floor(Math.random() * 9) + 1
    document.getElementById("answer").innerHTML = "Your number is: " + pRand
  } else {
    const nRand = Math.floor((Math.random() * 9) + 1) * -1
    document.getElementById("answer").innerHTML = "Your number is: " + nRand
  }
  // Output the answer to the user in the class "answer"
}