window.onload = function () {
  let my_slider = document.getElementById("my_slider");
  let my_sliderArr = document.getElementsByTagName("li");
  let nav = document.getElementById("nav");
  let outer = document.getElementById("outer");
  //导航按钮居中
  nav.style.left = (outer.offsetWidth - nav.offsetWidth) / 2 + "px";
  let index = 0;
  // 获取所有a
  let allA = document.getElementsByClassName("a");
  // my_slider.style.width = 1100 * my_sliderArr.length + "px";
  // 设置默认选中的效果
  allA[index].style.backgroundColor = "black";
  allA[index].style.width = 40 + "px";
  // 点击超链接切换
  for (let i = 0; i < allA.length; i++) {
    allA[i].num = i;
    allA[i].onclick = function () {
      index = this.num;
      my_slider.style.left = -1600 * index + "px";
      setA();
    };
  }
  autoChange();
  function autoChange() {
    setInterval(function () {
      index++;
      index %= my_sliderArr.length;
      let oldValue = parseInt(
        document.defaultView.getComputedStyle(my_slider, null).left
      );
      if (oldValue == -8800) {
        oldValue = 1600;
      }
      let newValue = oldValue - 1600;
      my_slider.style.left = newValue + "px";
      setA();
    }, 2000);
  }
  function setA() {
    if (index >= my_sliderArr.length - 1) {
      index = 0;
      my_slider.style.left = 0 + "px";
    }
    // 遍历所有的a，并将它们的背景颜色设置为灰色
    for (let i = 0; i < allA.length; i++) {
      allA[i].style.width = "";
      allA[i].style.backgroundColor = "";
    }
    // 将选中的a设置为黑色
    allA[index].style.backgroundColor = "black";
    allA[index].style.width = 40 + "px";
  }
};



