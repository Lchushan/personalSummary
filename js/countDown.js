var countDown = {
  // 封装倒计时函数
  toCountDown: function (s = 60, showBack = () => { }, callBack = () => { }, maxS = s) {
    var t
    function times() {
      s--;
      t = setTimeout(times, 1000);
      showBack(s)
      if (s <= 0) {
        s = maxS;
        callBack()
        clearTimeout(t);
      }
    }
    times()
  },
  // 60s倒计时
  time60S: function () {

    var s = 60, t;
    function times() {
      s--;
      $('.times60S').text(s)
      t = setTimeout(times, 1000);
      if (s <= 0) {
        s = 60;
        clearTimeout(t);
      }
    }
    times()
  },
  init: function () {
    this.time60S()

    // 点击按钮倒计时
    $(".click60S").on("click", 'button', function () {
      var s = 60, t;
      function times() {
        s--;
        $('.click60S').text(s)
        t = setTimeout(times, 1000);
        if (s <= 0) {
          s = 60;
          clearTimeout(t);
          $('.click60S').html(`<button class="">60</button>`)
        }
      }
      times()
    })

    // 点击按钮倒计时
    $(".clickChang60S").on("click", function () {
      console.log(444444444)
      $(this).attr('disabled', true)
      var s = 60, t;
      function times() {
        s--;
        $('.clickChang60S').text(s)
        t = setTimeout(times, 1000);
        if (s <= 0) {
          s = 60;
          $('.clickChang60S').text(s)
          $('.clickChang60S').attr('disabled', false)
          clearTimeout(t);
        }
      }
      times()
    })

    // 输入的只能为整数
    $(`.timeTwo input[type='text']`).on("blur", function () {
      console.log($(this).val())
      let reg = /^[0-9]*$/
      if (!reg.test($(this).val().trim())) {
        $(this).val('')
        alert('请输入整数')
      }
    })

    // 秒数倒计时
    $('.timeTwo .clickS').on("click", function () {
      let s = $(".timeTwo input[type='text']").val()

      countDown.toCountDown(s, (s) => { $('.timeTwo .clickSText').text(s) })
    })

    // 分秒倒计时
    $('.timeTwo .clickSM').on("click", function () {
      let mm = $(".timeTwo input[type='text'].MM").val() || 0
      let ss = $(".timeTwo input[type='text'].SS").val() || 0
      let time = +mm * 60 + +ss
      // console.log(time)
      if (time > 0) {
        let callBack = () => {
          $('.timeTwo .clickSM').attr('disabled', false)
        }
        let showBack = (s) => {
          let mm = Math.floor(s / 60)
          let ss = Math.floor(s % 60);
          $('.timeTwo .clickMSText').html("距离结束还有" + mm + "分" + ss + "秒")
          $('.timeTwo .clickSM').attr('disabled', true)
        }
        countDown.toCountDown(time, showBack, callBack)
      }
    })

    //时分秒倒计时
    $('.timeTwo .clickHSM').on("click", function () {
      let hh = $(".timeTwo input[type='text'].HH").val() || 0
      let mm = $(".timeTwo input[type='text'].HMM").val() || 0
      let ss = $(".timeTwo input[type='text'].HSS").val() || 0
      let time = +hh * 60 * 60 + mm * 60 + +ss
      // console.log(time)
      if (time > 0) {
        let callBack = () => {
          $('.timeTwo .clickHSM').attr('disabled', false)
        }
        let showBack = (s) => {
          let hm = Math.floor(s / 60)
          let hh = Math.floor(hm / 60)
          let mm = Math.floor(hm % 60)
          let ss = Math.floor(s % 60);
          $('.timeTwo .clickHMSText').html("距离结束还有" + hh + "时"+ mm + "分" + ss + "秒")
          $('.timeTwo .clickHSM').attr('disabled', true)
        }
        countDown.toCountDown(time, showBack, callBack)
      }
    })
  }
}