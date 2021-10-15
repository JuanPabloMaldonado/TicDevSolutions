{(products !== undefined && products.length > 0) ?
    products.map(item => {
        return (<tr>

            <th scope="row"> {item.id}</th>
            <th> {item.nombre}</th>
            <th> {item.precioAd}</th>
            <th> {item.precioV}</th>

        </tr>);
    }) :
    products !== undefined ?
        <div>
            Ningun producto coincide con la busqueda
        </div>
        :
        <div>
            Error en la conexión, intenta mas tarde
        </div>
}