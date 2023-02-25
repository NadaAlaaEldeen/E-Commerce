var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");

// for (var i = 0; i < smallimg.length; i++) {
//   smallimg[i].onclick = function () {
//     MainImg.src = smallimg[i].src;
//   };
// }

smallimg[0].onclick = function () {
  MainImg.src = smallimg[0].src;
};

smallimg[1].onclick = function () {
  MainImg.src = smallimg[1].src;
};

smallimg[2].onclick = function () {
  MainImg.src = smallimg[2].src;
};

smallimg[3].onclick = function () {
  MainImg.src = smallimg[3].src;
};
