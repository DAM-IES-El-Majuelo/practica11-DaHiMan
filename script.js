// Función para cambiar entre secciones y pestañas
function showSection(sectionId) {
    // Primero ocultamos todas las secciones
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Mostramos la sección seleccionada
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.style.display = 'block';

    // Eliminamos la clase 'active' de todas las pestañas
    const tabs = document.querySelectorAll('.tab-link');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });

    // Añadimos la clase 'active' a la pestaña seleccionada
    const activeTab = document.querySelector(`.tab-link[onclick="showSection('${sectionId}')"]`);
    activeTab.classList.add('active');
}

// Establecer la primera sección al cargar la página
window.addEventListener("load", function() {
    showSection('herramientas'); 
});

// 1. Funciones: alert() y console.log()
function showAlert() {
    alert("¡Hola, este es un mensaje de alerta!");
}

function logMessage() {
    console.log("Este es un mensaje en la consola.");
}

// Llamando a las funciones
showAlert();
logMessage();

// 2. Uso de objetos del navegador (Browser BOM)

// window: Objetos globales del navegador
console.log("Tamaño de la ventana del navegador:", window.innerWidth, "x", window.innerHeight);

// navigator: Información sobre el navegador
console.log("Información del navegador:", navigator.userAgent);

// screen: Información sobre la pantalla del dispositivo
console.log("Resolución de la pantalla:", screen.width, "x", screen.height);

// history: Navegar hacia atrás o adelante
function navigateBack() {
    window.history.back();
}

// location: Obtener la URL actual
console.log("URL actual:", window.location.href);

// 3. Uso de objetos del DOM: document, elements, attributes, events, style
document.getElementById("mienlace").style.backgroundColor = "orange"; 

// 4. Manipulación del DOM: getElementById, getElementsByTagName, etc.

function changeColor() {
    const element = document.getElementById("mienlace");
    element.style.backgroundColor = "blue"; 
}

function changeHeadingColor() {
    const headings = document.getElementsByTagName("h2");
    for (let heading of headings) {
        heading.style.color = "green"; 
    }
}

function toggleParagraphVisibility() {
    const paragraphs = document.getElementsByClassName("hide-paragraph");
    for (let paragraph of paragraphs) {
        paragraph.style.display = (paragraph.style.display === "none") ? "block" : "none"; 
    }
}

function addClassToButton() {
    const button = document.querySelector("button");
    button.classList.add("highlight"); 
}

function changeTextContent() {
    const items = document.querySelectorAll(".list-item");
    items.forEach(item => {
        item.textContent = "Texto modificado"; 
    });
}

// 5. Manejadores de eventos: onclick, onMouseOver, onMouseOut, de teclado, onload

document.getElementById("mienlace").addEventListener("click", function() {
    alert("¡Has hecho clic en el enlace!");
});

document.getElementById("mienlace").addEventListener("mouseover", function() {
    this.style.backgroundColor = "red"; 
});

document.getElementById("mienlace").addEventListener("mouseout", function() {
    this.style.backgroundColor = "orange"; 
});

document.addEventListener("keydown", function(event) {
    console.log("Tecla presionada:", event.key);
});

window.addEventListener("load", function() {
    console.log("La página se ha cargado completamente.");
});

// 6. Mostrar u ocultar información y modificar estilos
function toggleVisibility() {
    const content = document.getElementById("hiddenContent");
    content.style.display = (content.style.display === "none") ? "block" : "none"; 
}

// 7. Ejemplo de validación y manipulación de un formulario
document.getElementById("formContact").addEventListener("submit", function(event) {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    if (!nombre || !email || !mensaje) {
        alert("Por favor, completa todos los campos.");
        event.preventDefault(); 
    }
});

// 8. Ejemplos más complejos o creativos (copiados de Internet)
function animateElement() {
    const element = document.getElementById("animateMe");
    let position = 0;
    let interval = setInterval(function() {
        if (position >= 200) {
            clearInterval(interval);
        } else {
            position++;
            element.style.left = position + "px"; 
        }
    }, 5); 
}

// Control de video para MP4
const videoMP4 = document.getElementById('videoMP4');
const playPauseButtonMP4 = document.getElementById('playPauseMP4');
const volumeControlMP4 = document.getElementById('volumeControlMP4');

// Función para Play/Pause
function togglePlayPauseMP4() {
    if (videoMP4.paused) {
        videoMP4.play();
        playPauseButtonMP4.textContent = 'Pausar';
    } else {
        videoMP4.pause();
        playPauseButtonMP4.textContent = 'Reproducir';
    }
}

// Función para controlar el volumen
function setVolumeMP4() {
    videoMP4.volume = volumeControlMP4.value;
}

// Evento para Play/Pause
playPauseButtonMP4.addEventListener('click', togglePlayPauseMP4);

// Evento para volumen
volumeControlMP4.addEventListener('input', setVolumeMP4);

// Función para abrir el menú
function openNav() {
    document.getElementById("sidenav").style.width = "250px";
}

// Función para cerrar el menú
function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}

// Abre el menú al hacer clic en el botón
document.getElementById("openMenu").addEventListener("click", openNav);

let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); // Cambiar imagen cada 2 segundos
}

showSlides(); // Llama a la función al cargar


// Función para abrir el modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    var img = document.querySelector(`#${modalId} .modal-content`);
    var caption = document.getElementById("caption");

    // Asigna la ruta de la imagen clicada al modal
    img.src = event.target.src;
    
    // Asigna la descripción (alt) de la imagen clicada al caption del modal
    caption.innerHTML = event.target.alt;

    modal.style.display = "block";  // Muestra el modal
}

// Función para cerrar el modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";  // Oculta el modal
}
