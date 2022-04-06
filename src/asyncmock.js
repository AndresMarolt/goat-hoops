const products = [
    {
        "id": 1,
        "categoria": "Camiseta",
        "equipo": "Atlanta Hawks",
        "jugador": "Trae Young",
        "tipo": "Icon",
        "precio": "$8500",
        "img": "img/camisetas/Atlanta/young.webp",
        "descripcion": ""
    },
    {
        "id": 2,
        "categoria": "Camiseta",
        "equipo": "Boston Celtics",
        "jugador": "Jaylen Brown",
        "tipo": "Icon",
        "precio": "$8500",
        "img": "img/camisetas/Boston/brown.webp",
        "descripcion": ""
    },
    {
        "id": 3,
        "categoria": "Camiseta",
        "equipo": "Chicago Bulls",
        "jugador": "Zach LaVine",
        "tipo": "Icon",
        "precio": "$8500",
        "img": "img/camisetas/Chicago/lavine.jpg",
        "descripcion": ""
    },
    {
        "id": 4,
        "categoria": "Camiseta",
        "equipo": "Cleveland Cavaliers",
        "jugador": "Darius Garland",
        "tipo": "Association",
        "precio": "$8500",
        "img": "img/camisetas/Cleveland/garland1.webp",
        "descripcion": ""
    },
    {
        "id": 5,
        "categoria": "Camiseta",
        "equipo": "Cleveland Cavaliers",
        "jugador": "Darius Garland",
        "tipo": "Icon",
        "precio": "$8500",
        "img": "img/camisetas/Cleveland/garland.webp",
        "descripcion": "You already cheer the loudest at every Cleveland Cavaliers game. Take your fandom up a notch and show that you're the ultimate Darius Garland fan when you pick up this Swingman jersey from Nike. When you wear this authentic jersey while cheering on your team, you stand out as much more than just a fan. Let everyone know you're a true Cleveland Cavaliers fan with the heart of a champion."
    },
    {
        "id": 6,
        "categoria": "Camiseta",
        "equipo": "Cleveland Cavaliers",
        "jugador": "Evan Mobley",
        "tipo": "City",
        "precio": "$8500",
        "img": "img/camisetas/Cleveland/mobley.webp",
        "descripcion": ""
    },
    {
        "id": 7,
        "categoria": "Camiseta",
        "equipo": "Dallas Mavericks",
        "jugador": "Luka Dončić",
        "tipo": "Association",
        "precio": "$8500",
        "img": "img/camisetas/Dallas/doncic.webp",
        "descripcion": ""
    },
    {
        "id": 8,
        "categoria": "Camiseta",
        "equipo": "Indiana Pacers",
        "jugador": "Myles Turner",
        "tipo": "Icon",
        "precio": "$8500",
        "img": "img/camisetas/Indiana/turner.webp",
        "descripcion": ""
    },
    {
        "id": 9,
        "categoria": "Camiseta",
        "equipo": "LA Lakers",
        "jugador": "LeBron James",
        "tipo": "City Edition",
        "precio": "$8500",
        "img": "img/camisetas/Los Angeles (Lakers)/lebron.webp",
        "descripcion": ""
    },
    {
        "id": 10,
        "categoria": "Camiseta",
        "equipo": "Memphis Grizzlies",
        "jugador": "Ja Morant",
        "tipo": "Association",
        "precio": "$8500",
        "img": "img/camisetas/Memphis/morant.webp",
        "descripcion": ""
    },
    {
        "id": 11,
        "categoria": "Camiseta",
        "equipo": "Minnesota Timberwolves",
        "jugador": "Karl-Anthony Towns",
        "tipo": "Association",
        "precio": "$8500",
        "img": "img/camisetas/Minnesota/towns.webp",
        "descripcion": ""
    },
    {
        "id": 12,
        "categoria": "Camiseta",
        "equipo": "New Orleans Pelicans",
        "jugador": "Brandon Ingram",
        "tipo": "Association",
        "precio": "$8500",
        "img": "img/camisetas/New Orleans/ingram.webp",
        "descripcion": ""
    },
    {
        "id": 13,
        "categoria": "Camiseta",
        "equipo": "New York Knicks",
        "jugador": "RJ Barrett",
        "tipo": "Icon",
        "precio": "$8500",
        "img": "img/camisetas/New York/barrett.webp",
        "descripcion": ""
    },
    {
        "id": 14,
        "categoria": "Camiseta",
        "equipo": "Oklahoma City Thunder",
        "jugador": "Josh Giddey",
        "tipo": "Association",
        "precio": "$8500",
        "img": "img/camisetas/Oklahoma/giddey.webp",
        "descripcion": ""
    },
    {
        "id": 15,
        "categoria": "Camiseta",
        "equipo": "Phoenix Suns",
        "jugador": "Devin Booker",
        "tipo": "Icon",
        "precio": "$8500",
        "img": "img/camisetas/Phoenix/booker.webp",
        "descripcion": ""
    },
    {
        "id": 16,
        "categoria": "Camiseta",
        "equipo": "Phoenix Suns",
        "jugador": "Shawn Marion",
        "tipo": "Throwback",
        "precio": "$8500",
        "img": "img/camisetas/Phoenix/marion.webp",
        "descripcion": ""
    },
    {
        "id": 17,
        "categoria": "Camiseta",
        "equipo": "Portland Trail Blazers",
        "jugador": "Clyde Drexler",
        "tipo": "Throwback",
        "precio": "$8500",
        "img": "img/camisetas/Portland/drexler.webp",
        "descripcion": ""
    },
    {
        "id": 18,
        "categoria": "Camiseta",
        "equipo": "Portland Trail Blazers",
        "jugador": "Damian Lillard",
        "tipo": "Icon",
        "precio": "$8500",
        "img": "img/camisetas/Portland/lillard.webp",
        "descripcion": ""
    }
];

export const obtainProducts = () => {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    })
}

export const obtainDetail = () => {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === 5));
        }, 1000);
    })
}