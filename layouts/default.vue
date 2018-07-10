<template lang="pug">
  main
    aside.nav-bar
      div.app-name
        | Nekyoku Note
    nuxt.content-wrap
</template>

<script>
export default {
  
}
</script>


<style>
@import url("https://fonts.googleapis.com/earlyaccess/roundedmplus1c.css");
@import url("https://fonts.googleapis.com/css?family=Ubuntu+Mono");
@import url("highlight.js/styles/solarized-light.css");

html {
  font-family: "Rounded Mplus 1c","Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

tt, code, kbd, sample {
  word-spacing: 0;
  font-family: 'Ubuntu Mono', monospace;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  color: #666666;
}

a {
  color: #2be6ad;
  text-decoration: none;
}

a:visited {
  color: #43a17f;
}

main {
  position: relative;
  width: 100vw;
  height: 100%;
  z-index: 0;
}

.nav-bar {
  position: fixed;
  width: 300px;
  height: 100%;
  border-right: 1px solid #cccccc;
}

.content-wrap {
  position: absolute;
  left: 300px;
}

.app-name {
  font-size: 30px;
  font-weight: bold;
  margin-top: 10px;
  padding: 0;
  text-align: center;
}

</style>
