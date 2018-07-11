<template lang="pug">
  section.container
    div
      div.top-banner
        img.logo(src="~/assets/logo.svg" alt="logo-image")
        h1
          | Nekyoku Note
      div(v-html="$md.render(intro)")
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      intro: '**工大祭実行委員会ネットワーク局**内の講習会資料をまとめています。\
      '
    }
  }
}
</script>

<style>
.top-banner {
  text-align: center;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: solid 1px #cccccc;
}

.logo {
  width: 150px;
  animation: fadein .8s ease-out;
}

@keyframes fadein {
  0% {
    transform: translateY(10px);
    opacity: 0;
  }
  100% {

  }
}

.top-banner h1 {
  margin-top: 15px;
  font-size: 30px;
}

</style>
