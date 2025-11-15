const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.width = Math.random() * 10 + 2 + 'px';
    particle.style.height = particle.style.width;
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 5 + 's';
    particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
    particlesContainer.appendChild(particle);
}

const iconsContainer = document.getElementById('floatingIcons');
const icons = ['<i class="fab fa-html5"></i>', '<i class="fab fa-css3-alt"></i>', '<i class="fab fa-js"></i>', '<i class="fab fa-react"></i>', '<i class="fas fa-code"></i>', '<i class="fas fa-laptop-code"></i>', '<i class="fas fa-mobile-alt"></i>', '<i class="fas fa-paint-brush"></i>'];

for (let i = 0; i < 20; i++) {
    const icon = document.createElement('div');
    icon.classList.add('floating-icon');
    icon.innerHTML = icons[Math.floor(Math.random() * icons.length)];
    icon.style.left = Math.random() * 100 + '%';
    icon.style.fontSize = (Math.random() * 20 + 15) + 'px';
    icon.style.animationDuration = (Math.random() * 20 + 10) + 's';
    icon.style.animationDelay = Math.random() * 5 + 's';
    iconsContainer.appendChild(icon);
}

const circles = document.querySelectorAll('.circle');
document.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 40;
    const y = (e.clientY / window.innerHeight - 0.5) * 40;
    circles.forEach((c, i) => {
        const speed = (i + 1) * 0.5;
        c.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});

const title = document.querySelector('h1');
const subtitle = document.querySelector('.sub');
const skills = document.querySelectorAll('.pill');
const buttons = document.querySelectorAll('.btn');

title.style.opacity = '0';
title.style.transform = 'translateY(30px)';
subtitle.style.opacity = '0';
subtitle.style.transform = 'translateY(20px)';

setTimeout(() => {
    title.style.transition = 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)';
    title.style.opacity = '1';
    title.style.transform = 'translateY(0)';
}, 300);

setTimeout(() => {
    subtitle.style.transition = 'all 1s ease';
    subtitle.style.opacity = '0.9';
    subtitle.style.transform = 'translateY(0)';
}, 600);

setTimeout(() => {
    skills.forEach((skill, index) => {
        setTimeout(() => {
            skill.style.transition = 'all 0.5s ease';
            skill.style.opacity = '1';
            skill.style.transform = 'translateY(0)';
        }, index * 100);
    });
}, 1000);

setTimeout(() => {
    document.querySelector('.portfolio-section').style.transition = 'all 1s ease';
    document.querySelector('.portfolio-section').style.opacity = '1';
    document.querySelector('.portfolio-section').style.transform = 'translateY(0)';
}, 1500);

setTimeout(() => {
    buttons.forEach((button, index) => {
        setTimeout(() => {
            button.style.transition = 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)';
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
        }, index * 200);
    });
}, 1800);

const wrap = document.querySelector('.wrap');
document.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    wrap.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg) translateY(-10px)`;
});

wrap.addEventListener('mouseleave', () => {
    wrap.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(-10px)';
});