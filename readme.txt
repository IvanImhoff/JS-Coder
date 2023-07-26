Hola, me atrevo a realizar este readme y pushearlo al repositorio porque aun estoy dentro del plazo de entrega. 
Haciendo click en la opción "Registrarse" del navbar del HTML productos, se puede simular un registro con los datos del cliente. Los mismos se guardan en storage y se actualiza el DOM con un evento en el botón registrarse, dentro del modal de registro.
El catálogo de productos se cargan mediante la simulación de una peticion asincronica, del archivo productos.json. Cada menú o submenú del accordion del offcanvas, tiene un evento que filtra el catálogo de productos. 
En el buscador se utiliza un filtrado por cada input del usuario. La busqueda se realiza tanto en el título del producto, como en cada uno de los parámetros del objeto. Por ejemplo si buscan la palabra "norton", dará como resultado discos y lijas que poseen la misma marca.
Los productos se pueden ir agregando al carro de compras y eliminar, como así también indicar la cantidad deseada. Cada evento tiene un alert realizado con SweetAlert, para informar al usuario.
Para terminar, se puede confirmar la compra desde el carrito o vaciarlo.
Agradezo cualquier crítica constructiva.

Saludos!