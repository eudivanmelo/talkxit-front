"use client";

import { useState } from "react";
import api from "@/services/api";

export const PostInput = () => {
    const [postContent, setPostContent] = useState("");

    const handleSubmit = () => {
        if (postContent.trim() === "") {
            alert("O conteúdo do post não pode estar vazio.");
            return;
        }

        var response = api.post("/post/", {
            content: postContent,
            is_published: true,
        });

        response
            .then((res) => {
                console.log("Post publicado com sucesso:", res.data);
                setPostContent(""); // Limpa o campo após o envio
            })
            .catch((error) => {
                console.error("Erro ao publicar o post:", error);
                alert("Ocorreu um erro ao publicar o post. Tente novamente.");
            });

        window.location.reload();
    }
    
    return (
        <div className="w-full h-full flex justify-center items-stretch gap-3">
            <textarea
                className="w-full p-4 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                placeholder="Escreva o que você está pensando aqui..."
                rows={4}
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                style={{ height: "112px", resize: "none"}}
            />
            <button
                className="px-6 bg-yellow-800 text-white rounded-lg hover:bg-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-800 dark:focus:ring-yellow-800"
                style={{ height: "112px" }}
                onClick={handleSubmit}
            >
                Publicar
            </button>
        </div>
    );
}