let inp= document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){
    let newli = document.createElement("li");
    newli.innerText=inp.value;

    let delBtn= document.createElement("button");
    delBtn.innerText="Delete"
    delBtn.classList.add("delete")
    newli.appendChild(delBtn);

    ul.appendChild(newli);
    inp.value="";
});

ul.addEventListener("click",function(event){
    let listItem;
   if(event.target.nodeName=="BUTTON")
    listItem = event.target.parentElement;
    listItem.classList.add("fade-out");
   setTimeout(() => listItem.remove(), 300);
})





/*
let delBtn = document.querySelectorAll(".delete");
for (let deletbtn of delBtn) {
    deletbtn.addEventListener("click",function(){
        let prnt= this.parentElement;
        prnt.remove();
        
    })
}

*/