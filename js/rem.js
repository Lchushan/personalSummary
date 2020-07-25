// rem单位与px单位的转化
function wfontS() {
  // if (window.innerWidth < 1460) return;

  let designSize = 1920; // 设计图尺寸

  let html = document.documentElement;

  let wW = html.clientWidth;// 窗口宽度
  // console.log(wW)
  let rem = wW * 100 / designSize;
  document.documentElement.style.fontSize = rem + 'px';
}

$(window).resize(wfontS());
wfontS()