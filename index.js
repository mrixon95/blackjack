console.log("hello");


let playCard = document.querySelectorAll(".playCard");
let frontCard = document.querySelectorAll(".frontCard");
let backCard = document.querySelectorAll(".backCard");


for (let i = 0; i < playCard.length; i++) {
  let pCard = playCard[i];
  let fCard = frontCard[i];
  let bCard = backCard[i];

  pCard.addEventListener("click", function (e) {
    pCard.classList.toggle('is-flipped');
    bCard.classList.toggle('back-invisible');
    let i = fCard.getAttribute('z-index');
    console.log(i);
    if (i > 0) {
      fCard.classList.toggle('back-invisible');
      fCard.setAttribute('z-index', -1 * i);
    }
  });
}

