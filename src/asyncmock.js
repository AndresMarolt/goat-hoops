const products = [
    /* {
        "id": "1",
        "categoriaId": "camisetas",
        "tipoId": "icon",
        "equipo": "Atlanta Hawks",
        "jugador": "Trae Young",
        "precio": 8500,
        "stock": 7,
        "img": "/img/Atlanta/camisetas/young.webp",
        "nombre": "Camiseta Atlanta Hawks - Trae Young (Icon)",
        "descripcion": "Elige una imagen diferente, pero no menos auténtica. Esta camiseta tiene un diseño y una calidad de fabricación excepcionales para ofrecer lo último en ropa de baloncesto."
    },
    {
        "id": "4",
        "categoriaIdId": "camisetas",
        "tipoId": "icon",
        "equipo": "Cleveland Cavaliers",
        "jugador": "Darius Garland",
        "precio": 8500,
        "stock": 7,
        "img": "/img/Cleveland/camisetas/garland.webp",
        "nombre": "Camiseta Cleveland Cavaliers - Darius Garland (Icon)",
        "descripcion": "Elige una imagen diferente, pero no menos auténtica. Esta camiseta tiene un diseño y una calidad de fabricación excepcionales para ofrecer lo último en ropa de baloncesto."
    },
    {
        "id": "8",
        "categoriaId": "camisetas",
        "tipoId": "icon",
        "equipo": "Indiana Pacers",
        "jugador": "Myles Turner",
        "precio": 8500,
        "stock": 2,
        "img": "/img/Indiana/camisetas/turner.webp",
        "nombre": "Camiseta Indiana Pacers - Myles Turner (Icon)",
        "descripcion": "Obtén la calidad que mereces con esta camiseta Swingman. Brillante dentro y fuera de la cancha, ¡ningún aficionado a la NBA puede estar sin ella!"
    },
    {
        "id": "10",
        "categoriaId": "camisetas",
        "tipoId": "association",
        "equipo": "Memphis Grizzlies",
        "jugador": "Ja Morant",
        "precio": 8500,
        "stock": 8,
        "img": "/img/Memphis/camisetas/morant.webp",
        "nombre": "Camiseta Memphis Grizzlies - Ja Morant (Association)",
        "descripcion": "Consigue una emblemática prenda de la NBA de gran calidad. Con una confección de gran calidad y un diseño que es una réplica exacta tendrás una imagen igual que la real."
    },
    {
        "id": "11",
        "categoriaId": "camisetas",
        "tipoId": "association",
        "equipo": "Minnesota Timberwolves",
        "jugador": "Karl-Anthony Towns",
        "precio": 8500,
        "stock": 9,
        "img": "/img/Minnesota/camisetas/towns.webp",
        "nombre": "Camiseta Minnesota Timberwolves - Karl Anthony Towns (Association)",
        "descripcion": "Basado en la auténtica camiseta de la NBA que lleva Karl-Anthony Towns, asegúrate de estar listo para el día del partido con la camiseta Nike Association Swingman de los Minnesota Timberwolves. La camiseta Swingman tiene un ajuste centrado en el rendimiento con una tela de malla doble de primera calidad que proporciona una sensación fuerte pero muy transpirable."
    },
    {
        "id": "12",
        "categoriaId": "camisetas",
        "tipoId": "association",
        "equipo": "New Orleans Pelicans",
        "jugador": "Brandon Ingram",
        "precio": 8500,
        "stock": 3,
        "img": "/img/New Orleans/camisetas/ingram.webp",
        "nombre": "Camiseta New Orleans Pelicans - Brandon Ingram (Association)",
        "descripcion": "Basado en la auténtica camiseta de la NBA que lleva Brandon Ingram, asegúrate de estar listo para el día del partido con la camiseta Nike Association Swingman de los Minnesota Timberwolves. La camiseta Swingman tiene un ajuste centrado en el rendimiento con una tela de malla doble de primera calidad que proporciona una sensación fuerte pero muy transpirable. "
    },
    {
        "id": "13",
        "categoriaId": "camisetas",
        "tipoId": "icon",
        "equipo": "New York Knicks",
        "jugador": "RJ Barrett",
        "precio": 8500,
        "stock": 11,
        "img": "/img/New York/camisetas/barrett.webp",
        "nombre": "Camiseta New York Knicks - RJ Barrett (Icon)",
        "descripcion": "Basado en la auténtica camiseta de la NBA que lleva RJ Barrett, asegúrate de estar listo para el día del partido con la camiseta Nike Association Swingman de los Minnesota Timberwolves. La camiseta Swingman tiene un ajuste centrado en el rendimiento con una tela de malla doble de primera calidad que proporciona una sensación fuerte pero muy transpirable. "
    },
    {
        "id": "14",
        "categoriaId": "camisetas",
        "tipoId": "association",
        "equipo": "Oklahoma City Thunder",
        "jugador": "Josh Giddey",
        "precio": 8500,
        "stock": 7,
        "img": "/img/Oklahoma/camisetas/giddey.webp",
        "nombre": "Camiseta Oklahoma City Thunder - Josh Giddey (Association)",
        "descripcion": "Basado en la auténtica camiseta de la NBA que lleva Josh Giddey, asegúrate de estar listo para el día del partido con la camiseta Nike Association Swingman de los Minnesota Timberwolves. La camiseta Swingman tiene un ajuste centrado en el rendimiento con una tela de malla doble de primera calidad que proporciona una sensación fuerte pero muy transpirable. "
    },
    {
        "id": "15",
        "categoriaId": "camisetas",
        "tipoId": "icon",
        "equipo": "Phoenix Suns",
        "jugador": "Devin Booker",
        "precio": 8500,
        "stock": 7,
        "img": "/img/Phoenix/camisetas/booker.webp",
        "nombre": "Camiseta Phoenix Suns - Devin Booker (Icon)",
        "descripcion": "Basado en la auténtica camiseta de la NBA que lleva Devin Booker, asegúrate de estar listo para el día del partido con la camiseta Nike Association Swingman de los Minnesota Timberwolves. La camiseta Swingman tiene un ajuste centrado en el rendimiento con una tela de malla doble de primera calidad que proporciona una sensación fuerte pero muy transpirable. "
    },
    {
        "id": "17",
        "categoriaId": "camisetas",
        "tipoId": "hardwood-classics",
        "equipo": "Portland Trail Blazers",
        "jugador": "Clyde Drexler",
        "precio": 8500,
        "stock": 7,
        "img": "/img/Portland/camisetas/drexler.webp",
        "nombre": "Camiseta Portland Trail Blazers - Clyde Drexler (Hardwood Classics)",
        "descripcion": "Antes de que comience el próximo juego, rinda homenaje al pasado histórico de su equipo mientras reconoce a una de sus estrellas más brillantes de todos los tiempos con esta camiseta Portland Trail Blazers Clyde Drexler Hardwood Classics Swingman de Mitchell & Ness. Su diseño inspirado en el pasado y los gráficos específicos del jugador seguramente les recordarán a sus compañeros fanáticos todos sus momentos favoritos de los Portland Trail Blazers, tanto del pasado como del presente."
    },
    {
        "id": "18",
        "categoriaId": "camisetas",
        "tipoId": "icon",
        "equipo": "Portland Trail Blazers",
        "jugador": "Damian Lillard",
        "precio": 8500,
        "stock": 7,
        "img": "/img/Portland/camisetas/lillard.webp",
        "nombre": "Camiseta Portland Trail Blazers - Damian Lillard (Icon)",
        "descripcion": "Basado en la auténtica camiseta de la NBA que lleva Damian Lillard, asegúrate de estar listo para el día del partido con la camiseta Nike Association Swingman de los Minnesota Timberwolves. La camiseta Swingman tiene un ajuste centrado en el rendimiento con una tela de malla doble de primera calidad que proporciona una sensación fuerte pero muy transpirable. "
        
    },
    {
        "id": "21",
        "categoriaId": "shorts",
        "tipoId": "",
        "equipo": "Brooklyn Nets",
        "jugador": "",
        "precio": 8500,
        "stock": 7,
        "img": "/img/Brooklyn/shorts/short_nets1.webp",
        "nombre": "Nike Icon Replica Short - Brooklyn Nets",
        "descripcion": "Si buscas un estilo del equipo ligeramente diferente esta es la elección perfecta. ¡Apoya a tu equipo destacando entre la multitud!"
    },
    {
        "id": "23",
        "categoriaId": "remeras",
        "tipoId": "",
        "equipo": "Miami Heat",
        "jugador": "",
        "precio": 8500,
        "stock": 7,
        "img": "/img/Miami/remeras/remera_heatlogogris.webp",
        "nombre": "Remera Miami Heat Branded",
        "descripcion": "Una prenda clásica que se reinventa con un estilo del baloncesto. Perfecto para un estilo informal si aún deseas mostrar cuál es tu equipo favorito."
    },
    {
        "id": "24",
        "categoriaId": "remeras",
        "tipoId": "",
        "equipo": "Boston Celtics",
        "jugador": "",
        "precio": 8500,
        "stock": 7,
        "img": "/img/Boston/remeras/remera_celticslogoverde.webp",
        "nombre": "Remera Boston Celtics Branded",
        "descripcion": "Demuestra siempre tu apoyo de la mejor forma. Sola o acompañada de una chaqueta, en casa o en la calle, esta camiseta te concederá un estilo de baloncesto real en cualquier momento y lugar."
    },
    {
        "id": "26",
        "categoriaId": "buzos",
        "tipoId": "",
        "equipo": "New York Knicks",
        "jugador": "",
        "precio": 8500,
        "stock": 7,
        "img": "/img/New York/buzos/knicks_hoodie1.webp",
        "nombre": "New York Knicks Fanatics Branded Word Arch Graphic - Buzo con capucha",
        "descripcion": "Una prenda que irá allá donde vayas y es increíblemente versátil. Cálida y confortable, pero también práctica y con el diseño clásico del equipo, lucirás y te sentirás fantástico dondequiera que vayas."
    },
    {
        "id": "27",
        "categoriaId": "buzos",
        "tipoId": "",
        "equipo": "Utah Jazz",
        "jugador": "",
        "precio": 8500,
        "stock": 7,
        "img": "/img/Utah/buzos/jazz_hoodie1.webp",
        "nombre": "Utah Jazz Fanatics Branded Iconic Hometown Graphic - Buzo con capucha",
        "descripcion": "Una prenda que irá allá donde vayas y es increíblemente versátil. Cálida y confortable, pero también práctica y con el diseño clásico del equipo, lucirás y te sentirás fantástico dondequiera que vayas."
    } */
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