var calendar = {
  calenderMain2yy: '',
  calenderMain2mm: '',
  //获取某月的总天数
  fungetmonth: function (year, month) {
    var mydate = new Date(year, month, 0);//0的目的是获取某月的天数
    mydate = mydate.getDate();
    return mydate;
  },
  //把数据储存在二维数组里
  fungetdata: function (year, month) {
    var array = new Array()
    for (var i = 0; i < 7; i++) {
      array[i] = new Array(7);
    }
    var mydate = new Date(year, month - 1, 1);
    mydate = mydate.getDay();
    var week = calendar.fungetmonth(year, month);
    var day = 1;
    array[0][0] = "sun";
    array[0][1] = "Mon";
    array[0][2] = "Tue";
    array[0][3] = "Wed";
    array[0][4] = "Thu";
    array[0][5] = "Fri";
    array[0][6] = "Sat";
    var r, c, m;
    //确定第二行的内容
    for (c = mydate; c < 7; c++) {
      array[1][c] = day;
      day++;
    }
    //把其余的天数加入到数组中
    var r, c;
    for (r = 2; r < 7; r++) {
      for (c = 0; c < 7; c++)
      //函数作用是将其余的天数加入到表格中其中week是最一天
      {
        if (day <= week) {
          array[r][c] = day;
          day++;
        }
      }
    }
    return array;
  },
  //把数组中的数据添加到页面中
  funadddata: function (year, month, name) {
    var array = calendar.fungetdata(year, month);
    // console.log(array)
    var r, c;
    //第一行
    let html = ''
    html = `<table id="calenderDate"><tr>
    <th>${array[0][0]}</th>
    <th>${array[0][1]}</th>
    <th>${array[0][2]}</th>
    <th>${array[0][3]}</th>
    <th>${array[0][4]}</th>
    <th>${array[0][5]}</th>
    <th>${array[0][6]}</th>
    </tr>`
    // document.write("<table><tr>");
    // document.write("<td>" + array[0][0] + "</td>");
    // document.write("<td>" + array[0][1] + "</td>");
    // document.write("<td>" + array[0][2] + "</td>");
    // document.write("<td>" + array[0][3] + "</td>");
    // document.write("<td>" + array[0][4] + "</td>");
    // document.write("<td>" + array[0][5] + "</td>");
    // document.write("<td>" + array[0][6] + "</td>");
    // document.write("</tr>");
    //除第一行的其它行
    for (r = 1; r < 7; r++) {
      html += '<tr>'
      // document.write("<tr>");
      for (c = 0; c < 7; c++) {
        var funid = "td" + r + c;
        html += "<td id=" + funid + ">"
        // document.write("<td id=" + funid + ">");
        if (array[r][c] > 0) {
          html += "" + array[r][c] + ""
          // document.write("" + array[r][c] + "");
        } else {
          html += " "
          // document.write(" ");
        }
        html += "</td>"
        // document.write("</td>");
      }
      html += "</tr>"
      // document.write("</tr>");
    }
    $(name).html(html)
    // document.write("</table>");
  },
  //更新数据
  funupdatedata: function (year, month) {
    var r, c;
    var array = calendar.fungetdata(year, month);//把数据写入数组中
    // console.log(array)
    for (r = 1; r < 7; r++) {
      for (c = 0; c < 7; c++) {
        var funid = "td" + r + c;
        if (array[r][c] > 0) {
          $(`.calenderMain2 #${funid}`).text(array[r][c])
          // document.getElementById("" + funid + "").innerText = array[r][c];
        }
        else {
          $(`.calenderMain2 #${funid}`).text("")
          // document.getElementById("" + funid + "").innerText = "";
        }
      }
    }
  },
  calenderMain2ShowTime: function (yy, mm) {
    let nowTime = yy + '年' + mm + '月'
    // console.log(nowTime)
    $('.nowTime').html(nowTime)
  },
  // 距离今天的月份
  toGetYYYYMM: function (year, month, day, type) {
    // let time = (new Date()).getTime() -
    // console.log(time)

    // oneMonthYMD = function (type) {
    // var now = new Date()
    // var year = now.getFullYear()// getYear()+1900=getFullYear()
    // var month = now.getMonth() + 1// 0-11??1-12?
    // var day = now.getDate() // ????
    if (parseInt(month) < 10) {
      month = '0' + month
    }
    if (parseInt(day) < 10) {
      day = '0' + day
    }
    now = year + '-' + month + '-' + day // ?????????? return ??

    var preMonth = parseInt(month) - 1
    // preMonth = preMonth < 10 ? '0' + preMonth : preMonth
    var nextMonth = parseInt(month) + 1
    // nextMonth = nextMonth < 10 ? '0' + nextMonth : nextMonth

    if (parseInt(month) == 1 && type == -1) {
      return [(parseInt(year) - 1), '12', day]
    } else if (parseInt(month) == 12 && type == 1) {
      return [(parseInt(year) + 1), '1', day]
    }

    var preSize = new Date(year, parseInt(month) - 1, 0).getDate()
    var nextSize = new Date(year, parseInt(month) + 1, 0).getDate()
    // console.log(preSize, nextSize)
    if (preSize < parseInt(day) && type == -1) {
      return [year, preMonth, preSize]
    } else if (nextSize < parseInt(day) && type == 1) {
      return [year, nextMonth, nextSize]
    }

    if (type == -1) {
      return [year, preMonth, day]
    } else if (type == 1) {
      return [year, nextMonth, day]
    } else if (type == 0) {
      return now
    }
    // }


  },
  init: function () {

    // 现在的时间
    let time = new Date()
    this.calenderMain2yy = time.getFullYear()
    this.calenderMain2mm = time.getMonth() + 1
    calendar.calenderMain2ShowTime(this.calenderMain2yy, this.calenderMain2mm)

    calendar.funadddata(this.calenderMain2yy, this.calenderMain2mm, '.calenderMain1')
    calendar.funadddata(this.calenderMain2yy, this.calenderMain2mm, '.calenderMain2')

    $(".calenderTetle2 .icon-jiantoushang").on("click", function () {
      let yymm = calendar.toGetYYYYMM(calendar.calenderMain2yy, calendar.calenderMain2mm, 1, -1)
      console.log(yymm)
      calendar.calenderMain2yy = yymm[0]
      calendar.calenderMain2mm = yymm[1]
      $('.nowTime').text(calendar.calenderMain2yy + '年' + calendar.calenderMain2mm + '日')
      calendar.funupdatedata(calendar.calenderMain2yy, calendar.calenderMain2mm)
      // console.log('<<<<<<<')
      // calendar.calenderMain2ShowTime(calendar.calenderMain2yy, calendar.calenderMain2mm - 1)
    })

    $(".calenderTetle2 .icon-jiantouxia").on("click", function () {
      let yymm = calendar.toGetYYYYMM(calendar.calenderMain2yy, calendar.calenderMain2mm, 1, 1)
      console.log(yymm)
      calendar.calenderMain2yy = yymm[0]
      calendar.calenderMain2mm = yymm[1]
      $('.nowTime').text(calendar.calenderMain2yy + '年' + calendar.calenderMain2mm + '日')
      calendar.funupdatedata(calendar.calenderMain2yy, calendar.calenderMain2mm)
      // calendar.calenderMain2ShowTime(calendar.calenderMain2yy, calendar.calenderMain2mm)
    })

    calendar.funadddata(2020, 4, '.calenderMain3')

  }
}