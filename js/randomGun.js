var randomGun = {
  index: 1,  //当前亮区位置
  prevIndex: 8,  //前一位置
  Speed: 300,  //初始速度
  Time: new Function,  //定义对象
  arr_length: 8, //GetSide(5,5),  //初始化数组
  EndIndex: 1,  //决定在哪一格变慢
  cycle: 0,  //转动圈数 
  EndCycle: 3,  //计算圈数
  flag: false,  //结束转动标志
  random_num: 1, //中奖数
  quick: 0,  //加速
  // 按照一定的时间突出 
  toshowCricle: function () {
    let i = 0
    randomGun.timerGame()
    // randomGun.timer
  },
  timerGame: function () {
    $('ul.box li').removeClass('bgcG') //取消选中
    //random_num = parseInt($("#txtnum").val());// 作弊
    randomGun.random_num = Math.floor(Math.random() * 7 + 1); //产出随机中奖数2--8之间
    console.log(randomGun.random_num)
    randomGun.index = 1; //再来一次,从1开始
    randomGun.cycle = 0;
    randomGun.flag = false;
    //EndIndex=Math.floor(Math.random()*12);
    if (randomGun.random_num > 5) {
      randomGun.EndIndex = randomGun.random_num - 5; //前5格开始变慢
    } else {
      randomGun.EndIndex = randomGun.random_num + 8 - 5; //前5格开始变慢
    }
    //EndCycle=Math.floor(Math.random()*3);
    Time = setInterval(randomGun.timer, 300);

  },
  timer: function (index = 1, Speed = 300) {
    console.log('点击抽奖')
    if (randomGun.flag == false) {
      if (randomGun.quick == 5) {
        // 走五个开始加速
        clearInterval(Time)
        Speed = 50
        Time = setInterval(randomGun.timer, Speed)
      }
      // 跑N圈减速
      if (randomGun.cycle == randomGun.EndCycle + 1 && randomGun.index - 1 == randomGun.EndIndex) {
        clearInterval(Time)
        Speed = 300
        randomGun.flag = true // 触发结束
        Time = setInterval(randomGun.timer, Speed)
      }

      // if (i < 8) {
      //   i++
      //   Timer = setInterval(randomGun.timer, speed)
      // } else if (i === 8) {
      //   i = 1
      //   clearTimeout(Timer);
      //   speed += 100
      //   Timer = setInterval(randomGun.timer, speed)
      // }
    }

    if (randomGun.index > randomGun.arr_length) {
      randomGun.index = 1
      randomGun.cycle++
    }

    //结束转动并选中
    if (randomGun.flag == true && randomGun.index == parseInt(randomGun.random_num)) {
      randomGun.quick = 0
      clearInterval(Time)
    }

    if (randomGun.index > 1)
      randomGun.prevIndex = randomGun.index - 1;
    else {
      randomGun.prevIndex = randomGun.arr_length;
    }
    $('ul.box li').removeClass('bgcG') //取消上次选择样式 
    $(`ul.box li.box${randomGun.index}`).addClass('bgcG') //设置当前选中样式
    randomGun.index++;
    randomGun.quick++;

  },
  countDown: function (i, t) {
    let timers = setInterval(function () {
      t += 100
      console.log(t)
      randomGun.timer(i, t)
      if (t >= 1000) {
        console.log('停止倒计时')
        clearTimeout(timers);
      }
    }, 1000)
  },
  init: function () {
    // 1.1点击抽奖按钮
    // 1.2从第一个开始背景色变突出
    // 1.3随机获取一个时间倒计时，最终停止定时器
    $('.box9').on("click", function () {
      console.log(11111111111)
      randomGun.toshowCricle()
    })

  }
}