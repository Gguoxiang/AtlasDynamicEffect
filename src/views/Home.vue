<template>
  <div class="container">
    <div class="full">
      <div class="item">
        <div class="main">
          <img src="http://www.hw-ai.com/style/images/icons/contact_ico1.png" />
        </div>
      </div>
      <div class="item">
        <div class="main">
          <img src="http://www.hw-ai.com/style/images/icons/contact_ico3.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "treemap",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="less">
.full .item {
  width: 120px;
  height: 120px;
  margin: 150px;
  position: relative;
}

.full img {
  width: 100%;
  height: 100%;
  border: 1px solid #333;
  border-radius: 50%;
}

.main::after {
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 50%;
  top: 0;
  left: 0;
  padding: 0;
  z-index: -1;
  opacity: 0;
}

/* hover兼容性 */
@-webkit-keyframes sonarEffect {
  0% {
    opacity: 0.3;
  }

  40% {
    opacity: 0.5;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1),
      0 0 10px 10px rgba(215, 0, 15, 0.6), 0 0 0 10px rgba(255, 255, 255, 0.5);
  }

  100% {
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1),
      0 0 10px 10px rgba(215, 0, 15, 0.6), 0 0 0 10px rgba(255, 255, 255, 0.5);
    -webkit-transform: scale(1.5);
    opacity: 0;
  }
}

@-moz-keyframes sonarEffect {
  0% {
    opacity: 0.3;
  }

  40% {
    opacity: 0.5;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1),
      0 0 10px 10px rgba(215, 0, 15, 0.6), 0 0 0 10px rgba(255, 255, 255, 0.5);
  }

  100% {
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1), 0 0 10px 10px #d7000f80,
      0 0 0 10px rgba(255, 255, 255, 0.5);
    -moz-transform: scale(1.5);
    opacity: 0;
  }
}

@keyframes sonarEffect {
  0% {
    opacity: 0.3;
  }

  40% {
    opacity: 0.5;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1),
      0 0 10px 10px rgba(215, 0, 15, 0.6), 0 0 0 10px rgba(255, 255, 255, 0.5);
  }

  100% {
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1),
      0 0 10px 10px rgba(215, 0, 15, 0.6), 0 0 0 10px rgba(255, 255, 255, 0.5);
    transform: scale(1.5);
    opacity: 0;
  }
}

/* 有缩小效果 */
/* .item:hover .main {
            -webkit-transform: scale(0.9);
            -moz-transform: scale(0.9);
            -ms-transform: scale(0.9);
            transform: scale(0.9);
        } */
.item:hover .main::after {
  box-sizing: border-box;
  -webkit-animation: sonarEffect 1.3s ease-out 75ms;
  -moz-animation: sonarEffect 1.3s ease-out 75ms;
  animation: sonarEffect 1.3s ease-out 75ms;
}
</style>
