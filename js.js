alert("Bienvenidos a Mi Curriculum Vitae")

console.log("Hola Mundo")

const img = document.querySelector("img")

async function consultar(){
    let resultado = await fetch ('https://randomuser.me/api/')
                             .then((response)=>response.json())
                             .then((data)=>data)

    img.src = resultado.results[0].picture.large
    document.getElementById("ciudad").innerHTML = resultado.results[0].location.city
    document.getElementById("direccion").innerHTML = resultado.results[0].location.street.name+" "+resultado.results[0].location.street.number
    document.getElementById("codigopostal").innerHTML = resultado.results[0].location.postcode
    document.getElementById("email").innerHTML = resultado.results[0].email
    document.getElementById("telefono").innerHTML = resultado.results[0].cell
    document.getElementById("edad").innerHTML = resultado.results[0].dob.age
    document.getElementById("nombre").innerHTML = resultado.results[0].name.first
    document.getElementById("nombretitulo").innerHTML = resultado.results[0].name.first+" "+resultado.results[0].name.last
    
}

consultar()

