document.querySelector('#movile-btn').addEventListener('click', (e) =>{
    e.target.classList.toggle('active')
    document.querySelector('#app-navbar').classList.toggle('active')
});


document.querySelector('#profile-img').addEventListener('click', (e) =>{
    document.querySelector('#profile-menu').classList.toggle('d-none')
});







