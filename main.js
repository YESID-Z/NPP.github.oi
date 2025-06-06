const productos=[
    {
        id:"celular-1",
        titulo:"NOTHING PHONE 3A PRO",
        imagen:"https://cdn-files.kimovil.com/default/0011/54/thumb_1053292_default_big.jpg",
        categoria:{
        nombre:"nothing",
        id:"mejores"
        },
        precio:"482"
    },

{
        id:"celular-2",
        titulo:"SAMSUNG GALAXY S25 ULTRA",
        imagen:"https://cdn-files.kimovil.com/default/0011/36/thumb_1035306_default_big.jpg",
        categoria:{
        nombre:"samsung",
        id:"mejores"
        },
        precio:"1225"
    },
    
    {
        id:"celular-3",
        titulo:"XIOAMI 15S PRO",
        imagen:"https://cdn-files.kimovil.com/default/0011/88/thumb_1087880_default_big.jpg",
        categoria:{
        nombre:"xioami",
        id:"populares"
        },
        precio:"956"
    },


    {
        id:"celular-4",
        titulo:"IPHONE 14 PRO MAX",
        imagen:"https://cdn-files.kimovil.com/default/0007/75/thumb_674938_default_big.jpg",
        categoria:{
        nombre:"apple",
        id:"economicos"
        },
        precio:"769"
    },
{
        id:"celular-5",
        titulo:"ONE PLUS 13",
        imagen:"https://cdn-files.kimovil.com/default/0010/98/thumb_997842_default_big.jpg",
        categoria:{
        nombre:"one plus",
        id:"mejores"
        },
        precio:"849"
    },
{
        id:"celular-6",
        titulo:"NUBIA REDMAGIC 10 PRO",
        imagen:"https://cdn-files.kimovil.com/default/0011/04/thumb_1003541_default_big.jpg",
        categoria:{
        nombre:"nubia",
        id:"populares"
        },
        precio:"836"
    },
{
        id:"celular-7",
        titulo:"HUAWEY NOVA 14",
        imagen:"https://cdn-files.kimovil.com/default/0011/88/thumb_1087560_default_big.jpg",
        categoria:{
        nombre:"huawei",
        id:"economicos"
        },
        precio:"526"
    },
{
        id:"celular-8",
        titulo:"GOOGLE PIXEL 8 PRO",
        imagen:"https://cdn-files.kimovil.com/default/0009/29/thumb_828684_default_big.jpg",
        categoria:{
        nombre:"google",
        id:"economicos"
        },
        precio:"552"
    },
{
        id:"celular-9",
        titulo:"OPPO FIND X8 PRO",
        imagen:"https://cdn-files.kimovil.com/default/0010/92/thumb_991843_default_big.jpg",
        categoria:{
        nombre:"oppo",
        id:"populares"
        },
        precio:"1020"
    },
{
        id:"celular-10",
        titulo:"TECNO CAMON 40",
        imagen:"https://cdn-files.kimovil.com/default/0011/77/thumb_1076827_default_big.jpg",
        categoria:{
        nombre:"tecno",
        id:"economicos"
        },
        precio:"259"
    },


    {
        id:"celular-11",
        titulo:"MOTOROLA MOTO X50 ULTRA",
        imagen:"https://cdn-files.kimovil.com/default/0010/14/thumb_913109_default_big.jpg",
        categoria:{
        nombre:"motorola",
        id:"mejores"
        },
        precio:"661"
    },

    {
        id:"celular-12",
        titulo:"VIVO X200S",
        imagen:"https://cdn-files.kimovil.com/default/0011/76/thumb_1075138_default_big.jpg",
        categoria:{
        nombre:"vivo",
        id:"populares"
        },
        precio:"608"
    }


];
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}
