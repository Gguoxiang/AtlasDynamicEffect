<template>
  <div class="container">
    <div id="lopp"></div>
    <div class="ball ball1">1</div>
    <div class="ball ball2">2</div>
    <div class="ball ball3">3</div>
    <div class="ball ball4">4</div>
    <div class="ball ball5">5</div>
    <div class="ball ball6">6</div>
    <div class="ball ball7">7</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="less">
@keyframes animX {
  0% {
    left: 500px;
  }
  100% {
    left: 0px;
  }
}
@keyframes animY {
  0% {
    top: 0px;
  }
  100% {
    top: 300px;
  }
}
@keyframes scale {
  0% {
    transform: scale(0.7);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.7);
  }
}

.ball {
  width: 100px;
  height: 100px;
  background-color: #f66;
  border-radius: 50%;
  position: absolute;
  color: #fff;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
}
//7个圆,x和y轴动画加起来是20s , 20s/7 约等于 2.857s
//每个球y轴动画延迟 从0递减2.857s,x轴与y相差动画时长的一半（10s/2）
.ball1 {
  animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -5s infinite alternate,
    animY 10s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate,
    scale 20s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate;
}

.ball2 {
  animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -7.857s infinite alternate,
    animY 10s cubic-bezier(0.36, 0, 0.64, 1) -2.857s infinite alternate,
    scale 20s cubic-bezier(0.36, 0, 0.64, 1) -2.857s infinite alternate;
}

.ball3 {
  animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -10.714s infinite alternate,
    animY 10s cubic-bezier(0.36, 0, 0.64, 1) -5.714s infinite alternate,
    scale 20s cubic-bezier(0.36, 0, 0.64, 1) -5.714s infinite alternate;
}

.ball4 {
  animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -13.571s infinite alternate,
    animY 10s cubic-bezier(0.36, 0, 0.64, 1) -8.571s infinite alternate,
    scale 20s cubic-bezier(0.36, 0, 0.64, 1) -8.571s infinite alternate;
}

.ball5 {
  animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -16.428s infinite alternate,
    animY 10s cubic-bezier(0.36, 0, 0.64, 1) -11.428s infinite alternate,
    scale 20s cubic-bezier(0.36, 0, 0.64, 1) -11.428s infinite alternate;
}

.ball6 {
  animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -19.285s infinite alternate,
    animY 10s cubic-bezier(0.36, 0, 0.64, 1) -14.285s infinite alternate,
    scale 20s cubic-bezier(0.36, 0, 0.64, 1) -14.285s infinite alternate;
}

.ball7 {
  animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -22.142s infinite alternate,
    animY 10s cubic-bezier(0.36, 0, 0.64, 1) -17.142s infinite alternate,
    scale 20s cubic-bezier(0.36, 0, 0.64, 1) -17.142s infinite alternate;
}

#lopp {
  width: 500px;
  height: 300px;
  border: 2px solid #999;
  border-radius: 50%;
  position: absolute;
  left: 50px;
  top: 65px;
}
</style>
