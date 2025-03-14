document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".buscar").addEventListener("click", function() {
        alert("Função de busca ainda não implementada!");
    });
    
    document.querySelector(".agendar button").addEventListener("click", function() {
        alert("Agendamento em breve!");
    });
});

function mostrarModelos() {
    const marca = document.getElementById('marca').value;  // Corrigido para document.getElementById
    const modeloSelecionado = document.getElementById('modelo'); // Corrigido para document.getElementById
    modeloSelecionado.innerHTML = '<option>Selecione o Modelo</option>';
    
    let modelos = [];
    
    if (marca === 'ford') {
        modelos = ['Fiesta', 'Focus', 'Mustang', 'Explorer'];
    } else if (marca === 'chevrolet') {
        modelos = ['Onix', 'Tracker', 'Camaro', 'S10'];
    } else if (marca === 'volkswagen') {
        modelos = ['Gol', 'Fusca', 'Polo', 'Passat'];
    } else if (marca === 'fiat') {
        modelos = ['Uno', 'Palio', 'Toro', 'Mobi'];
    } else if (marca === 'honda') {
        modelos = ['Civic', 'HR-V', 'Fit', 'CR-V'];
    }

    // Adicionar as opções de modelo no select
    modelos.forEach(modelo => {
        const option = document.createElement('option');
        option.value = modelo.toLowerCase();
        option.textContent = modelo;
        modeloSelecionado.appendChild(option);
    });
};

const carrossel = document.querySelector('.carrossel');
const imagens = document.querySelectorAll('.carrossel img');
const next = document.querySelector('.next');
const previous = document.querySelector('.prev');

let indice = 0;
const slides = document.querySelectorAll('.slide');  // Seleciona todas as imagens
const totalSlides = slides.length;

function mudarSlide(direcao) {
    slides[indice].classList.remove('selecionado');

    indice = (indice + direcao + totalSlides) % totalSlides;

    slides[indice].classList.add('selecionado');
}

slides[indice].classList.add('selecionado');

next.addEventListener('click', () => {
    imagens[indice].classList.remove('selecionado');
    indice = (indice + 1) % imagens.length; 
    imagens[indice].classList.add('selecionado');
});

previous.addEventListener('click', () => {
    imagens[indice].classList.remove('selecionado');
    indice = (indice - 1 + imagens.length) % imagens.length; 
    imagens[indice].classList.add('selecionado');
});
