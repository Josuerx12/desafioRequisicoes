import { useEffect, useState } from "react";

export const usePost = (url) => {
    const [carregando, setCarregando] = useState(true)
    const post = async (itens) => {
        try {
            setCarregando(true)
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(itens)
            })
            setCarregando(false)
        } catch (error) {
            console.log("Deu erro ao enviar o cadastro!!!")
        }
        
    } 

    return { post, carregando}
}