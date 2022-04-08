const products = [
    {
        "id": "1",
        "categoriaId": "Camiseta",
        "equipo": "Atlanta Hawks",
        "jugador": "Trae Young",
        "tipoId": "icon",
        "precio": "$8500",
        "img": "/img/camisetas/Atlanta/young.webp",
        "descripcion": ""
    },
    {
        "id": "2",
        "categoriaId": "Camiseta",
        "equipo": "Boston Celtics",
        "jugador": "Jaylen Brown",
        "tipoId": "icon",
        "precio": "$8500",
        "img": "/img/camisetas/Boston/brown.webp",
        "descripcion": ""
    },
    {
        "id": "3",
        "categoriaId": "Camiseta",
        "equipo": "Chicago Bulls",
        "jugador": "Zach LaVine",
        "tipoId": "icon",
        "precio": "$8500",
        "img": "/img/camisetas/Chicago/lavine.jpg",
        "descripcion": ""
    },
    {
        "id": "4",
        "categoriaId": "Camiseta",
        "equipo": "Cleveland Cavaliers",
        "jugador": "Darius Garland",
        "tipoId": "association",
        "precio": "$8500",
        "img": "/img/camisetas/Cleveland/garland1.webp",
        "descripcion": ""
    },
    {
        "id": "5",
        "categoriaIdId": "Camiseta",
        "equipo": "Cleveland Cavaliers",
        "jugador": "Darius Garland",
        "tipoId": "icon",
        "precio": "$8500",
        "img": "/img/camisetas/Cleveland/garland.webp",
        "descripcion": "You already cheer the loudest at every Cleveland Cavaliers game. Take your fandom up a notch and show that you're the ultimate Darius Garland fan when you pick up this Swingman jersey from Nike. When you wear this authentic jersey while cheering on your team, you stand out as much more than just a fan. Let everyone know you're a true Cleveland Cavaliers fan with the heart of a champion."
    },
    {
        "id": "6",
        "categoriaId": "Camiseta",
        "equipo": "Cleveland Cavaliers",
        "jugador": "Evan Mobley",
        "tipoId": "City",
        "precio": "$8500",
        "img": "/img/camisetas/Cleveland/mobley.webp",
        "descripcion": ""
    },
    {
        "id": "7",
        "categoriaId": "Camiseta",
        "equipo": "Dallas Mavericks",
        "jugador": "Luka Dončić",
        "tipoId": "association",
        "precio": "$8500",
        "img": "/img/camisetas/Dallas/doncic.webp",
        "descripcion": ""
    },
    {
        "id": "8",
        "categoriaId": "Camiseta",
        "equipo": "Indiana Pacers",
        "jugador": "Myles Turner",
        "tipoId": "icon",
        "precio": "$8500",
        "img": "/img/camisetas/Indiana/turner.webp",
        "descripcion": ""
    },
    {
        "id": "9",
        "categoriaId": "Camiseta",
        "equipo": "LA Lakers",
        "jugador": "LeBron James",
        "tipoId": "City Edition",
        "precio": "$8500",
        "img": "/img/camisetas/Los Angeles (Lakers)/lebron.webp",
        "descripcion": ""
    },
    {
        "id": "10",
        "categoriaId": "Camiseta",
        "equipo": "Memphis Grizzlies",
        "jugador": "Ja Morant",
        "tipoId": "association",
        "precio": "$8500",
        "img": "/img/camisetas/Memphis/morant.webp",
        "descripcion": ""
    },
    {
        "id": "11",
        "categoriaId": "Camiseta",
        "equipo": "Minnesota Timberwolves",
        "jugador": "Karl-Anthony Towns",
        "tipoId": "association",
        "precio": "$8500",
        "img": "/img/camisetas/Minnesota/towns.webp",
        "descripcion": ""
    },
    {
        "id": "12",
        "categoriaId": "Camiseta",
        "equipo": "New Orleans Pelicans",
        "jugador": "Brandon Ingram",
        "tipoId": "association",
        "precio": "$8500",
        "img": "/img/camisetas/New Orleans/ingram.webp",
        "descripcion": ""
    },
    {
        "id": "13",
        "categoriaId": "Camiseta",
        "equipo": "New York Knicks",
        "jugador": "RJ Barrett",
        "tipoId": "icon",
        "precio": "$8500",
        "img": "/img/camisetas/New York/barrett.webp",
        "descripcion": ""
    },
    {
        "id": "14",
        "categoriaId": "Camiseta",
        "equipo": "Oklahoma City Thunder",
        "jugador": "Josh Giddey",
        "tipoId": "association",
        "precio": "$8500",
        "img": "/img/camisetas/Oklahoma/giddey.webp",
        "descripcion": ""
    },
    {
        "id": "15",
        "categoriaId": "Camiseta",
        "equipo": "Phoenix Suns",
        "jugador": "Devin Booker",
        "tipoId": "icon",
        "precio": "$8500",
        "img": "/img/camisetas/Phoenix/booker.webp",
        "descripcion": ""
    },
    {
        "id": "16",
        "categoriaId": "Camiseta",
        "equipo": "Phoenix Suns",
        "jugador": "Shawn Marion",
        "tipoId": "throwback",
        "precio": "$8500",
        "img": "/img/camisetas/Phoenix/marion.webp",
        "descripcion": ""
    },
    {
        "id": "17",
        "categoriaId": "Camiseta",
        "equipo": "Portland Trail Blazers",
        "jugador": "Clyde Drexler",
        "tipoId": "throwback",
        "precio": "$8500",
        "img": "/img/camisetas/Portland/drexler.webp",
        "descripcion": ""
    },
    {
        "id": "18",
        "categoriaId": "Camiseta",
        "equipo": "Portland Trail Blazers",
        "jugador": "Damian Lillard",
        "tipoId": "icon",
        "precio": "$8500",
        "img": "/img/camisetas/Portland/lillard.webp",
        "descripcion": ""
    } ,
    {
        "id": "19",
        "categoriaId": "Short",
        "equipo": "Chicago Bulls",
        "jugador": "sdf",
        "tipoId": "icon",
        "precio": "$8500",
        "img": "/img/bulls_courtside-fleece-short.jpg",
        "descripcion": ""
    }
];

export const obtainProducts = (categoriaId) => {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve(categoriaId ? products.filter((prod) => prod.categoriaId === categoriaId) : products);
        }, 500);
    })
}

export const obtainDetail = (id) => {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === id));
        }, 500);
    })
}

export const obtainTipoId = (tipo) => {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve(products.filter((prod) => prod.tipoId === tipo));
        }, 500);
    })
}