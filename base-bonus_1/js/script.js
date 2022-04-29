// MILESTONE 1:
// stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// trasformare la stringa foto in una immagine effettiva

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


// MILESTONE 1
// 1. Scorrere l'array. Per ogni member:
    // - dot notation  oppure scorrere le proprietà di oggetto tramite for ... in

// for (let i = 0; i < team.length; i++) {
//     const currentMember = team[i];
//     
//     // stampo le proprietà con for .. in
//     // for (let key in currentMember) {
//     //     console.log(key, currentMember[key]);
//     // }
// 
//     console.log("name", currentMember.name);
//     console.log("role", currentMember.role);
//     console.log("image", currentMember.image);
// }


// MILESTONE 2
// Scorrere l'array. Per ogni member:

// const teamList = document.getElementById("team");
// 
// for (let i = 0; i < team.length; i++) {
//     const currentMember = team[i];
//     const memberItem = createMemberElement(currentMember);
//     // Appendo questo elemento alla lista
//     teamList.append(memberItem);
// 
// }
// 
// 
// // FUNCTIONS
// 
// function createMemberElement(member) {
//     // Creo il DOM element (li) per il membro
//     const newElement = document.createElement("li");
//     newElement.innerHTML = `
//         <h2>${member.name}</h2>
//         <p>${member.role}</p>
//         <p>${member.image}</p>
//     `;
// 
//     return newElement;
// }

// BONUS 1
// Scorrere l'array. Per ogni member:

const teamList = document.getElementById("team");

for (let i = 0; i < team.length; i++) {
    const currentMember = team[i];
    const memberItem = createMemberElement(currentMember);
    // Appendo questo elemento alla lista
    teamList.append(memberItem);

}

// FUNCTIONS

/**
 * Description Crea un elemento DOM che rappresenta un membro del team
 * @param {Object} member -> l'oggetto che rappresenta i dati (le informazioni) del membro del team da visualizzare
 * @returns {any} elemento del DOM
 */
function createMemberElement(member) {
    // Creo il DOM element (li) per il membro
    const newElement = document.createElement("li");
    newElement.innerHTML = `
        <h2>${member.name}</h2>
        <p>${member.role}</p>
        <img src="img/${member.image}" alt="${member.name}">
    `;

    return newElement;
}