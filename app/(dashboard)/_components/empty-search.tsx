import Image from "next/image"

export const EmptySearch = () =>{
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image 
                src="/empty-search.svg"
                height={400}
                width={400}
                alt="empty"
            />
            <h2 className="text-2xl font-semibold mt-6">No results Found!</h2>
            <p className="text-sm text-muted-foreground mt-4">Try searching for something else</p>
        </div>
    )
}