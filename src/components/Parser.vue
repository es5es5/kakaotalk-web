<template>
  <div></div>
</template>

<script>
// import readline from 'linebyline'

export default {
  name: 'Parser',
  created () {
    const readline = require('linebyline')
    console.log(readline)
    const rl = readline('./somefile.txt', { retainBuffer: true })
    rl.on('line', (line, lineCount, byteCount) => {
      // do something with the line of text
      console.log(line, lineCount, byteCount)
    }).on('error', e => {
      console.log(e)
    })
  }
}
</script>

<style>

</style>
