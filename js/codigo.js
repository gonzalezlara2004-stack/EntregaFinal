
fetch("js/proyectos.json")
    .then(respuesta => respuesta.json())
    .then(proyectos => {

        let contenedor = document.querySelector("#contenedor-proyectos");

        for (let proyecto of proyectos) {

            contenedor.innerHTML += `
                <div class="col-md-4">

                    <div class="card h-100 border">

                        <img src="${proyecto.imagen}"
                             class="card-img-top"
                             alt="${proyecto.titulo}">

                        <div class="card-body">

                            <p class="anio">${proyecto.anio}</p>

                            <h3 class="card-title">${proyecto.titulo}</h3>

                            <p class="card-text">${proyecto.descripcion}</p>

                        </div>

                    </div>

                </div>
            `;
        }

    });
