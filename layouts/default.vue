<template lang="pug">
  main
    aside.nav-bar
      div
        input(v-model="search_text" placeholder="Type to search").search-box
        div
    div.content
      nuxt.content-wrap
</template>

<script>
export default {
  data () {
    return {
      search_text: ""
    }
  }
}
</script>

<style lang="scss">
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

input, button, textarea, select {
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  border-radius: 0;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
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
  width: 200px;
  height: 100%;
  border-right: 1px solid #cccccc;
}

.content {
  width: 100%;
  position: absolute;
  left: 200px;
}

.content-wrap {
  max-width: 800px;
  margin: 0 auto;
  padding: 80px 60px 60px;
}

.search-box {
  width: 100%;
  height: 40px;
  padding: 0 10px 0;
  border-bottom: 1px solid #cccccc;
  color: #666666;
  font-size: 14px;
  transition: all .6s ease;
  /* background: rgba(200,200,200,0.1); */
  &:focus {
    outline: none;
    box-shadow: 0 1px 3px 0 gray;
  }
}

.search-box::placeholder {
  transition: all .6s ease;
  font-size: 12px;
}

.search-box:focus::placeholder {
  transform: translateY(-100%);
  opacity: 0;
}


</style>
