$(document).ready(function() {
    // Array de proyectos con imágenes
    const proyectos = [
        { 
            nombre: "Analisis de datos con PBI", 
            descripcion: "BSC sobre una planta productiva de consumibles para minería",
            imagen: "IMG/Project1.jpg"
        },
        { 
            nombre: "Desarrollo de CV en LaTex", 
            descripcion: "Edifción y formato de curriculum vitae en LaTex",
            imagen: "IMG/Project2.jpg"
        },
        { 
            nombre: "Portafolio en HTML", 
            descripcion: "Desarrollo y creación de un sitio web para mostrar los proyectos en los que he participado",
            imagen: "IMG/Project3.jpg"
        }
    ];

    // Cargar proyectos
    proyectos.forEach(proyecto => {
        $("#lista-proyectos").append(`
            <div class="col-md-4 mb-4">
                <div class="card project-card">
                    <img src="${proyecto.imagen}" class="card-img-top" alt="${proyecto.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${proyecto.nombre}</h5>
                        <p class="card-text">${proyecto.descripcion}</p>
                    </div>
                </div>
            </div>
        `);
    });

    // Validación del formulario
    $("#formulario-contacto").submit(function(event) {
        event.preventDefault();
        let nombre = $("#nombre").val();
        let email = $("#email").val();
        let mensaje = $("#mensaje").val();

        if (nombre && email && mensaje) {
            alert("Mensaje enviado con éxito! Gracias por tu interés, te contactaré a la brevedad.");
            this.reset();
        } else {
            alert("Por favor, completa todos los campos.");
        }
    });
});