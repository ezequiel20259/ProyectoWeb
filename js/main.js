document.addEventListener('DOMContentLoaded', function() {
    function loadTableData() {
        fetch('json/datos.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al cargar el archivo JSON');
                }
                return response.json();
            })
            .then(data => {
                let tableBody = '';
                data.forEach(mission => {
                    tableBody += `
                        <tr>
                            <td>${mission.id}</td>
                            <td>${mission.destino}</td>
                            <td>${mission.tipoMision}</td>
                            <td>${mission.duracion} días</td>
                            <td>${mission.recursos}</td>
                            <td>
                                <button class="btn btn-warning btn-sm editMissionBtn" data-id="${mission.id}">Editar</button>
                                <button class="btn btn-danger btn-sm deleteMissionBtn" data-id="${mission.id}">Eliminar</button>
                            </td>
                        </tr>
                    `;
                });
                document.getElementById('miTabla').innerHTML = tableBody;
            })
            .catch(error => console.error(error));
    }

    loadTableData();
});