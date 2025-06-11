export const PostInput = () => {
    return (
        <div className="w-full h-full flex justify-center items-stretch gap-3">
            <textarea
                className="w-full p-4 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                placeholder="Escreva o que você está pensando aqui..."
                rows={4}
                
                style={{ height: "112px", resize: "none"}}
            />
            <button
                className="px-6 bg-yellow-800 text-white rounded-lg hover:bg-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-800 dark:focus:ring-yellow-800"
                style={{ height: "112px" }}
            >
                Publicar
            </button>
        </div>
    );
}