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

const stars=document.createElement("div");

stars.className="stars";

document.body.appendChild(stars);

for(let i=0;i<80;i++){

    const s=document.createElement("div");

    s.className="star";

    s.style.left=Math.random()*100+"vw";

    s.style.top=Math.random()*100+"vh";

    s.style.animationDelay=Math.random()*2+"s";

    stars.appendChild(s);

}

document.addEventListener("pointerdown",(e)=>{

    for(let i=0;i<8;i++){

        const h=document.createElement("div");

        h.className="heart";

        h.innerHTML="❤";

        h.style.left=e.clientX+"px";

        h.style.top=e.clientY+"px";

        h.style.position="fixed";

        h.style.bottom="auto";

        h.style.animationDuration=

        2+Math.random()+"s";

        h.style.transform=

        `translate(${(Math.random()-.5)*100}px,0)`;

        document.body.appendChild(h);

        setTimeout(()=>h.remove(),3000);

    }

});

const typing=document.getElementById("typing");

const text=typing.innerHTML;

typing.innerHTML="";

let index=0;

function type(){

    if(index<text.length){

        typing.innerHTML+=text[index];

        index++;

        setTimeout(type,22);

    }

}

window.addEventListener("load",()=>{

    setTimeout(type,700);

});
