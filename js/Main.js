let boton = document.getElementById("boton");
boton.addEventListener("click", traerDatos);

function traerDatos() {
  let dni = document.getElementById("dni").value;

  fetch(
    "https://apiperu.dev/api/dni/" +
      dni +
      "?api_token=f4aadda8b0488f5aa2eed4859a60c61f3292199bda612bf840d30a581c3e250a"
  )
    .then((datos) => datos.json())
    .then((datos) => {
      console.log(datos.data);
      document.getElementById("doc").value = datos.data.numero;
      document.getElementById("nombre").value = datos.data.nombres;
      document.getElementById("apellido").value = datos.data.nombre_completo;
      document.getElementById("cui").value = datos.data.codigo_verificacion;
    });
}
