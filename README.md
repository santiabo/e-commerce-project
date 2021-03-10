<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>
# Henry

## Objetivos del Proyecto

- Construir una App JavaScript desde cero.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.
- Utilizar Metodologías Ágiles.
- Trabajar en equipo.
- Usar y practicar testing.

## Screenshots
<p align='left'>
    <img src='https://camo.githubusercontent.com/b1c841e3ad29f12b57b9a0c9db4b8a6eadc4df6bf9edcb66739363fa62b9a2d7/687474703a2f2f7265732e636c6f7564696e6172792e636f6d2f676f6e7a616c6f616775696c61726d2f696d6167652f75706c6f61642f76313631323139353736392f486f6d655f616c637268732e6a7067' </img>
</p>
<p align='left'>
    <img src='https://camo.githubusercontent.com/d2d1a143beb752aad454a314b813dc315f8630fa259a867834351d3cbf3c7aa6/687474703a2f2f7265732e636c6f7564696e6172792e636f6d2f676f6e7a616c6f616775696c61726d2f696d6167652f75706c6f61642f76313631323139353933322f50726f64756374735f6672396f36622e6a7067' </img>
</p>
<p align='left'>
    <img src='https://camo.githubusercontent.com/d3cfaea1e82d2eba7ed00602c1e49cee0b70587d1bcff0d2369911e8bdc89d0c/687474703a2f2f7265732e636c6f7564696e6172792e636f6d2f676f6e7a616c6f616775696c61726d2f696d6167652f75706c6f61642f76313631323139363034312f4361727269746f5f7173786f6a692e6a7067' </img>
</p>
<p align='left'>
    <img src='https://camo.githubusercontent.com/b6cf7a10eae0d68508a6489711be88f56eab2fcf2b6d24958f8e72b1f7ae86f0/687474703a2f2f7265732e636c6f7564696e6172792e636f6d2f676f6e7a616c6f616775696c61726d2f696d6167652f75706c6f61642f76313631323139363131372f50726f647563744c6973745f7762326c676c2e6a7067' </img>
</p>
<p align='left'>
    <img src='https://camo.githubusercontent.com/b311216170758e15bfba0a07cbf7d57be033abf0a7411dc1a1849eb66719332d/687474703a2f2f7265732e636c6f7564696e6172792e636f6d2f676f6e7a616c6f616775696c61726d2f696d6167652f75706c6f61642f76313631323139363236322f4163636f756e7453657474696e67735f666b6b6e36312e6a7067' </img>
</p>

## Trabajo en Equipo

En este proyecto, se trabajo junto a un equipo de 6 estudiantes. Utilizando GIT para gestionar el código y Trello para gestionar el proyecto y facilitar la colaboración. Se utilizo el siguiente workflow para una tarea dada:

- Crear una Card de Trello para una tarea.
- Asignar un equipo de dos para trabajar en la tarea.
- Hacer un `branch` por cada card de trello (incluir el nombre o ID de la card en el nombre de la branch).
- Codear en equipo hasta completar la tarea (con tests).
- Pullear de master a nuestra branch (para mergear código nuevo de master).
- Pushear nuestra Branch a git y hacer un `PR` indicando la Card que cierra.
- Mover la Card de trello a `Review`.
- Asignar a otro equipo de dos para que revise el `PR`.
- Iterar hasta que no haya más comentarios:
    + Si hay un comentario, el equipo original debe codear de nuevo la solución y volver a subir el código a github.
    + Si no hay comentarios, se aprueba el `PR` y se mergea a master
- Mergear el `PR` a master.
- Volver al punto 1 hasta terminar el proyecto.

## Horarios y Fechas

El proyecto tubo una duracion de cuatro semanas. El lunes siguiente al terminar el sprint se realizaba una demo donde se muestra al TL el progreso de esa semana. La última semana tiene el demo final donde se mostró el proyecto terminado.

##BoilerPlate
El boilerplate cuenta con dos carpetas: api y client. En estas carpetas estará el código del back-end y el front-end respectivamente. En api se creo un archivo llamado: .env con credenciales propias para conectarse a la base de datos creada en postgres El contenido de client fue creado usando: Create React App.

##Funcionalidades
La aplicación del e-commerce cuenta con las siguientes funcionalidades

### Usuarios no Autenticados

Un Visitante anónimo puede navegar el e-commerce, ver y buscar productos.

- PRODUCTOS:
    + ...puede ver la lista completa de productos (catálogo), para ver todo lo disponible para comprar.
    + ...puede filtrar el listado por categorías, para poder ver los items en los que estoy interesado.
    + ...buscas productos, para poder encontrar rápido los productos que quiero comprar.
    + ...ver los detalles de un producto individual (incluida las fotos, descripciones, reviews, etc...), asi puede determinar si quiero ese producto o no.

- CARRITO:
    + ...puede agregar items a mi carrito de compras desde el listado o desde a página de detalles de un producto, para poder comprarlos despues.
    + ...sacar items de mi carrito, en caso que decida no quererlos.
    + ...editar cantidades de los items de mi carrito, en caso que quiera mas o menos cantidad de un item en particular.
    + ...refrescar la página, o irme y volver, y todavía tener mi carrito de compras (sin haberme creado una cuenta). (Podés usar sessionStorage, localStorage, cookies, o JWT).
    + ...puede crearme una cuenta, loguearme y seguir editando ese mismo carrito, asi no pierdo los items seleccionados.
- CHECKOUT:
    + ...puede comprar todos los items de un mi carrito.
    + ...especificar una dirección de envio y un email cuando hago el checkout, asi me envien la compra a lugar que dije.
    + ...recibir un email de confirmación que hice la compra.
    + ...recibir un email de notificación cuando la orden fue despachada.

### Usuarios Autenticados

Los usuarios que hayan creado su cuenta, podrán hacer todo lo que puede hacer un usuario guest y además:

- GESTION DE CUENTA:
    + ...poder desloguearme, asi nadie más pueda usar mi sesión.
    + ...ver el historial de ordenes previas, asi puede reever las ordenes que hice en el pasado.
    + ...ver los detalles de una orden que hice en el pasado, incluyendo:
        * Los items comprados, con sus cantidades.
        * Links a la página del producto comprado.
        * Fecha y hora de la compra.
- REVIEWS:
    + ...poder dejar reviews a los productos, que incluyan texto y un sistema de cinco estrellas.

### Admin

Los usuarios administradores pueden manejar el sitio, los productos que se listan y los items que están disponibles.

- GESTION DE PRODUCTOS:
    + ...poder crear y editar productos, con nombre, descripción, precio y uno o más fotos, tal que los visitantes puedan ver la última información de lo que se vende.
    + ...poder crear categorías, para que los usuarios puedan filtrar los items.
    + ...poder agregar o sacar categorías de los items (los items deben poder aceptar múltiples categorías).
    + ...gestionar la disponibilidad de un item. (un item que no esta disponible, no deberá estar listado en la página, pero su detalle debe seguir siendo accesible desde el historial de compras o con su URL, pero debe mencionar que el item no está disponible).

- GESTION DE ORDENES:
    + ...poder ver una lista de todas las ordenes, para poder ver y revisar las ordener.
    + ...poder filtrar as ordenes por su estado (creada, procesando, cancelada, completa).
    + ver los detalles de una orden específica, asi puedo revisarla y actualizar su estado.
    + ...poder cambiar el estado de una orden (creada => procesando, procesando => cancelada || completa).

- GESTION DE USUARIOS:
    + ...poder hacer que un usuario se convierta en admin.
    + ...borrar a un usuario, asi no puedan logearse más.
    + ...forzar una password reset para un usuario.

### Validación de Datos

Al crear los modelos,se consideran los tipos de datos que se van a recibir, qué cosas van a ser requeridas y cómo se devuelven los errores a los usuarios. Algunas constrains implementadas:

- Productos:
    + Deben tener `titulo`, `descripcion`, `precio`, `cantidad`
    + Deben pertenecer a por lo menos una categoría.
    + Deben tener una foto, si no tienen una foto, deben tener un placeholder de foto por defecto.
- Usuarios:
    + Deben tener una dirección de mail válida.
    + Su email debe ser único.
- Ordenes:
    + Una orden debe pertenecer a un usuario o a un guest (autenticado vs no autenticado).
    + Las ordenes deben tener línea de orden que contiene el `precio`, `productId`, y `cantidad`.
    + Si un usuario completa una orden, esa orden debe mantener el precio del item al momento de la compra, sin importar que el precio del producto cambie después.
- Reviews:
    + Todas las reviews deben pertenecer a un producto.
    + Todas las reviews deben pertenecer a un usuario.
    + Todas las reviews deben tener por lo menos x caractéres.


