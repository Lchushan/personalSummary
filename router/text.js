
const routers = [{
  name: 'shipei',
  component: 'shipei',
}, {
  name: 'router',
  component: 'router',
}, {
  name: 'randomGun',
  component: 'randomGun',
}, {
  name: 'page',
  component: 'page',
}, {
  name: 'countDown',
  component: 'countDown',
}, {
  name: 'cars',
  component: 'cars',
}, {
  name: 'calendar',
  component: 'calendar',
}, {
  name: 'slideshow',
  component: 'slideshow',
},  {
  name: 'slideshow2',
  component: 'slideshow2',
},{
  name: 'polygon',
  component: 'polygon',
}, {
  name: 'scrollTop',
  component: 'scrollTop',
}, {
  name: 'animation',
  component: 'animation',
}, {
  name: 'object',
  component: 'object',
}, {
  name: 'imgShow',
  component: 'imgShow',
}, {
  name: 'mathRandom',
  component: 'mathRandom',
}, {
  name: 'objStr2Json',
  component: 'objStr2Json',
}, {
  name: 'dialogBox',
  component: 'dialogBox',
}]

// 获取绝对路径
let url = window.location.pathname.split('/')
let urls = ''
for (let i = 1; i < url.length - 1; i++) {
  urls += url[i] + '/'
}

//  路由文件的渲染
for (let i = 0; i < routers.length; i++) {
  // console.log(routers[i])
  Router.route(`/${routers[i].name}`, function () {
    $(".rightMain").html(`<object style="border:0px" type="text/x-scriptlet" data="${urls}view/${routers[i].name}.html" width=100% height=100%></object>`)
  });
}

// Router.route('/shipei', function () {
//   $(".rightMain").css('background-color', 'red')
//   $(".rightMain").load("../view/shipei.html")
//   $(".rightMain").html(`<object style="border:0px" type="text/x-scriptlet" data="./view/shipei.html" width=100% height=100%></object>`)
// });
// Router.route('/router', function () {
//   $(".rightMain").css('background-color', 'blue')
//   $(".rightMain").html(`<object style="border:0px" type="text/x-scriptlet" data="./view/router.html" width=100% height=100%></object>`)
// });