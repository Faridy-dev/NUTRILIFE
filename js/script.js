const navbarPlaceholder = document.querySelector("#navbar-placeholder");

if (navbarPlaceholder) {
  fetch("components/navbar.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`No se pudo cargar la barra de navegación: ${response.status}`);
      }

      return response.text();
    })
    .then((html) => {
      navbarPlaceholder.innerHTML = html;
    })
    .catch((error) => {
      console.error("Error al cargar la barra de navegación.", error);
    });
}