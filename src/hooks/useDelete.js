
export const useDelete = (url) => {
    const deleteItem = async (id) => {
        try {
            const res = await fetch(`${url}/${id}`, {
                method: "DELETE"
            })
        } catch {
            console.log("Deu erro ao deletar o item")
        }
    }
    return {deleteItem}
}