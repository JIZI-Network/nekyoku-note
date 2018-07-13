<template lang="pug">
  main(v-bind:class="{'is-top':$route.name=='index','menu-opened':menuOpened}")
    div.top-bar
      nuxt-link(to="/")
        img.mini-logo(src="~/assets/logo.svg")
    aside.nav-bar
      input(v-model="search_text" placeholder="Type to search").search-box
      div.navigation
        nuxt-link(to="/about/")
          | このサイトについて
        br
        nuxt-link(to="/html/")
          | HTML
        br
        div(v-if="$route.name.indexOf('html',0)==0")
          nuxt-link(to="/html/basic")
            | 基礎
        nuxt-link(to="/test/")
          | Markdown表記
      div.footer
        | &copy;2018 工大祭実行委員会ネットワーク局
    div.menu-button(@click="menuOpened=!menuOpened")
    div.content(@click="menuOpened=false")
      nuxt.content-wrap
</template>

<script>
export default {
  data () {
    return {
      search_text: "",
      menuOpened: false
    }
  }
}
</script>

<style lang="scss">
@import url("https://cdn.jsdelivr.net/npm/yakuhanjp@3.0.0/dist/css/yakuhanrp.min.css");
@import url("https://fonts.googleapis.com/earlyaccess/roundedmplus1c.css");
@import url("https://fonts.googleapis.com/css?family=Ubuntu+Mono");
@import url("highlight.js/styles/solarized-light.css");

html {
  font-family: YakuHanRP, "Rounded Mplus 1c","Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
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
  transition: all .3s ease;
}

a:visited {
  color: #43a17f;
}

.nuxt-link-exact-active {
  padding-left: 10px;
}

main {
  width: 100vw;
  height: 100%;
}

.nav-bar {
  position: fixed;
  z-index: 100;
  width: 250px;
  height: 100vh;
  border-right: 1px solid #cccccc;
  transition: all .5s ease;
  background: white;
}

.menu-opened .nav-bar {
  transform: translateX(0);
}

// .overlay {
//   display: none;
//   position: fixed;
//   width: 100vw;
//   height: 100vh;
// }

// .menu-opened .overlay {
//   display: block;
// }

.content {
  width: 100%;
  min-height: 100vh;
  padding-left: 250px;
  transition: all .6s ease;
  overflow-x: hidden;
}

.content-wrap {
  max-width: 800px;
  margin: 0 auto;
  padding: 100px 60px 60px;
  transition: all .5s ease;
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

.navigation {
  margin: 50px 15px 50px;
}

.top-bar {
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  padding-left: 250px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #cccccc;
  transition: all .6s ease;
  background: white;
}

.is-top .top-bar {
  border-bottom: 1px solid rgba(0,0,0,0);
}

.is-top .mini-logo {
  transform: translateY(-10px);
  opacity: 0;
}

.top-bar a {
  display: flex;
  align-items: center;
  padding: 0;
}

.mini-logo {
  width: 30px;
  transition: all .8s ease;
}

.footer {
  width: 100%;
  height: 40px;
  position: absolute;
  bottom: 0;
  border-top: solid 1px #cccccc;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #888888;
  font-size: 12px;
}

.menu-button {
  position: fixed;
  z-index: 50;
  top: 5px;
  left: 0;
  width: 40px;
  height: 30px;
  background: #666666;
  cursor: pointer;
}

.menu-button::after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  right: -15px;
  width: 10px;
  height: 100%;
  background: #666666;
}

.page-enter-active, .page-leave-active {
  transition: opacity .3s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}

@media screen and (max-width:767px){
  .nav-bar {
    transform: translateX(-100%);
  }
  .content {
    padding-left: 0;
  }
  .top-bar {
    padding-left: 0;
  }
}

@media screen and (max-width:480px){
  .content-wrap {
    padding: 100px 30px 60px;
  }
}

.content h1 {
  margin-top: 50px;
}

.content h1::after {
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  background: #cccccc;
}

.content h2, h3, h4, h5, h6 {
  margin-top: 20px;
}

.content code {
  display: block;
  overflow-x: scroll;
  width: 100%;
  padding: 4px 5px;
  border: solid 1px #bbbbbb;
  border-radius: 3px;
  margin: 10px 0;
}

.content code.language-ruby::before {
  content: 'ruby';
  display: block;
  position: absolute;
  top: -1em;
  left: 5px;
}

.content p {
  margin: 10px 0;
}

</style>
