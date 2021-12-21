// 카테고리 메뉴 하위 ul display none 함수
function categoryTreeGlobal() {
  var categoryTree = document.getElementById("categoryTree");
  var ul = categoryTree.getElementsByTagName("ul");

  for (var i = 0; i < ul.length; i++) {
    ul[i].style.display = "none";
  }
}

// 1뎁스 클릭 함수
function categoryTreeDepth1() {
  var depth1Click = document.getElementsByClassName("depth1-title");

  for (i = 0; i < depth1Click.length; i++) {
    depth1Click[i].addEventListener("click", function () {
      var depth2Ul = this.parentElement.querySelector(".depth2");
      var depthIcon = this.parentElement.querySelector(".depth1-icon");

      if (depth2Ul.style.display == "none") {
        depth2Ul.style.display = "block";
      } else {
        depth2Ul.style.display = "none";
      }

      depthIcon.classList.toggle("active");
    });
  }
}

// 2뎁스 클릭 함수
function categoryTreeDepth2() {
  var depth2Click = document.getElementsByClassName("depth2-title");

  for (i = 0; i < depth2Click.length; i++) {
    depth2Click[i].addEventListener("click", function () {
      var depth3Ul = this.parentElement.querySelector(".depth3");
      var depthIcon = this.parentElement.querySelector(".depth2-icon");

      if (depth3Ul.style.display == "none") {
        depth3Ul.style.display = "block";
      } else {
        depth3Ul.style.display = "none";
      }

      depthIcon.classList.toggle("active");
    });
  }
}

// 3뎁스 클릭 함수
function categoryTreeDepth3() {
  var depth3Click = document.getElementsByClassName("depth3-title");

  for (i = 0; i < depth3Click.length; i++) {
    depth3Click[i].addEventListener("click", function () {
      var depth4Ul = this.parentElement.querySelector(".depth4");

      if (depth4Ul.style.display == "none") {
        depth4Ul.style.display = "block";
      } else {
        depth4Ul.style.display = "none";
      }

      this.classList.toggle("open");
    });
  }
}

categoryTreeGlobal();
categoryTreeDepth1();
categoryTreeDepth2();
categoryTreeDepth3();
