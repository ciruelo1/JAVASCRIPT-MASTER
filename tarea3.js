//// Funcion 1
const orden1 = () => {
    const resultado = sandwichOrders.filter(sandwichOrder => 
        sandwichOrder.ingredients.find( ingrediente => ingrediente === "lechuga" ) &&
        sandwichOrder.ingredients.find( ingrediente => ingrediente === "palta" )
    )
    return resultado
}

//// Funcion 2
const orden2 = (id) => {

    const resultado = sandwichOrders.filter(sandwichOrder => 
        sandwichOrder.id===id
    )

    return resultado;
}

const destructOrden2 = (obj) => {
    const [
        {
        ordered: fechaorden,
        protein: proteina,
        bread: bagette
        }
 
    ] = obj;
    return `La orden fue realizada el ${fechaorden}, la orden llevó ${proteina} y ${bagette}` ;
};

//// Funcion 3
const orden3 = (id) => {

    const resultado = sandwichOrders.filter(sandwichOrder => 
        sandwichOrder.id===id && sandwichOrder.ingredients.includes("pepinillos")
    )

    return resultado.length == 0 ? "false" : "true"
 
}

//// Funcion 4
const orden4 = (fecha) => {
    const resultado = sandwichOrders.filter(sandwichOrder =>
        sandwichOrder.ordered == fecha)

        return `Se encontraron ${resultado.length} ordenes para la fecha ${fecha}`
}

//// Funcion 5
const orden5 = () => {
    const resultado = sandwichOrders.filter(sandwichOrder =>
        sandwichOrder.protein === "not burger" && 
        sandwichOrder.ingredients.find(ingrediente => ingrediente === "cebolla caramelizada")
    )
    
    return resultado.map(sandwichOrder => sandwichOrder.ordered)

}

//// Ejercicio Dificil

const orden6 = () => {
    sandwichOrders.reduce()
    /// Me Rindo
}
