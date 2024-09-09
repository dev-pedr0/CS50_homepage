document.getElementById('rolar-cima').addEventListener('click', function(){
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
});

const botaoTopo = document.getElementById('rolar-cima');
botaoTopo.style.display = 'none';

window.addEventListener('scroll', function(){
    if (window.scrollY > 50) {
        botaoTopo.style.display = 'flex';
    } else {
        botaoTopo.style.display = 'none';
    }
});
