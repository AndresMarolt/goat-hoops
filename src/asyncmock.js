const products = [
    /* {
        "id": "1",
        "categoriaId": "camisetas",
        "equipo": "Atlanta Hawks",
        "jugador": "Trae Young",
        "tipoId": "icon",
        "precio": "$8500",
        "img": "/img/Atlanta/camisetas/young.webp",
        "nombre": "Camiseta Atlanta Hawks - Trae Young (Icon)",
        "descripcion": "Elige una imagen diferente, pero no menos auténtica. Esta camiseta tiene un diseño y una calidad de fabricación excepcionales para ofrecer lo último en ropa de baloncesto."
    },
    {
        "id": "2",
        "categoriaId": "camisetas",
        "equipo": "Boston Celtics",
        "jugador": "Jaylen Brown",
        "tipoId": "icon",
        "precio": "$8500",
        "img": "/img/Boston/camisetas/brown.webp",
        "nombre": "Camiseta Boston Celtics - Jaylen Brown (Icon)",
        "descripcion": "Basado en la auténtica camiseta de la NBA que lleva Jaylen Brown, asegúrate de estar listo para el día del partido con la camiseta Nike Icon Swingman de los Boston Celtics. La camiseta Swingman tiene un ajuste centrado en el rendimiento con una tela de malla doble de primera calidad que proporciona una sensación fuerte pero muy transpirable."
    },
    {
        "id": "3",
        "categoriaId": "camisetas",
        "equipo": "Chicago Bulls",
        "jugador": "Zach LaVine",
        "tipoId": "icon",
        "precio": "$8500",
        "img": "/img/Chicago/camisetas/lavine.jpg",
        "nombre": "Camiseta Chicago Bulls - Zach LaVine (Icon)",
        "descripcion": "Basado en la auténtica camiseta de la NBA que lleva Zach Lavine, asegúrate de estar listo para el día del partido con la camiseta Nike Icon Swingman de los Chicago Bulls. La camiseta Swingman tiene un ajuste centrado en el rendimiento con una tela de malla doble de primera calidad que proporciona una sensación fuerte pero muy transpirable."
    }, */
    {
        "id": "4",
        "categoriaId": "camisetas",
        "equipo": "Cleveland Cavaliers",
        "jugador": "Darius Garland",
        "tipoId": "association",
        "precio": "$8500",
        "img": "/img/Cleveland/camisetas/garland1.webp",
        "nombre": "Camiseta Cleveland Cavaliers - Darius Garland (Association)",
        "descripcion": "Elige una imagen diferente, pero no menos auténtica. Esta camiseta tiene un diseño y una calidad de fabricación excepcionales para ofrecer lo último en ropa de baloncesto."
    },
    {
        "id": "5",
        "categoriaIdId": "camisetas",
        "equipo": "Cleveland Cavaliers",
        "jugador": "Darius Garland",
        "tipoId": "icon",
        "precio": "$8500",
        "img": "/img/Cleveland/camisetas/garland.webp",
        "nombre": "Camiseta Cleveland Cavaliers - Darius Garland (Icon)",
        "descripcion": "Elige una imagen diferente, pero no menos auténtica. Esta camiseta tiene un diseño y una calidad de fabricación excepcionales para ofrecer lo último en ropa de baloncesto."
    },
    {
        "id": "6",
        "categoriaId": "camisetas",
        "equipo": "Cleveland Cavaliers",
        "jugador": "Evan Mobley",
        "tipoId": "city-edition",
        "precio": "$8500",
        "img": "/img/Cleveland/camisetas/mobley.webp",
        "nombre": "Camiseta Cleveland Cavaliers - Evan Mobley (CIty Edition)",
        "descripcion": "Elige una imagen diferente, pero no menos auténtica. Esta camiseta tiene un diseño y una calidad de fabricación excepcionales para ofrecer lo último en ropa de baloncesto."

    },
    {
        "id": "7",
        "categoriaId": "camisetas",
        "equipo": "Dallas Mavericks",
        "jugador": "Luka Dončić",
        "tipoId": "association",
        "precio": "$8500",
        "nombre": "Camiseta Dallas Mavericks - Luka Dončić (Association)",
        "img": "/img/Dallas/camisetas/doncic.webp",
        "descripcion": "Adopta el estilo definitivo de la NBA gracias a esta camiseta. Una confección de gran calidad y unos materiales resistentes aportan auténtica clase a tu forma de vestir."
    },
    {
        "id": "8",
        "categoriaId": "camisetas",
        "equipo": "Indiana Pacers",
        "jugador": "Myles Turner",
        "tipoId": "icon",
        "precio": "$8500",
        "nombre": "Camiseta Indiana Pacers - Myles Turner (Icon)",
        "img": "/img/Indiana/camisetas/turner.webp",
        "descripcion": "Obtén la calidad que mereces con esta camiseta Swingman. Brillante dentro y fuera de la cancha, ¡ningún aficionado a la NBA puede estar sin ella!"
    },
    {
        "id": "9",
        "categoriaId": "camisetas",
        "equipo": "LA Lakers",
        "jugador": "LeBron James",
        "tipoId": "City Edition",
        "precio": "$8500",
        "nombre": "Camiseta Los Angeles - LeBron James (City Edition)",
        "img": "/img/Los Angeles (Lakers)/camisetas/lebron.webp",
        "descripcion": "Consigue una emblemática prenda de la NBA de gran calidad. Con una confección de gran calidad y un diseño que es una réplica exacta tendrás una imagen igual que la real."
    },
    {
        "id": "10",
        "categoriaId": "camisetas",
        "equipo": "Memphis Grizzlies",
        "jugador": "Ja Morant",
        "tipoId": "association",
        "precio": "$8500",
        "nombre": "Camiseta Memphis Grizzlies - Ja Morant (Association)",
        "img": "/img/Memphis/camisetas/morant.webp",
        "descripcion": "Consigue una emblemática prenda de la NBA de gran calidad. Con una confección de gran calidad y un diseño que es una réplica exacta tendrás una imagen igual que la real."
    },
    {
        "id": "11",
        "categoriaId": "camisetas",
        "equipo": "Minnesota Timberwolves",
        "jugador": "Karl-Anthony Towns",
        "tipoId": "association",
        "precio": "$8500",
        "nombre": "Camiseta Minnesota Timberwolves - Karl Anthony Towns (Association)",
        "img": "/img/Minnesota/camisetas/towns.webp",
        "descripcion": "Basado en la auténtica camiseta de la NBA que lleva Karl-Anthony Towns, asegúrate de estar listo para el día del partido con la camiseta Nike Association Swingman de los Minnesota Timberwolves. La camiseta Swingman tiene un ajuste centrado en el rendimiento con una tela de malla doble de primera calidad que proporciona una sensación fuerte pero muy transpirable."
    },
    {
        "id": "12",
        "categoriaId": "camisetas",
        "equipo": "New Orleans Pelicans",
        "jugador": "Brandon Ingram",
        "tipoId": "association",
        "precio": "$8500",
        "nombre": "Camiseta New Orleans Pelicans - Brandon Ingram (Association)",
        "img": "/img/New Orleans/camisetas/ingram.webp",
        "descripcion": "Basado en la auténtica camiseta de la NBA que lleva Brandon Ingram, asegúrate de estar listo para el día del partido con la camiseta Nike Association Swingman de los Minnesota Timberwolves. La camiseta Swingman tiene un ajuste centrado en el rendimiento con una tela de malla doble de primera calidad que proporciona una sensación fuerte pero muy transpirable. "
    },
    {
        "id": "13",
        "categoriaId": "camisetas",
        "equipo": "New York Knicks",
        "jugador": "RJ Barrett",
        "tipoId": "icon",
        "precio": "$8500",
        "nombre": "Camiseta New York Knicks - RJ Barrett (Icon)",
        "img": "/img/New York/camisetas/barrett.webp",
        "descripcion": "Basado en la auténtica camiseta de la NBA que lleva RJ Barrett, asegúrate de estar listo para el día del partido con la camiseta Nike Association Swingman de los Minnesota Timberwolves. La camiseta Swingman tiene un ajuste centrado en el rendimiento con una tela de malla doble de primera calidad que proporciona una sensación fuerte pero muy transpirable. "
    },
    {
        "id": "14",
        "categoriaId": "camisetas",
        "equipo": "Oklahoma City Thunder",
        "jugador": "Josh Giddey",
        "tipoId": "association",
        "precio": "$8500",
        "nombre": "Camiseta Oklahoma City Thunder - Josh Giddey (Association)",
        "img": "/img/Oklahoma/camisetas/giddey.webp",
        "descripcion": "Basado en la auténtica camiseta de la NBA que lleva Josh Giddey, asegúrate de estar listo para el día del partido con la camiseta Nike Association Swingman de los Minnesota Timberwolves. La camiseta Swingman tiene un ajuste centrado en el rendimiento con una tela de malla doble de primera calidad que proporciona una sensación fuerte pero muy transpirable. "
    },
    {
        "id": "15",
        "categoriaId": "camisetas",
        "equipo": "Phoenix Suns",
        "jugador": "Devin Booker",
        "tipoId": "icon",
        "precio": "$8500",
        "nombre": "Camiseta Phoenix Suns - Devin Booker (Icon)",
        "img": "/img/Phoenix/camisetas/booker.webp",
        "descripcion": "Basado en la auténtica camiseta de la NBA que lleva Devin Booker, asegúrate de estar listo para el día del partido con la camiseta Nike Association Swingman de los Minnesota Timberwolves. La camiseta Swingman tiene un ajuste centrado en el rendimiento con una tela de malla doble de primera calidad que proporciona una sensación fuerte pero muy transpirable. "
    },
    {
        "id": "16",
        "categoriaId": "camisetas",
        "equipo": "Phoenix Suns",
        "jugador": "Shawn Marion",
        "tipoId": "hardwood-classics",
        "precio": "$8500",
        "nombre": "Camiseta Phoenix Suns - Shawn Marion (Hardwood Classics)",
        "img": "/img/Phoenix/camisetas/marion.webp",
        "descripcion": "Honra a la leyenda de los Phoenix Suns con esta camiseta Shawn Marion Hardwood Classics de Mitchell & Ness"
    },
    {
        "id": "17",
        "categoriaId": "camisetas",
        "equipo": "Portland Trail Blazers",
        "jugador": "Clyde Drexler",
        "tipoId": "hardwood-classics",
        "precio": "$8500",
        "nombre": "Camiseta Portland Trail Blazers - Clyde Drexler (Hardwood Classics)",
        "img": "/img/Portland/camisetas/drexler.webp",
        "descripcion": "Antes de que comience el próximo juego, rinda homenaje al pasado histórico de su equipo mientras reconoce a una de sus estrellas más brillantes de todos los tiempos con esta camiseta Portland Trail Blazers Clyde Drexler Hardwood Classics Swingman de Mitchell & Ness. Su diseño inspirado en el pasado y los gráficos específicos del jugador seguramente les recordarán a sus compañeros fanáticos todos sus momentos favoritos de los Portland Trail Blazers, tanto del pasado como del presente."
    },
    {
        "id": "18",
        "categoriaId": "camisetas",
        "equipo": "Portland Trail Blazers",
        "jugador": "Damian Lillard",
        "tipoId": "icon",
        "precio": "$8500",
        "nombre": "Camiseta Portland Trail Blazers - Damian Lillard (Icon)",
        "img": "/img/Portland/camisetas/lillard.webp",
        "descripcion": "Basado en la auténtica camiseta de la NBA que lleva Damian Lillard, asegúrate de estar listo para el día del partido con la camiseta Nike Association Swingman de los Minnesota Timberwolves. La camiseta Swingman tiene un ajuste centrado en el rendimiento con una tela de malla doble de primera calidad que proporciona una sensación fuerte pero muy transpirable. "
        
    },
    {
        "id": "19",
        "categoriaId": "shorts",
        "equipo": "Chicago Bulls",
        "jugador": "",
        "tipoId": "",
        "precio": "$8500",
        "nombre": "Nike Courtside Fleece Short - Chicago Bulls",
        "img": "/img/Chicago/shorts/short_bulls1.jpg",
        "descripcion": "Lleva el estilo de la NBA fuera de la cancha. Cómodos y resistentes te concederán un estilo auténtico en el tiempo caluroso."
    },
    {
        "id": "20",
        "categoriaId": "shorts",
        "equipo": "Orlando Magic",
        "jugador": "",
        "tipoId": "",
        "precio": "$8500",
        "nombre": "Mitchell & Ness Hyper Hoops Short - Orlando Magic",
        "img": "/img/Orlando/shorts/short_magic1.webp",
        "descripcion": "Prepárate para el calor con estos bonitos pantalones cortos. Ideales para escapadas veraniegas sin abandonar tu deporte favorito."
    },
    {
        "id": "21",
        "categoriaId": "shorts",
        "equipo": "Brooklyn Nets",
        "jugador": "",
        "tipoId": "",
        "precio": "$8500",
        "nombre": "Nike Icon Replica Short - Brooklyn Nets",
        "img": "/img/Brooklyn/shorts/short_nets1.webp",
        "descripcion": "Si buscas un estilo del equipo ligeramente diferente esta es la elección perfecta. ¡Apoya a tu equipo destacando entre la multitud!"
    },
    {
        "id": "22",
        "categoriaId": "remeras",
        "equipo": "NBA",
        "jugador": "",
        "tipoId": "",
        "precio": "$8500",
        "nombre": "NBA Nike Team 31 75th Anniversary",
        "img": "/img/_NBA/remeras/remera_nba1.webp",
        "descripcion": "Demuestra siempre tu apoyo de la mejor forma. Sola o acompañada de una chaqueta, en casa o en la calle, esta camiseta te concederá un estilo de baloncesto real en cualquier momento y lugar."
    },
    {
        "id": "23",
        "categoriaId": "remeras",
        "equipo": "Miami Heat",
        "jugador": "",
        "tipoId": "",
        "precio": "$8500",
        "nombre": "Remera Miami Heat Branded",
        "img": "/img/Miami/remeras/remera_heatlogogris.webp",
        "descripcion": "Una prenda clásica que se reinventa con un estilo del baloncesto. Perfecto para un estilo informal si aún deseas mostrar cuál es tu equipo favorito."
    },
    {
        "id": "24",
        "categoriaId": "remeras",
        "equipo": "Boston Celtics",
        "jugador": "",
        "tipoId": "",
        "precio": "$8500",
        "nombre": "Remera Boston Celtics Branded",
        "img": "/img/Boston/remeras/remera_celticslogoverde.webp",
        "descripcion": "Demuestra siempre tu apoyo de la mejor forma. Sola o acompañada de una chaqueta, en casa o en la calle, esta camiseta te concederá un estilo de baloncesto real en cualquier momento y lugar."
    },
    {
        "id": "25",
        "categoriaId": "buzos",
        "equipo": "Washington Wizards",
        "jugador": "",
        "tipoId": "",
        "precio": "$8500",
        "nombre": "Washington Wizards Fanatics Branded Splatter Graphic - Buzo con capucha",
        "img": "/img/Washington/buzos/wizards_hoodie1.webp",
        "descripcion": "Una prenda que irá allá donde vayas y es increíblemente versátil. Cálida y confortable, pero también práctica y con el diseño clásico del equipo, lucirás y te sentirás fantástico dondequiera que vayas."
    },
    {
        "id": "26",
        "categoriaId": "buzos",
        "equipo": "New York Knicks",
        "jugador": "",
        "tipoId": "",
        "precio": "$8500",
        "nombre": "New York Knicks Fanatics Branded Word Arch Graphic - Buzo con capucha",
        "img": "/img/New York/buzos/knicks_hoodie1.webp",
        "descripcion": "Una prenda que irá allá donde vayas y es increíblemente versátil. Cálida y confortable, pero también práctica y con el diseño clásico del equipo, lucirás y te sentirás fantástico dondequiera que vayas."
    },
    {
        "id": "27",
        "categoriaId": "buzos",
        "equipo": "Utah Jazz",
        "jugador": "",
        "tipoId": "",
        "precio": "$8500",
        "nombre": "Utah Jazz Fanatics Branded Iconic Hometown Graphic - Buzo con capucha",
        "img": "/img/Utah/buzos/jazz_hoodie1.webp",
        "descripcion": "Una prenda que irá allá donde vayas y es increíblemente versátil. Cálida y confortable, pero también práctica y con el diseño clásico del equipo, lucirás y te sentirás fantástico dondequiera que vayas."
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