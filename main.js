'use strict';

const skill = document.querySelector('#skills');
const skillHeight= skill.getBoundingClientRect().height;

const skills1 = document.querySelector('.v1');
const skills2 = document.querySelector('.v2');
const skills3 = document.querySelector('.v3');
const skills4 = document.querySelector('.v4');
const skills5 = document.querySelector('.v5');

const skill1 = skills1.dataset.skill;
const skill2 = skills2.dataset.skill;
const skill3 = skills3.dataset.skill;
const skill4 = skills4.dataset.skill;
const skill5 = skills5.dataset.skill;

let start = 0;
const frame1 = () => {
    if (skill1 > start) {
        start += 1;
        skills1.style.width = `${start}%`;

    } else {
        // clearInterval(progressBar1);
        console.log('end');
    }
}
const frame2 = () => {
    if (skill2 > start) {
        start += 1;
        skills2.style.width = `${start}%`;

    } else {
        // clearInterval(progressBar2);
        console.log('end');
    }
}
const frame3 = () => {
    if (skill3 > start) {
        start += 1;
        skills3.style.width = `${start}%`;
    } else {
        // clearInterval(progressBar3);
        console.log('end');
    }
}
const frame4 = () => {
    if (skill4 > start) {
        start += 1;
        skills4.style.width = `${start}%`;

    } else {
        // clearInterval(progressBar4);
        console.log('end');
    }
}
const frame5 = () => {
    if (skill5 > start) {
        start += 1;
        skills5.style.width = `${start}%`;

    } else {
        clearInterval(progressBar5);
        console.log('end');
    }
}


const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
        if(window.scrollY>=(skillHeight+650)){
            console.log('abc');
            const progressBar1 = setInterval(frame1, 100);
            const progressBar2 = setInterval(frame2, 100);
            const progressBar3 = setInterval(frame3, 100);
            const progressBar4 = setInterval(frame4, 100);
            const progressBar5 = setInterval(frame5, 100);
        }
    } else {
        navbar.classList.remove('navbar--dark');

    }
    
})

const navbarMenu = document.querySelector('.navbar__menu');
console.log(navbarMenu);

navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    navbarMenu.classList.remove('open');
    scrollIntoView(link);
})

const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact')
})

const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
})

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = (1 - window.scrollY / homeHeight)
});

const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight / 2) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
})

arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
})

const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null) {
        return;
    }

    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('selected');

    projectContainer.classList.add('anime-out');
    setTimeout(() => {
        projects.forEach((project) => {
            console.log(project.dataset.type);
            if (filter === '*' || filter === project.dataset.type) {
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        })
        projectContainer.classList.remove('anime-out');
    }, 300);

    for (let project of projects) {}
    let project;
    for (let i = 0; i < projects.length; i++) {
        project = projects[i];
    }
})

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({
        behavior: "smooth"
    });
}

