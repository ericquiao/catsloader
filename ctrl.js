const toTop = document.querySelector(".to-top");

window.addEventListener("scroll",() =>{
  if(window.pageYOffset > 50){
    toTop.classList.add("active");
  }else{
    toTop.classList.remove("active");
  }
});

let generate_btn = document.querySelector(".generate_btn");

generate_btn.addEventListener("click", fetchPics);

function fetchPics(){

  let countNum = document.querySelector('.countNum h1'); 
  
  countNum.innerHTML++;

  let reset = 0;
  let monitor = countNum.innerHTML;

  console.log(monitor)

 // let catsImgDiv = document.querySelector(".catsImgDiv")
  //catsImgDiv.innerHTML = ''

  fetch('https://api.thecatapi.com/v1/images/search')
  .then((response) => response.json())
  .then((data) => {
    let catsImgUrl = data[0].url

    console.log(catsImgUrl)
    let catsImgEl = document.createElement("img")
    catsImgEl.setAttribute('src', `${catsImgUrl}`)
   
    if(monitor==1){

      let catsImgDiv1 = document.querySelector(".catsImgDiv1");
      catsImgDiv1.appendChild(catsImgEl);
      console.log(catsImgDiv1)

    }else if(monitor==2){

      let catsImgDiv2 = document.querySelector(".catsImgDiv2");
      catsImgDiv2.appendChild(catsImgEl);
      console.log(catsImgDiv2)

    }else if(monitor==3){
      let catsImgDiv3 = document.querySelector(".catsImgDiv3");
      catsImgDiv3.appendChild(catsImgEl);
      console.log(catsImgDiv3)
    }else if(monitor==4){
      let catsImgDiv4 = document.querySelector(".catsImgDiv4");
      catsImgDiv4.appendChild(catsImgEl);
      console.log(catsImgDiv4)
    }else if(monitor==5){
      countNum.innerHTML = reset;
      let catsImgDiv5 = document.querySelector(".catsImgDiv5");
      catsImgDiv5.appendChild(catsImgEl);
      console.log(catsImgDiv5)
    }
    

  })
  .catch(err=> console.log(err))
}



