export async function obtenerDatosDeOpenSheet() {
    const idHoja = "1MSr3H7w2ghobo9y0tY87OVtLDdlv9K9tI5H7vkjR7nc";
    const nombreHoja = "productos";

    const urlOpenSheet = `https://opensheet.elk.sh/${idHoja}/${nombreHoja}`;

    try {
        const respuesta = await fetch(urlOpenSheet);

        if (!respuesta.ok) {
            throw new Error(`Error del: ${respuesta.status}`);
        }

        const datos = await respuesta.json()

       return datos

    } catch (error) {
        console.error("No se pudieron obtener los datos:", error)
        return null
    }
}