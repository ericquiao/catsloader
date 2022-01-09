const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 50) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

let generate_btn = document.querySelector(".generate_btn");

generate_btn.addEventListener("click", fetchPics);

function fetchPics() {
  let countNum = document.querySelector(".countNum h1");

  countNum.innerHTML++;

  let reset = 0;
  let monitor = countNum.innerHTML;

  console.log(monitor);

  // let catsImgDiv = document.querySelector(".catsImgDiv")
  //catsImgDiv.innerHTML = ''

  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
      let catsImgUrl = data[0].url;

      console.log(catsImgUrl);

      let catsImgEl = document.createElement("img");
      catsImgEl.setAttribute("src", `${catsImgUrl}`);
      catsImgEl.setAttribute("width", "auto")
      

     if (monitor == 1) {      
        document.getElementById("placehere1").appendChild(catsImgEl);
       }
      else if (monitor == 2) {
        document.getElementById("placehere2").appendChild(catsImgEl);
       } 
      else if (monitor == 3) {
        
        document.getElementById("placehere3").appendChild(catsImgEl);
       } 
      else if (monitor == 4) {
       
        document.getElementById("placehere4").appendChild(catsImgEl);
       } 
      else if (monitor == 5) {
        
        document.getElementById("placehere5").appendChild(catsImgEl);
       } 
      else if (monitor == 6) {
        countNum.innerHTML = 0;
        document.getElementById("placehere6").appendChild(catsImgEl);
       } 
 
     })
    .catch((err) => console.log(err));
}
