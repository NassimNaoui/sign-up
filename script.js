// Sélectionner l'élément par classe
var maDiv = document.querySelector('.sidebar');

// Vérifier si l'élément a été trouvé
if (maDiv) {
  // Récupérer les dimensions de la div par rapport à la fenêtre
  var dimensions = maDiv.getBoundingClientRect();

  // Récupérer la hauteur en vh
  var hauteurEnVh = (dimensions.height / window.innerHeight) * 100;

  // Calculer la valeur pour margin-top
  var marginAuto = `calc((100vh / 3) - ${hauteurEnVh}vh)`;

  // Appliquer la valeur à la propriété margin-top
  maDiv.style.marginTop = marginAuto;
}

