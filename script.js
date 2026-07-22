const card = document.querySelector(".card");

window.addEventListener("load",()=>{

    card.classList.add("show");

});

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=

        12+Math.random()*20+"px";

    heart.style.animationDuration=

        5+Math.random()*5+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,600);

document.querySelector("#year").textContent=

new Date().getFullYear();
