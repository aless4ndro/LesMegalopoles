// Récupération des données du fichier JSON
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Affichage des données pour chaque ville
    displayData(data.newYork, 'new-york');
    displayData(data.tokyo, 'tokyo');
    displayData(data.shanghai, 'shanghai');

    // Comparaison des données
    compareData(data.newYork, data.tokyo, data.shanghai);
  })
  .catch(error => {
    console.error('Erreur de chargement des données :', error);
  });

// Fonction pour afficher les données pour chaque ville
function displayData(city, id) {
  const section = document.getElementById(id);

  section.innerHTML += `
    <h3>${city.name}</h3>
    <p>Population : ${city.population}</p>
    <p>Superficie : ${city.area} km²</p>
    <p>PIB : ${city.gdp} billions de dollars</p>
    <p>Densité de population : ${city.density} hab./km²</p>
    <p>Points forts touristiques : ${city.attractions}</p>
  `;
}

// Fonction pour comparer les données entre les villes
function compareData(ny, tokyo, shanghai) {
  const comparisonSection = document.getElementById('comparison');

  comparisonSection.innerHTML += `
    <h3>Comparaison des données</h3>
    <p>Population : New York (${ny.population}), Tokyo (${tokyo.population}), Shanghai (${shanghai.population})</p>
    <p>Superficie : New York (${ny.area} km²), Tokyo (${tokyo.area} km²), Shanghai (${shanghai.area} km²)</p>
    <p>PIB : New York (${ny.gdp} billions de dollars), Tokyo (${tokyo.gdp} billions de dollars), Shanghai (${shanghai.gdp} billions de dollars)</p>
    <p>Densité de population : New York (${ny.density} hab./km²), Tokyo (${tokyo.density} hab./km²), Shanghai (${shanghai.density} hab./km²)</p>
  `;
}



const loadButtons = document.querySelectorAll('.load-button');
loadButtons.forEach(button => {
  button.addEventListener('click', () => {
    const cityId = button.getAttribute('data-city');
    const citySection = document.querySelector(`#${cityId}`);
    const cityDataDiv = citySection.querySelector('#${cityId}-data');

    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const cityData = data[cityId];
        displayData(cityData, cityDataDiv);
        citySection.style.display = 'block';
      })
      .catch(error => {
        console.error('Erreur de chargement des données :', error);
      });
  });
});

// Dans ce code JavaScript, nous utilisons la méthode querySelectorAll() pour récupérer tous les boutons avec la classe CSS "load-button", puis nous utilisons la méthode forEach() pour ajouter un gestionnaire d'événements "click" à chaque bouton. Lorsque l'utilisateur clique sur un bouton, nous récupérons l'identifiant de la ville à partir de l'attribut "data-city" du bouton, puis nous utilisons la méthode querySelector() pour récupérer la section de la ville correspondante et le div qui contiendra les données. Nous utilisons ensuite la méthode fetch() pour récupérer les données JSON, puis la fonction displayData() pour afficher les données dans le div approprié. Enfin, nous affichons la section de la ville en définissant son attribut "display" à "block", Avec ces modifications, les sections de la ville sont masquées par défaut et les boutons "Afficher les données" sont




