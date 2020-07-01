// var page = {
//   init: function(){
//     console.log(8888)
//   }
// }

(function ($) {
  var ms = {
    pages: 0,
    init: function (obj, args) {
      return (function () {

        ms.fillHtml(obj, args);
        ms.bindEvent(obj, args);
      })();
    },
    //填充html
    fillHtml: function (obj, args) {
      return (function () {

        obj.empty();

        // 总页数
        if (args.total) {
          if (args.Pagetotal) {
            // 每页显示的条数
            obj.append(`<span class="disabledText">共${args.total}页记录，每页显示：${args.Pagetotal}条</span>`);
          } else {
            obj.append(`<span class="disabledText">共${args.total}页记录</span>`);
          }
        } else {
          if (args.Pagetotal) {
            // 每页显示的条数
            obj.append(`<span class="disabledText">共${args.pageCount}页记录，每页显示：${args.Pagetotal}条</span>`);
          } else {
            obj.append(`<span class="disabledText">共${args.pageCount}页记录</span>`);
          }
        }




        if (args.current > 1) {
          obj.append('<a href="javascript:;" class="toPrevPage">&lt;</a>');
        } else {
          obj.append('<span class="disabled">&lt;</span>');
        }

        //中间页码
        if (args.current != 1 && args.current >= 4 && args.pageCount != 4) {
          obj.append('<a href="javascript:;" class="tcdNumber">' + 1 + '</a>');
        }
        if (args.current - 2 > 2 && args.current <= args.pageCount && args.pageCount > 5) {
          obj.append('<span>...</span>');
        }
        var start = args.current - 2, end = args.current + 2;
        if ((start > 1 && args.current < 4) || args.current == 1) {
          end++;
        }
        if (args.current > args.pageCount - 4 && args.current >= args.pageCount) {
          start--;
        }
        for (; start <= end; start++) {
          if (start <= args.pageCount && start >= 1) {
            if (start != args.current) {
              obj.append('<a href="javascript:;" class="tcdNumber">' + start + '</a>');
            } else {
              obj.append('<span class="current">' + start + '</span>');
            }
          }
        }
        if (args.current + 2 < args.pageCount - 1 && args.current >= 1 && args.pageCount > 5) {
          obj.append('<span>...</span>');
        }
        if (args.current != args.pageCount && args.current < args.pageCount - 2 && args.pageCount != 4) {
          obj.append('<a href="javascript:;" class="tcdNumber">' + args.pageCount + '</a>');
        }
        //下一页
        // if(args.current < args.pageCount){
        // 	obj.append('<a href="javascript:;" class="nextPage">下一页</a>');
        // }else{
        // 	obj.remove('.nextPage');
        // 	obj.append('<span class="disabled">下一页</span>');
        // }

        if (args.current < args.pageCount) {
          obj.append('<a href="javascript:;" class="toNextPage">&gt;</a>');
        } else {
          obj.append('<span class="disabled">&gt;</span>');
        }

        // 选择前往的页面
        if (args.current > 0 && args.isSkip) {
          obj.append(`<span class="disabledText">前往</span>`);
          obj.append(`<input id="numPage" type="text">`);
          obj.append(`<a href="javascript:;" class="toJumpPage">跳转</a>`);
        }



      })();
    },
    //绑定事件

    bindEvent: function (obj, args) {
      return (function () {

        obj.on("click", "a.tcdNumber", function () {
          var current = parseInt($(this).text());
          ms.fillHtml(obj, { "current": current, "pageCount": args.pageCount, "total": args.total, 'isSkip': args.isSkip });
          if (typeof (args.backFn) == "function") {
            args.backFn(current);
          }
        });

        // 上一页
        obj.on("click", "a.toPrevPage", function () {
          if ($(this).siblings("span.current").text() || args.total || args.pageCount) {
            var current = parseInt($(this).siblings("span.current").text()) - 1 || ms.pages;
            if ($(this).siblings("span.current").text()) {
              ms.pages = parseInt($(this).siblings("span.current").text()) - 1
            }
            ms.fillHtml(obj, { "current": current, "pageCount": args.pageCount, "total": args.total, 'isSkip': args.isSkip });
            if (typeof (args.backFn) == "function") {
              args.backFn(current);
            }
          }
        });

        // 下一页
        obj.on("click", "a.toNextPage", function () {
          if ($(this).siblings("span.current").text() || args.total || args.pageCount) {
            var current = parseInt($(this).siblings("span.current").text()) + 1 || ms.pages;
            if ($(this).siblings("span.current").text()) {
              ms.pages = parseInt($(this).siblings("span.current").text()) + 1
            }
            ms.fillHtml(obj, { "current": current, "pageCount": args.pageCount, "total": args.total, 'isSkip': args.isSkip });
            if (typeof (args.backFn) == "function") {
              args.backFn(current);
            }
          }
        });

        // 跳转页面
        obj.on("click", "a.toJumpPage", function () {
          if (parseInt($(this).siblings('input#numPage').val()) || ms.pages) {
            var current = parseInt($(this).siblings('input#numPage').val()) || ms.pages;
            if (parseInt($(this).siblings('input#numPage').val())) {
              ms.pages = parseInt($(this).siblings('input#numPage').val())
            }
            ms.fillHtml(obj, { "current": current, "pageCount": args.pageCount, "total": args.total, 'isSkip': args.isSkip });
            if (typeof (args.backFn) == "function") {
              args.backFn(current);
            }
          }
        });

        // 输入数字之后按下enter键相当于点击跳转页面
        obj.on("keyup", "input#numPage", function () {
          if (event.keyCode == 13) {
            // console.log('enter键按钮')
            $('a.toJumpPage').click()
          }

        });
      })();
    }
  }
  $.fn.createPage = function (options) {
    var args = $.extend({
      Pagetotal: '',
      pageCount: 1,
      current: 1,
      total: 0,
      isSkip: true,
      backFn: function () { }
    }, options);

    ms.init(this, args);
  }
})(jQuery);