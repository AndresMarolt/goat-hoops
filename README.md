# _GOAT HOOPS_

A continuación se explica el funcionamiento de cada componente del proyecto Goat Hoops.
Cabe aclarar que en la carpeta de cada componente se incluye su respectivo archivo CSS creado con SCSS.
Todos los productos se encuentran almacenados en una base de datos de Firestore y contienen los siguientes campos:

- categoriaId (string)
- tipoId (string)
- descripcion (string)
- nombre (string)
- jugador (string)
- equipo (string)
- img (string)
- precio (número)
- stock (número)


## NAVBAR

El componente NavBar contiene el código correspondiente al encabezado del sitio. No solo contiene a la barra de navegación como tal sino también al logo de la marca y al CartWidget. Dentro de este componente podemos encontrar los enlaces de navegación que a través del ruteo realizado en App.js permiten el redireccionamiento a las distintas partes del sitio. También dentro de NavBar se implementa el componente DropdownMenu.


## DROPDOWNMENU

DropdownMenu es un componente que como su nombre lo indica contiene el dropdown menu de Productos, el cual al desplegarse imprime en pantalla en forma de link todas las categorías de productos y, en el caso de las camisetas, sus tipos. Estas categorías y tipos se encuentran especificadas en una colección de firestore a la cual accede este componente para leerla.


## CARTWIDGET

CartWidget nos muestra un ícono de carrito y la cantidad de productos que hay en el mismo. Este número lo obtiene por llamar a la función getQuantity, perteneciente al CartContext. Esto se explica más detalladamente más adelante en el apartado CartContext


## ITEMLISTCONTAINER

Este componente se encarga de leer los parámetros de la URL para obtener de ellos la categoría y tipo de productos que deben mostrarse en pantalla. Esto se hace a través del hook **useParams**. Al generarse un cambio en la cateogría o el tipo de productos detectados de la URL, se seteará el loading a "true" para que la animación de carga se ejecute, y se irá a buscar los productos coincidentes a la base de datos de Firestore. Para ello, llama a la funcion **getProducts**, cuyo código se encuentra en services/firebase/firestore.js, enviándole la categoría y el tipo, y recibiendo una promesa. Si la promesa retornó un resolve, se seteará a "products" con lo devuelto por la promesa. Finalmente, se setea el loading a false para que la animación desaparezca. 
 ItemListContainer va a imprimir un encabezado diferente según la categoría y tipo de productos que detecte en la URL, y para mostrar los productos correspondientes le enviará al componente ItemList el conjunto de productos que deberán aparecer finalmente en pantalla.


 ## ITEMLIST

 ItemList recibe de ItemListContainer el conjunto de productos que deberán mostrarse en pantalla en un momento dado. Por cada uno de los productos que se deban mostrar, ItemList va a generar un llamado al componente Item, enviándole a este con cada llamado los datos del producto en cuestión, además de asignarle una key única a cada uno.


 ## ITEM

El componente Item renderiza el producto en sí mismo, con su nombre, imagen y precio. También renderiza un botón que contiene la leyenda "Ver Más", el cual al clickearse redirige a la ruta "item/${id}" siendo ${id} el id del item en cuestión. En esa ruta se podrá ver el detalle del producto.


## ITEMDETAILCONTAINER

Al clickear en Ver Más entra en juego el ItemDetailContainer. Este componente se encarga principalmente de obtener el id del producto cuyo detalle deberá mostrar, y lo hace leyéndolo de la url a través del hook **useParams**. Una vez obtenido este ID, buscará en la base de datos de Firestore en su colección "products" aquel producto cuyo ID coincida con el de la URL, y se lo enviará al componente ItemDetail a través de las props. En caso de no encontrarse ningún resultado, en lugar de mostrarse un producto en pantalla se leerá la leyenda "El producto no existe". No obstante el resultado de la búsqueda, al finalizarse la misma se setea el loading a false, quitando la animación para dar paso al detalle del producto o a la leyenda recién mencionada.


## ITEMDETAIL

ItemDetail recibe de ItemDetailContainer la información del producto que se deberá ver en pantalla. Renderizará el nombre, la imagen y la descripción, a la vez que implementa el componente ItemCount junto a aquello. A este componente ItemCount se le mandan por props el stock del producto, la cantidad inicial que tendrá el contador y una función "onAddFunction()" que recibe un número como parámetro y añade esa cantidad de un determinado producto al carrito. Al hacerse esto se muestra una notificación indicando que se agregó correctamente al carrito


## ITEMCOUNT

ItemCount sirve para determinar cuantas unidades del producto en cuestión el usuario va a agregar al carrito. Renderiza un contador, con sus respectivos botones de restar y sumar. También muestra la cantidad que hay en stock del producto en cuestión. Los botones de sumar y restar solo actúan dentro de los límites de existencia de stock, o sea que no permiten sumar más de lo que hay disponible. Al clickear "Agregar al carrito" se ejecutará la función que ItemDetail le envía por props a ItemCount, con lo cual ItemCount le envía a su padre el número que figura en el contador en ese momento. ItemDetail recibe ese número y agrega esa cantidad de ese producto al carrito.


## CART

Cart va a montar el componente CartItem, el cual va a mostrar todos los items que hayamos incluido en el carrito, así como también nos ofrece la posibilidad de vaciar completamente el carrito y nos muestra también el monto total de lo que figura en él en un momento dado. Al clickear en el ícono que se ve en pantalla se cambia la vista al BuyerForm, el formulario que debe llenar el usuario para finalizar su compra.
 Si el carrito contiene items, los mostrará, caso contrario mostrará únicamente una leyenda que indica que el carrito está vacío 
 En este componente se encuentra toda la lógica detrás de la generación de la orden de compra. Se crea un objeto con los datos del comprador, el total de la compra y la fecha y hora de la compra, y se procede a restar la cantidad comprada de los productos que compró el usuario. Hecho esto, se crea una colección "orders" en la base de datos de firestore, en la cual se almacenará la orden de compra con todos los datos mencionados anteriormente como un nuevo documento. Si esta colección ya existía simplemente se añadirá a ella el nuevo documento de orden de compra.


## CARTITEM

Recibe desde Cart tantos llamados como productos distintos haya en el carrito. Recibe los datos de cada producto y los muestra en pantalla. Además permite la opción de quitar o agregar unidades de cada producto que haya en el carrito.


## BUYERFORM

Muestra el formulario que hay que llenar para concretar la compra. Hay campos obligatorios y otros opcionales. En caso que los obligatorios no sean llenados no se podrá proceder con la compra. Para volver a la vista del Cart se debe clickear el ícono superior.



## CARTCONTEXT

A través de createContext, CartContext posibilita que desde cualquier componente se puedan agregar productos al carrito, averiguar cuantos hay en el mismo, obtener el monto total de los productos que haya en él, eliminar un producto del carrito, vaciar el carrito, y saber si un item ya fue agregado a él o no.


## LOADINGANIMATION

LoadingAnimation renderiza la animación que se mostrará mientras se ejecuten los procesosde lectura de datos de la base de datos, hasta la finalización de estos procesos.


# NOTIFICATION

Notification es un componente que es montado en diferentes etapas del proceso de compra, y sirve como su nombre lo indica para mostrar en pantalla una notificación. Esta puede ser de error (color rojo) o de éxito (color verde) y mostrará un texto. El tipo de notificación y el texto de la misma es recibido por props. La notificación se renderiza bajo una etiqueta <p></p> la cual contendrá una clase condicional según si es de éxito o de error, y es ella la que le da el color de fondo distintivo de cada una.


## FOOTER

Renderiza el footer del sitio con una breve leyenda.


## CONTACT

Muestra el formulario de contacto. A través de estados detecta si hay campos sin llenar para que en caso de clickear Enviar, aparezca una notificación de error (color rojo) que indique que el usuario debe llenar todos los campos primero. Si todos los campos fueron llenados al enviar el formulario, se enviará a través de EmailJS un email a la casilla andresmmarolt@gmail.com con los datos y el mensaje ingresados por el usuario en el formulario. Si se envía correctamente mostrará una notificación de éxito que se lo hará saber al usuario.


## BANNERCAROUSEL

Renderiza un carousel hecho con Bootstrap 5



##  ABOUTUS

Este componente muestra en pantalla información acerca de la marca y su historia con su respectivo logo.