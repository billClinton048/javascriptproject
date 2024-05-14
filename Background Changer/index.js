let contan = document.getElementById("container")
let button = document.getElementById("btn")


button.addEventListener("click", ()=>{

    
    let colors = ["#ff9999" ,"#ff99ff", "#99ffff", "#99ff99","#ffffff","#999999", "#9999ff", "#ffff99" ];
    let index = colors[Math.floor(Math.random()* colors.length)];

    contan.style.backgroundColor = index;

    



})