//Q1 
let item3 = document.getElementById("container1").lastElementChild;
let container2 = document.getElementById("container2");
container2.append(item3);
//Q2
let item4 = document.getElementById("container2").firstElementChild;
item4.remove();
//Q3
item10 = document.createElement('div')
item10.classList.add("item");
item10.innerText = "10";
let container3 = document.getElementById("container3");
container3.appendChild(item10);
//Q5
let styleBlue = document.querySelectorAll(".containerBlue");
for(let i of styleBlue){
    i.style.color = "red"; 
}