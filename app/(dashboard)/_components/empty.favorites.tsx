import Image from "next/image"

export const EmptyFavorites = () =>{
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image 
                src="/empty-favorites.png"
                height={300}
                width={300}
                alt="empty"
            />
            <h2 className="text-2xl font-semibold mt-6">No Favorites boards!</h2>
            <p className="text-sm text-muted-foreground mt-4">Try favoriting a board</p>
        </div>
    )
}