const IMAGE_URL = 'https://placehold.co/200';

const IMAGE_CONTAINER = document.querySelector('.img-container');
const INFO_CONTAINER = document.querySelector('.info-container');

const USER = [
    {
        id: 1,
        designation: 'Blanca Tobón',
        description: 'Ya no tengo hambre',
        age: '26',
        fav_music: {
            bands: [
            'Katy Perry', 'Avril Lavigne', 'Lorde', 'Rels B'
            ]
        }
    },
    {
        id: 2,
        designation: 'Fernando Aguilar',
        description: 'Me gusta el calor',
        age: '22',
        fav_music: {
            bands: [
                'Los Temerarios', 'Grupo Frontera', 'Conjunto Primavera', 'Tigres del Norte'
            ]
        }
    },
    {
        id: 3,
        designation: 'Luis Tobón',
        description: 'Le gusta jugar Futbol',
        age: '31',
        fav_music: {
            bands: [
            'Rammstein', 'Foo Fighters',
            ]
        }
    },
    {
        id: 4,
        designation: ' Gustavo Tobón',
        description: 'Le gusta bailar',
        age: '29',
        fav_music: {
            bands: [
            'Bad Bunny', 'Bizarrap'
            ]
        }
    }

]


function userDescription (designation, descripcion, age, bands) {
    cons 

const createDescription = user => {
    const designation = document.createElement('h3');
    const description = document.createElement('p');
    const age = document.createElement('p');
    const bands = document.createElement('ul');
}
}

users.forEach(user =>{
    console.log(user);
    // createDescription(user);
    // populateDescription(user);
    // renderDescription(user);
})


//Creamos Imagen
const image = document.createElement('img');
image.src = IMAGE_URL;
image.alt = 'User Photo';

//Crear descripción
/*const designation = document.createElement('h3');
const description = document.createElement('p');
const age = document.createElement('p');
const bands = document.createElement('ul');*/


//Iteramos en el array de bandad
//Por cada item, creamos una etiqueta ul
//Le agregamos el texto del item
const bandList = USER.fav_music.bands.map(e => {
    const item = document.createElement('ul');
    item.textContent = e;
    return item;
});


//Poblamos elementos
const artistList = USER.designation;
designation.textContent = USER.designation;
description.textContent = USER.description;
age.textContent = USER.age;
bands.textContent = USER.fav_music.bands;

//Renderizamos Elementos
IMAGE_CONTAINER.appendChild(image); 
INFO_CONTAINER.append(designation, description, age, ...bandstList);
 

//const lista = ` <ul>${IMAGE_URL}</ul>`
//IMAGE_CONTAINER.innerHTML = lista;