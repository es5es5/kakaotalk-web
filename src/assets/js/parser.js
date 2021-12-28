/* eslint-disable */

// import readline from 'readline'
const readline = require('linebyline')
// import fs from 'fs'
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

export function hour12to24 (meridiem, hour) {
  let hour24 = hour
  if (meridiem === '오전' && hour === 12) {
    hour24 = hour24 = 12
  } else if (meridiem === '오후' && (hour >= 1 || hour <= 12)) {
    hour24 = hour24 + 12
  }
  return hour24
}

export function parsePCKakaotalk (fileText) {
  // msgRe = new RegExp('\[(.+?)\] \[(오전|오후) (\d{,2}):(\d{,2})\] (.*)$')
  // dateRe = new RegExp(' (\d{4})년 (\d{,2})월 (\d{,2})일 ')

  console.log(readline())

  rl.on(fileText, line => {
    console.log(line)
  })

  // console.log(line)
}
