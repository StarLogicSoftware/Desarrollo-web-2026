const servicios = [
  {
    titulo: 'Estrategia digital',
    descripcion: 'Diseñamos caminos claros para crecer con presencia digital y mensajes que conectan.'
  },
  {
    titulo: 'Branding',
    descripcion: 'Creamos identidades visuales con personalidad, coherencia y valor para tu marca.'
  },
  {
    titulo: 'Desarrollo web',
    descripcion: 'Construimos sitios modernos, funcionales y rápidos para convertir visitas en oportunidades.'
  }
];

function renderizarServicios() {
  const contenedor = document.querySelector('#lista-servicios');

  if (!contenedor) {
    return;
  }

  servicios.forEach((servicio) => {
    const card = document.createElement('article');
    card.className = 'servicio';

    card.innerHTML = `
      <div class="icono-servicio" aria-hidden="true"></div>
      <div>
        <h3>${servicio.titulo}</h3>
        <p>${servicio.descripcion}</p>
      </div>
    `;

    contenedor.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderizarServicios);