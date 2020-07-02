var cars = {
  choose: function () {
    $('ul.toChoose').on("click", 'span.iconfont', function (e) {
      console.log(e.target)
      $(e.target).toggleClass('icon-weixuanzhong')
      $(e.target).toggleClass('icon-xuanzhong')
    })

    $('ul.allChoose').on("click", 'span.iconfont', function (e) {
      // console.log(e.target)
      $(e.target).toggleClass('icon-weixuanzhong')
      $(e.target).toggleClass('icon-xuanzhong')

      // console.log($(e.target).hasClass('icon-weixuanzhong'))
      if ($(e.target).hasClass('icon-weixuanzhong')) {
        let list = $('ul.toChoose span.iconfont')
        for (let i = 0; i < list.length; i++) {
          $(list[i]).addClass('icon-weixuanzhong')
          $(list[i]).removeClass('icon-xuanzhong')
        }
      } else {
        let list = $('ul.toChoose span.iconfont')
        for (let i = 0; i < list.length; i++) {
          $(list[i]).addClass('icon-xuanzhong')
          $(list[i]).removeClass('icon-weixuanzhong')
        }
      }
      console.log()
    })
  },
  init: function () {
    cars.choose()
  }
}