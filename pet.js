var counter = Array.from(document.getElementsByClassName("count"));
var heart = Array.from(document.getElementsByClassName("heart"));
var remove = Array.from(document.getElementsByClassName("remove"));
var pett = Array.from(document.getElementsByClassName("pettt"));
var about = Array.from(document.getElementsByClassName("about"));
var minus = Array.from(document.getElementsByClassName("minus"));
var plus = Array.from(document.getElementsByClassName("plus"));
var amount = Array.from(document.getElementsByClassName("amount"));
var items = document.getElementById("items");
var totalamount = document.getElementById("total-amount");
var button = document.getElementsByTagName("button");
var amounttotal = Array.from(document.getElementsByClassName("amounttotal"));
var sommeItems=0;

console.log(plus)


for (let i = 0; i < counter.length; i++) {
  remove[i].addEventListener("click", function () {
    sommeItems-=Number(counter[i].innerHTML)
    items.innerHTML=sommeItems;

    counter[i].innerHTML=0;
    
  });
}
for (let i = 0; i < amounttotal.length; i++) {
  remove[i].addEventListener("click", function (event) {
  event.target.parentElement.parentElement.remove()
    counter[i].innerHTML=0;
    calcul();
  });
}


for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    counter[i].innerHTML++;
    sommeItems++;

    calcul();
  });
}
for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", function () {
    if (counter[i].innerHTML > 0) {
      counter[i].innerHTML--;
      sommeItems--;
      calcul();
    }
  });
}
function calcul() {
  var somme = 0;

  for (let i = 0; i < amount.length; i++) {
    console.log(amount[i].innerHTML)
    console.log("<<<<<<<<<<<",amounttotal)
    amounttotal[i].innerHTML =
      Number(amount[i].innerHTML) * Number(counter[i].innerHTML);

    somme += Number(amount[i].innerHTML) * Number(counter[i].innerHTML);
  }
  
  

  totalamount.innerHTML = somme;
  items.innerHTML=sommeItems;
  console.log("somme", somme);
  console.log("items", sommeItems);
}
function changeColor(heart) {
  if (heart.target.style.color !== "red") {
    heart.target.style.color = "red";
  } else {
    heart.target.style.color = "black";
  }
}
for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", changeColor);
}

// let buttonremove = remove[i] ;
// buttonremove.addEventListener('click' , function(event){
//     let buttonclick = event.target 
//     buttonclick.parentElement.parentElement.remove() 

//     amounttotal[i].innerHTML= 0 ;

//       calcul() ;
// })
