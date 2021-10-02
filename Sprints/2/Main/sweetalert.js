Swal.fire({
    title: 'Desea registrar el nuevo producto?',
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: 'Guardar',
    denyButtonText: `No guardar`,
}).then((result) => {
    if (result.isConfirmed) {
    Swal.fire('Guardado correctamente!', '', 'success')
    } else if (result.isDenied) {
    Swal.fire('Los cambios no han sido guardados', '', 'error')
    }
})    