// Actualiza el año del footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Sistema de pestañas: mostrar/ocultar contenido
const tabs = document.querySelectorAll('.nav-links .tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Remover clase active de todas las pestañas
    tabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    
    // Remover clase active de todo el contenido
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Activar la pestaña clickeada
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    
    // Mostrar el contenido correspondiente
    const targetTab = tab.getAttribute('data-tab');
    const targetContent = document.getElementById(targetTab);
    if (targetContent) {
      targetContent.classList.add('active');
    }
  });
});

// Guía de edición rápida (puedes borrar este bloque en producción)
console.info(`
===== Guía rápida =====

1) Sustituye el logo en /assets/logo-frutar-selecta-saul.png (fondo blanco, sin cambios).
2) Añade fotos en /assets/frutas y /assets/verduras y duplica los <article class="product">.
3) Edita teléfono, horario y dirección en el HTML (id="telefono", id="horario", id="direccion").
4) Cambia el enlace de Google Maps por el tuyo.
5) Este proyecto no requiere build: abre index.html en el navegador.
`);

/*
// (Opcional) Si más adelante quieres generar tarjetas desde un JSON:
fetch('./products.json')
  .then(r => r.json())
  .then(data => {
    // data = { frutas: [{img, alt, nombre, nota}], verduras: [...] }
    // renderProducts('#frutas .grid', data.frutas)
  });
*/

// (Opcional) Pequeña utilidad para renderizar productos desde objetos
function renderProducts(selector, items){
  const grid = document.querySelector(selector);
  if (!grid || !Array.isArray(items)) return;
  grid.innerHTML = items.map(({img, alt, nombre, nota}) => `
    <article class="product">
      <img src="${img}" alt="${alt || nombre}" />
      <div class="info">
        <div class="name">${nombre}</div>
        <div class="note">${nota || ''}</div>
      </div>
    </article>
  `).join('');
}
