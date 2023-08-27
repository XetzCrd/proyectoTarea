function editarUsuario(idEditar)
{
    var idEdit = idEditar.split("editar")[1];
    
    fetch(`/conseguirInfoEditar?idEdit=${idEdit}`) //id a "mostrar" de usuario
    .then(response => response.json())
    .then(data => {
        document.getElementById("cargaId").innerHTML = "Editar usuario " + data.idUser
        document.getElementById("nombreUsuario").value = data.nombre
        document.getElementById("apellidoUsuario").value = data.apellido
        document.getElementById("emailUsuario").value = data.email
        document.getElementById("fechaUsuario").value = data.fecha
        document.getElementById("celularUsuario").value = data.celular
        document.getElementById("profesionUsuario").value = data.profesion
    })
}

function actualizarUsuario()
{
    datos = {
        'nrocelular': celularUsuario.value,
        'profesion': profesionUsuario.value,
        'idUsuario': document.getElementById("cargaId").innerHTML.split("Editar usuario ")[1]
    }

    fetch('/actualizarUsuario',{
        method:"POST",
        headers:{
            "X-Requested-With":"XMLHttpRequest",
            "X-CSRFToken": getCookie("csrftoken"),
        },
        body:JSON.stringify(datos)
    })

    .then(response => response.json())
    .then(data => {
        editarUsuario("editar"+data.userId)
    })
}

function getCookie(name)
{
    let cookieValue = null;
    if(document.cookie && document.cookie !== "")
    {
        const cookies = document.cookie.split(';');
        for(let i = 0; i < cookies.length; i++)
        {
            const cookie = cookies[i].trim();
            if(cookie.substring(0,name.length + 1) === (name + "="))
            {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue 
}

