/* 
1) Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
2) Tramite la funzione .forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.

Milestone 2
3) Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.

Milestone 3

4)Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome e colore e colore e opacità del fiocco per ogni gatto. */

$(document).ready(function(){

    //Creo array di oggetti

    const arrCats = [
        {
            name: 'Romeo',
            age: 15,
            color: '#E88600',
            gender: 'male'
        },
        {
            name: 'Duchessa',
            age: 10,
            color: '#FFFFFF',
            gender: 'female'
        },
        {
            name: 'Minou',
            age: 3,
            color: '#BBC6D8',
            gender: 'female'
        },
        {
            name: 'Bizet',
            age: 4,
            color: '#2F2A24',
            gender: 'male'
        },
        {
            name: 'Matisse',
            age: 5,
            color: '#8F4E24',
            gender: 'male'
        }
    ];

    //con un ciclo .forEach stampo a schermo tutti i gattini del mio arrCats
    
    arrCats.forEach((cat) => {
        $('#mailes-1 ul').append(listGenerator(cat.color, cat.name))
    });


    // aggiungo al mio arrCats le proprietà del (fiocco) --> ribbon

    const pink = '#FF00E6';
    const blue = '#0084FF';

    const newCats = arrCats.map((cat) => {

        let color = (cat.gender === 'female') ? pink : blue;


        let opacity = cat.age / 10;
        return {
            ...cat,
            ribbon: {
                color,
                opacity
            }
        }

    }); //end map


    //filtro il mio arrCats in base al gender

    const femaleCats = newCats.filter((cat) => cat.gender === 'female');

    const maleCats = newCats.filter((cat) => cat.gender === 'male');

    femaleCats.forEach((cat) => {
        $('#mailes-2-female ul').append(listGenerator(cat.color, cat.name,cat.ribbon.color,cat.ribbon.opacity))
    });

    maleCats.forEach((cat) => {
        $('#mailes-2-male ul').append(listGenerator(cat.color, cat.name,cat.ribbon.color,cat.ribbon.opacity))
    });


    //unisco in ordine, prima l'array delle femmine e poi quello dei maschi

    const orderedCats = [...femaleCats, ...maleCats];

    //genero un nuovo array con solo il nome, colore e ribbon e lo stampo a schermo

    const catsTarget = orderedCats.map((cat) => {

        const {name, color, ribbon} = cat;

        $('#mailes-3 ul').append(listGenerator(color, name, ribbon.color, ribbon.opacity))

        return {name, color, ribbon};
    })









}); //end document ready


//FUNZIONI

function listGenerator(catColor, name, ...ribbon){

    let ribbonTag = "";
    if(ribbon.length > 0){
        ribbonTag = `<i class="fas fa-paw" style="color:${ribbon[0]}; opacity:${ribbon[1]};"></i>`
    }


    let html = `
        <li>
            <div class="gatto"><i class="fas fa-cat" style="color:${catColor}"></i></div>
            ${ribbonTag}
            <span>${name}</span>
        </li>
    
    `;

    return html;

}