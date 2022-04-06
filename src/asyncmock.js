const products = [
    {
        "id": 1,
        "categoria": "Camiseta",
        "equipo": "Atlanta Hawks",
        "jugador": "Trae Young",
        "tipo": "Icon",
        "precio": "$8500",
        "img": "img/camisetas/Atlanta/young.webp"
    },
    {
        "id": 2,
        "categoria": "Camiseta",
        "equipo": "Boston Celtics",
        "jugador": "Jaylen Brown",
        "tipo": "Icon",
        "precio": "$8500",
        "img": "img/camisetas/Boston/brown.webp"
    },
    {
        "id": 3,
        "categoria": "Camiseta",
        "equipo": "Chicago Bulls",
        "jugador": "Zach LaVine",
        "tipo": "Icon",
        "precio": "$8500",
        "img": "img/camisetas/Chicago/lavine.jpg"
    },
    {
        "id": 4,
        "categoria": "Camiseta",
        "equipo": "Cleveland Cavaliers",
        "jugador": "Darius Garland",
        "tipo": "Association",
        "precio": "$8500",
        "img": "img/camisetas/Cleveland/garland1.webp"
    },
    {
        "id": 5,
        "categoria": "Camiseta",
        "equipo": "Cleveland Cavaliers",
        "jugador": "Darius Garland",
        "tipo": "Icon",
        "precio": "$8500",
        "img": "img/camisetas/Cleveland/garland.webp"
    },
    {
        "id": 6,
        "categoria": "Camiseta",
        "equipo": "Cleveland Cavaliers",
        "jugador": "Evan Mobley",
        "tipo": "City",
        "precio": "$8500",
        "img": "img/camisetas/Cleveland/mobley.webp"
    },
    {
        "id": 7,
        "categoria": "Camiseta",
        "equipo": "Dallas Mavericks",
        "jugador": "Luka Dončić",
        "tipo": "Association",
        "precio": "$8500",
        "img": "img/camisetas/Dallas/doncic.webp"
    },
    {
        "id": 8,
        "categoria": "Camiseta",
        "equipo": "Indiana Pacers",
        "jugador": "Myles Turner",
        "tipo": "Icon",
        "precio": "$8500",
        "img": "img/camisetas/Indiana/turner.webp"
    },
    {
        "id": 9,
        "categoria": "Camiseta",
        "equipo": "LA Lakers",
        "jugador": "LeBron James",
        "tipo": "City Edition",
        "precio": "$8500",
        "img": "img/camisetas/Los Angeles (Lakers)/lebron.webp"
    },
    {
        "id": 10,
        "categoria": "Camiseta",
        "equipo": "Memphis Grizzlies",
        "jugador": "Ja Morant",
        "tipo": "Association",
        "precio": "$8500",
        "img": "img/camisetas/Memphis/morant.webp"
    },
    {
        "id": 11,
        "categoria": "Camiseta",
        "equipo": "Minnesota Timberwolves",
        "jugador": "Karl-Anthony Towns",
        "tipo": "Association",
        "precio": "$8500",
        "img": "img/camisetas/Minnesota/towns.webp"
    },
    {
        "id": 12,
        "categoria": "Camiseta",
        "equipo": "New Orleans Pelicans",
        "jugador": "Brandon Ingram",
        "tipo": "Association",
        "precio": "$8500",
        "img": "img/camisetas/New Orleans/ingram.webp"
    },
    {
        "id": 13,
        "categoria": "Camiseta",
        "equipo": "New York Knicks",
        "jugador": "RJ Barrett",
        "tipo": "Icon",
        "precio": "$8500",
        "img": "img/camisetas/New York/barrett.webp"
    },
    {
        "id": 14,
        "categoria": "Camiseta",
        "equipo": "Oklahoma City Thunder",
        "jugador": "Josh Giddey",
        "tipo": "Association",
        "precio": "$8500",
        "img": "img/camisetas/Oklahoma/giddey.webp"
    },
    {
        "id": 15,
        "categoria": "Camiseta",
        "equipo": "Phoenix Suns",
        "jugador": "Devin Booker",
        "tipo": "Icon",
        "precio": "$8500",
        "img": "img/camisetas/Phoenix/booker.webp"
    },
    {
        "id": 16,
        "categoria": "Camiseta",
        "equipo": "Phoenix Suns",
        "jugador": "Shawn Marion",
        "tipo": "Throwback",
        "precio": "$8500",
        "img": "img/camisetas/Phoenix/marion.webp"
    },
    {
        "id": 17,
        "categoria": "Camiseta",
        "equipo": "Portland Trail Blazers",
        "jugador": "Clyde Drexler",
        "tipo": "Throwback",
        "precio": "$8500",
        "img": "img/camisetas/Portland/drexler.webp"
    },
    {
        "id": 18,
        "categoria": "Camiseta",
        "equipo": "Portland Trail Blazers",
        "jugador": "Damian Lillard",
        "tipo": "Icon",
        "precio": "$8500",
        "img": "img/camisetas/Portland/lillard.webp"
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
            resolve(products.filter((prod) => prod.id < 5));
        }, 2000);
    })
}