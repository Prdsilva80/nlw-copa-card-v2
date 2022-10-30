let isIgnite = false
// function changeCard(event) {
//   const card = event.currentTarget
//   const bg = isIgnite ? "explorer" : "ignite"
//   isIgnite = !isIgnite
//   card.style.backgroundImage = `url(./assets/bg-${bg}.svg)`
// }


let swapTrack = document.querySelector("#choseTrack");

swapTrack.addEventListener("click", function(){
  const card = document.querySelector(".card")
  const bg = isIgnite ? "explorer" : "ignite"
  isIgnite = !isIgnite
  card.style.backgroundImage = `url(./assets/bg-${bg}.svg)`
});

let btns = document.getElementsByClassName("button-flag");

for(let bts_ of btns){   
  bts_.onclick = function(){      
      // seleciona todos os botões com a classe .button-flag dentro da classe flags. O querySelectorAll retorna um objeto, onde childs vai ser uma NodeList.
    const childs = document.querySelectorAll(".flags .button-flag");
    let index = 0;
    
    // determina o index do botão com base 0
    for(let el of childs){
        if(this == el) break;
        index++;
    }
    
    let cardFlag = document.getElementsByClassName("chosen-flag");
    
    // esconde todos
    for(let cts_ of cardFlag){
        cts_.style.display = "none";
    }
    
    // mostra só a div do botão que foi clicado
    cardFlag[index].style.display = "block";
  } 
};


let userPic = document.querySelector("#user-pic");
let userName = "";

function captureInput(){
  userName = document.querySelector("#git-name").value;

  document.querySelector("#cardName").innerHTML = userName;
  userPic.style.backgroundImage = `url(https://github.com/${userName}.png)`
};
