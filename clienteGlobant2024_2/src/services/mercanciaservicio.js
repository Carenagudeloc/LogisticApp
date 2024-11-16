export async function registrarMercancia(datosMercancia) {
    const URL = "http://localhost:8080/logisticApp/v1/mercancias"

    let peticion = {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(datosMercancia)
    }

    let respuestaServidor = await fetch(URL, peticion)

    let respuestFinal = await respuestaServidor.json()

    console.log(respuestFinal)
}