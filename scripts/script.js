/* Carregar componentes no HTML */
function loadComponent(url, elementId) {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.text();
      })
      .then((data) => {
        document.getElementById(elementId).innerHTML = data;
      })
      .catch((error) => console.error("Error loading component:", error));
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    loadComponent("./nav.html", "nav-placeholder");
    loadComponent("./footer.html", "footer-placeholder");
  });
  