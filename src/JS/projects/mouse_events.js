function mouse_over(set, title)
{
    title.style.color = "hsl(212, 21%, 14%)";
    set.style.backgroundColor = "hsl(136, 69%, 51%)";
    set.style.color = "hsl(212, 21%, 14%)";
}

function mouse_leave (set, title)
{
    title.style.color = "white";
    set.style.backgroundColor = "hsl(212, 21%, 14%)";
    set.style.color = "white";
}

// BSQ - EVENTS
let bsq = document.querySelector(".container-bsq");
let title_bsq = document.querySelector(".BSQ-title");
bsq.addEventListener("mouseover", ()=>{
    mouse_over(bsq, title_bsq);
});
bsq.addEventListener("mouseleave", () =>{
    mouse_leave(bsq, title_bsq);
});
bsq.addEventListener("click", () =>{
    location.href = "./bsq.html";
});

// LS - EVENTS
let ls = document.querySelector(".container-ls");
let title_ls = document.querySelector(".LS-title");
ls.addEventListener("mouseover", () =>{
    mouse_over(ls, title_ls);
});
ls.addEventListener("mouseleave", () =>{
    mouse_leave(ls, title_ls);
});

// HUNTER - events
let hunt = document.querySelector(".container-hunt");
let title_hunt = document.querySelector(".HUNT-title");
hunt.addEventListener("mouseover", () =>{
    mouse_over(hunt, title_hunt);
});
hunt.addEventListener("mouseleave", () =>{
    mouse_leave(hunt, title_hunt);
});

// push - evets
let push = document.querySelector(".container-push");
let title_push = document.querySelector(".PUSH-title");
push.addEventListener("mouseover", () =>{
    mouse_over(push, title_push);
});
push.addEventListener("mouseleave", () =>{
    mouse_leave(push, title_push);
});

// soko - event 
let soko = document.querySelector(".container-soko");
let title_soko= document.querySelector(".SOKO-title");
soko.addEventListener("mouseover", () =>{
    mouse_over(soko, title_soko);
});
soko.addEventListener("mouseleave", () =>{
    mouse_leave(soko, title_soko);
});


// radar - events
let radar = document.querySelector(".container-radar");
let title_radar = document.querySelector(".RADAR-title");
radar.addEventListener("mouseover", () =>{
    mouse_over(radar, title_radar);
});
radar.addEventListener("mouseleave", () =>{
    mouse_leave(radar, title_radar);
});

// ANT - events
let ant = document.querySelector(".container-ant");
let title_ant = document.querySelector(".ANT-title");
ant.addEventListener("mouseover", () =>{
    mouse_over(ant, title_ant);
});

ant.addEventListener("mouseleave", () =>{
    mouse_leave(ant, title_ant);
});

// navy events 
let navy = document.querySelector(".container-navy");
let title_navy = document.querySelector(".NAVY-title");
navy.addEventListener("mouseover", () =>{
    mouse_over(navy, title_navy);
});
navy.addEventListener("mouseleave", () =>{
    mouse_leave(navy, title_navy);
});