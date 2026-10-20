const t = document.querySelector(".carta");
let mostrarA = true;

function voltear() {
    if (mostrarA) {
        t.style.backgroundColor = "pink";
        t.style.display = "flex";
        t.style.alignItems = "center";
        t.style.justifyContent = "center";

        t.innerHTML = `
            <img src='img/a.png' alt='Cara B'
                 style='width: 150px; height: 150px; border-radius: 20px; object-fit: cover;'>
        `;
        mostrarA = false;
    } else {
        t.innerHTML = "Cara A";
        t.style.backgroundColor = "white";
        t.style.width = "";
        t.style.height = "";
        mostrarA = true;
    }
}

t.addEventListener('click', voltear);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target === document.body) {
        voltear();
    }
});

const modal = document.querySelector('#modal_tarjeta');
const abrir = document.querySelector('#btn_abrir');
const cerrar = document.querySelector('#btn_cerrar');
const tarjetaModal = document.querySelector('.tarjeta');
const imagen = document.querySelector('.tarjeta img');

abrir.addEventListener('click', () => {
    modal.showModal();
});

imagen.addEventListener('dblclick', () => {
    modal.showModal();
});

cerrar.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('dblclick', () => {
    modal.close();
});

tarjetaModal.addEventListener('mouseover', () => {
    tarjetaModal.classList.add('resaltada');
});

tarjetaModal.addEventListener('mouseout', () => {
    tarjetaModal.classList.remove('resaltada');
});

const boton = document.getElementById('btnOferta');
const tarjeta = document.getElementById('tarjeta');

boton.addEventListener('click', () => {
    tarjeta.classList.add('oferta');
    boton.textContent = '¡Oferta Aplicada!';
    boton.disabled = true;
});

tarjeta.addEventListener('mouseover', () => {
    if (!boton.disabled) {
        boton.textContent = '¡Aprovecha la oferta!';
    }
});

tarjeta.addEventListener('mouseout', () => {
    if (!boton.disabled) {
        boton.textContent = 'Aplicar Oferta';
    }
});

tarjeta.addEventListener('dblclick', () => {
    tarjeta.classList.remove('oferta');
    boton.textContent = 'Aplicar Oferta';
    boton.disabled = false;
});
