var index = {
  init: function () {
    // console.log(11111)
    $('.toChoose').on("click", 'li', function () {
      console.log(this)
      console.log($(this).hasClass('example'))
      console.log($(this).hasClass('componentGallery'))
      if ($(this).hasClass('example')) {
        $('.leftMain').html(`<ul>
        <li><a href="#/shipei">PC适配单位rem设置</a></li>
        <li><a href="#/router">路由设置</a></li>
        <li><a href="#/randomGun">随机转盘</a></li>
        <li><a href="#/page">分页</a></li>
        <li><a href="#/cars">购物车</a></li>
        <li><a href="#/countDown">倒计时</a></li>
        <li><a href="#/calendar">日历</a></li>
        <li><a href="#/slideshow">轮播图</a></li>
      </ul>`)
        $('.rightMain').html(' ')
      } else if ($(this).hasClass('componentGallery')) {
        $('.leftMain').html(`<ul>
        <li><a href="#/Layout">Layout 布局</a></li>
      </ul>`)
        $('.rightMain').html(' ')
      }

      console.log($('.leftMain').html())


    })
  }
}