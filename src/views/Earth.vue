<template>
  <div class="container" id="container">
    <div id="lopp"></div>
    <div id="lopp2"></div>
    <div id="lopp3"></div>
    <div id="lopp4">center</div>
    <div v-for="(item, index) in nodeOneData" :key="index" class="ball" :class="setClass('ball', index + 1)" @mouseenter="onHoverFun" @mouseleave="onHoverFun">
      <div :class="setClass('ball-r', index + 1)"></div>
      {{item}}
    </div>
    <div v-for="(item, index) in nodeTwoData" :key="'_' + index" class="ball box" :class="setClass('box', index + 1)" @mouseenter="onHoverFun" @mouseleave="onHoverFun">{{item}}</div>
    <div v-for="(item, index) in nodeThreeData" :key="'__' + index" class="ball three" :class="setClass('three', index + 1)" @mouseenter="onHoverFun" @mouseleave="onHoverFun">{{item}}</div>
    <!-- <div class="ball ball1">1</div>
    <div class="ball ball2">2</div>
    <div class="ball ball3">3</div>
    <div class="ball ball4">4</div>
    <div class="ball ball5">5</div>
    <div class="ball ball6">6</div>
    <div class="ball ball7">7</div> -->
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  mounted() {
    // setTimeout(()=> {
      this.initStyleFunction()
      // this.onHoverFun()
    // }, 1000)
    // document.documentElement.style.setProperty('number', 7)
  },
  data() {
    return {
      nodeOneData: [
        'ball1',
        'ball2',
        'ball3',
        'ball4',
        'ball5',
        'ball6',
        'ball7',
      ],
      nodeTwoData: [
        'box1',
        'box2',
        'box3',
        'box4',
        'box5',
      ],
      nodeThreeData: [
        'three1',
        'three2',
        'three3',
      ],
      number: 7,
      num: {
        number:7
      }
    };
  },
  methods: {
    setClass(name, num) {
      return name + num
    },
    initStyleFunction() {
      // debugger
      let data = this.nodeOneData
      let data2 = this.nodeTwoData
      let data3 = this.nodeThreeData
      let timeRange = 20 / data.length
      let timeRange2 = 20 / data2.length
      let timeRange3 = 20 / data3.length
      data.forEach((item, index) => {
        //7个圆,x和y轴动画加起来是20s , 20s/7 约等于 2.857s
        //每个球y轴动画延迟 从0递减2.857s,x轴与y相差动画时长的一半（10s/2）
        $('.ball' + (index + 1))[0].style.animation = `
          animX-data-v-edbcad00 10s cubic-bezier(0.36, 0, 0.64, 1) ${0 - 5 - timeRange*index}s infinite alternate,
          animY-data-v-edbcad00 10s cubic-bezier(0.36, 0, 0.64, 1) ${0 - timeRange*index}s infinite alternate,
          scale-data-v-edbcad00 20s cubic-bezier(0.36, 0, 0.64, 1) ${0 - timeRange*index}s infinite alternate
        `
      })
      data2.forEach((item, index) => {
        //7个圆,x和y轴动画加起来是20s , 20s/7 约等于 2.857s
        //每个球y轴动画延迟 从0递减2.857s,x轴与y相差动画时长的一半（10s/2）
        $('.box' + (index + 1))[0].style.animation = `
          animX2-data-v-edbcad00 10s cubic-bezier(0.36, 0, 0.64, 1) ${0 - 5 - timeRange2*index}s infinite alternate,
          animY2-data-v-edbcad00 10s cubic-bezier(0.36, 0, 0.64, 1) ${0 - timeRange2*index}s infinite alternate,
          scale-data-v-edbcad00 20s cubic-bezier(0.36, 0, 0.64, 1) ${0 - timeRange2*index}s infinite alternate
        `
      })
      data3.forEach((item, index) => {
        //7个圆,x和y轴动画加起来是20s , 20s/7 约等于 2.857s
        //每个球y轴动画延迟 从0递减2.857s,x轴与y相差动画时长的一半（10s/2）
        $('.three' + (index + 1))[0].style.animation = `
          animX3-data-v-edbcad00 10s cubic-bezier(0.36, 0, 0.64, 1) ${0 - 5 - timeRange3*index}s infinite alternate,
          animY3-data-v-edbcad00 10s cubic-bezier(0.36, 0, 0.64, 1) ${0 - timeRange3*index}s infinite alternate,
          scale-data-v-edbcad00 20s cubic-bezier(0.36, 0, 0.64, 1) ${0 - timeRange3*index}s infinite alternate
        `
      })
    },
    onHoverFun(){
      if (document.getElementById('container').classList.contains('paused')) {
        document.getElementById('container').className = 'container';
      } else {
        document.getElementById('container').className = 'container paused';
      }
    }
  }
};
</script>

<style scoped lang="less">
@keyframes animX {
  0% {
    left: 530px;
  }
  100% {
    left: 27px;
  }
}
@keyframes animY {
  0% {
    top: 39px;
  }
  100% {
    top: 340px;
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
@keyframes animX2 {
  0% {
    left: 453px;
  }
  100% {
    left: 97px;
  }
}
@keyframes animY2 {
  0% {
    top: 87px;
  }
  100% {
    top: 270px;
  }
}
@keyframes animX3 {
  0% {
    left: 377px;
  }
  100% {
    left: 163px;
  }
}
@keyframes animY3 {
  0% {
    top: 121px;
  }
  100% {
    top: 214px;
  }
}
@keyframes ripplesone {
  0% {
    transform-origin: 27px 27px;
    transform: scale(1);
    opacity: 0;
    border: 2px solid #FF3434;
  }

  2% {
    transform-origin: 27px 27px;
    transform: scale(1.1);
    opacity: 1;
    border: 2px solid #FF3434;
  }

  100% {
    transform-origin: 27px 27px;
    transform: scale(1.3);
    opacity: 0;
    border: 2px solid #FF3434;
  }
}
.ball-r1 {
  width: 50px;
  height: 50px;
  background-color: #f66;
  border-radius: 50%;
  position: absolute;
  top: -2px;
  left: -2px;
  animation: ripplesone 1s 2s infinite;
}
.container.paused > div {
  animation-play-state: paused !important;
}
.ball {
  width: 50px;
  height: 50px;
  background-color: #f66;
  border-radius: 50%;
  position: absolute;
  color: #fff;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
}
// .ball:hover {
//   animation-play-state: paused !important;
// }
.box {
  width: 60px;
  height: 60px;
}
.three {
  width: 70px;
  height: 70px;
}
//7个圆,x和y轴动画加起来是20s , 20s/7 约等于 2.857s
//每个球y轴动画延迟 从0递减2.857s,x轴与y相差动画时长的一半（10s/2）
// .ball1 {
//   animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -5s infinite alternate,
//     animY 10s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate,
//     scale 20s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate;
// }

// .ball2 {
//   animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -7.857s infinite alternate,
//     animY 10s cubic-bezier(0.36, 0, 0.64, 1) -2.857s infinite alternate,
//     scale 20s cubic-bezier(0.36, 0, 0.64, 1) -2.857s infinite alternate;
// }

// .ball3 {
//   animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -10.714s infinite alternate,
//     animY 10s cubic-bezier(0.36, 0, 0.64, 1) -5.714s infinite alternate,
//     scale 20s cubic-bezier(0.36, 0, 0.64, 1) -5.714s infinite alternate;
// }

// .ball4 {
//   animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -13.571s infinite alternate,
//     animY 10s cubic-bezier(0.36, 0, 0.64, 1) -8.571s infinite alternate,
//     scale 20s cubic-bezier(0.36, 0, 0.64, 1) -8.571s infinite alternate;
// }

// .ball5 {
//   animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -16.428s infinite alternate,
//     animY 10s cubic-bezier(0.36, 0, 0.64, 1) -11.428s infinite alternate,
//     scale 20s cubic-bezier(0.36, 0, 0.64, 1) -11.428s infinite alternate;
// }

// .ball6 {
//   animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -19.285s infinite alternate,
//     animY 10s cubic-bezier(0.36, 0, 0.64, 1) -14.285s infinite alternate,
//     scale 20s cubic-bezier(0.36, 0, 0.64, 1) -14.285s infinite alternate;
// }

// .ball7 {
//   animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -22.142s infinite alternate,
//     animY 10s cubic-bezier(0.36, 0, 0.64, 1) -17.142s infinite alternate,
//     scale 20s cubic-bezier(0.36, 0, 0.64, 1) -17.142s infinite alternate;
// }

#lopp {
  width: 500px;
  height: 300px;
  border: 2px solid #999;
  border-radius: 50%;
  position: absolute;
  left: 50px;
  top: 65px;
}
#lopp2 {
  width: 356px;
  height: 178px;
  border: 2px solid #999;
  border-radius: 50%;
  position: absolute;
  left: 126px;
  top: 119px;
}
#lopp3 {
  width: 213px;
  height: 92px;
  border: 2px solid #999;
  border-radius: 50%;
  position: absolute;
  left: 199px;
  top: 157px;
}
#lopp4 {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: absolute;
  left: 272px;
  top: 160px;
  background: #f66;
  color: #fff;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
}
//无法获取js变量
// @a : 20s;
// @max:7;
// @step:1;

// .ball(@max);
// .ball(@n, @i: 1) when (@i =< @n) {
//   .ball@{i}{
//     animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -5-@a/@max*@i infinite alternate,
//     animY 10s cubic-bezier(0.36, 0, 0.64, 1) -@a/@max*@i  infinite alternate,
//     scale 20s cubic-bezier(0.36, 0, 0.64, 1) -@a/@max*@i  infinite alternate;
//   }
//   .ball(@n, (@i+@step));
// }
</style>