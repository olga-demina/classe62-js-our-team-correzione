// BONUS 2:
// organizzare i singoli membri in card/schede


const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
];



const teamContainer = document.querySelector(".team-container");


for (let i = 0; i < team.length; i++) {
    const currentMember = team[i];
    const memberItem = createMemberElement(currentMember);
    // Appendo questo elemento alla lista
    teamContainer.append(memberItem);
}

// FUNCTIONS

/**
 * Description Crea un elemento DOM che rappresenta un membro del team
 * @param {Object} member -> l'oggetto che rappresenta i dati (le informazioni) del membro del team da visualizzare
 * @returns {any} elemento del DOM
 */
function createMemberElement(member) {
    // Creo il DOM element (li) per il membro
    const newElement = document.createElement("div");
    newElement.classList.add("team-card");
    newElement.innerHTML = `
      <div class="card-image">
        <img
          src="img/${member.image}"
          alt="${member.name}"
        />
      </div>
      <div class="card-text">
        <h3>${member.name}</h3>
        <p>${member.role}</p>
      </div>
    `;

    return newElement;
}