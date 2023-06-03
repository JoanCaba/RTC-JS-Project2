# Proyecto 2 JavaScript-DOM

Tienda con diseño propio.

## Referencias
  - Colors: https://huemint.com/website-3/#palette=020d29-f5d239-e2a41b-cc7c40-d01c76-db1259
    - Gradient A:https://huemint.com/gradient-4/#palette=020d29-033643-0f696d-0095a0
    - Gradient B: https://huemint.com/gradient-4/#palette=020d29-6f7258-cb8711-cc7c40
  - PC Componentes caregory views(aprox): https://www.pccomponentes.com/portatiles
  - Excalidraw Mobile: https://excalidraw.com/#json=JeCyn12QgAMM1Mr-9BU0T,bkaFkPQ8FrhNlhu7uFk2eA
  - Poe Weapons: https://www.pathofexile.com/item-data/weapon
  - NPcs: https://pathofexile.fandom.com/wiki/Vendor
  - Unique Weapons: https://pathofexile.fandom.com/wiki/List_of_unique_weapons

## Ideas
  - Mobile first
  - PoE Npcs products. 5 products/npc, 1 unique and some shared.
  - Weapons object:
    ```
     {
    name: '',
    price: ,
    seller: '',
    level: ,
    dps: ,
    image: '',
    },
    ```
  - Use the npc location from another array of objects with a list of all npcs to show something in the product box?
  - filter by name.
  - add something when no product is found

## Criterios
### JavaScript
  - ✅ El HTML de la web se genera de forma dinámica mediante los tag templates que se habrá definido en JavaScript. Se permitirá tener de base dos secciones .filter y .products para introducir elementos dentro con JavaScript para el DOM.
  - ✅ Se recorrerá la lista de productos y se creará una carta de producto para cada elemento de forma dinámica por medio de for o de .forEach .
  - Se definirán al menos dos filtros para los productos en la parte izquierda del documento:
    - ✅ El primer filtro será un elemento select que muestra todos los vendedores ( seller ) distintos que hay en los productos del proyecto; y que al ser clickado, hará que el documento solamente muestro los elementos que tengan la propiedad seller con el mismo valor. Para esto, se definirán al menos 4 seller distintos en los productos del objeto products. 
    - El segundo filtro será un input de tipo number acompañado de un botón que contenga el texto “Buscar”. El usuario podrá introducir una cantidad de dinero en el filtro y pulsar buscar, esto hará que solo aparezcan en pantalla los elementos cuyo precio ( price ) sea menor que esta cantidad.
    - ✅ Habrá un botón “Limpiar Filtros” que al ser pulsado, volverá a pintar en pantalla todos los productos, sin aplicar filtro ninguno.
### HTML y CSS
  - El código HTML está correctamente estructurado. Hay dos elementos section o article principales que representan los filtros de búsqueda (a la izquierda en escritorio, arriba del contenido en móvil), y los elementos a vender en la tienda (a la derecha en escritorio, abajo de los filtros en móvil).
  - ✅ Los elementos a vender en la tienda comparten la misma clase de CSS, que define una carta de producto y tiene algún efecto :hover cuando pasa el ratón sobre ellas.
  - La web cuenta con media queries para escritorio y móvil. Así como una correcta estructura y posicionamiento de elementos por medio de flex o grid .
  - ✅ Los productos tienen imágenes correctas que se ven en la carta de componente de cada uno


## TODO
  - Header
  - Footer
  - CSS, styles colors etc