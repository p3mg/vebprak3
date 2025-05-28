import Link from "next/link"

export function CategoryItem({strCategory, strCategoryThumb, strCategoryDescription }) {
    return(
        <div className="rounded-lg overflow-hidden shadow-md bg-white m-1" key={strCategory}>
            <div className="relative">
                <img src={strCategoryThumb} alt={strCategory} className="w-full h-48 object-cover bg-white" />
                <h2 className="absolute bottom-2 left-2 text-white text-xl font-semibold bg-black/60 px-2 py-1 rounded">{strCategory}</h2>
            </div>
            <div className="p-8">
                <p className="text-black">{strCategoryDescription.slice(0,60)}...</p>
            </div>
            <div className="px-4 pb-4 pt-4 bg-black">
                <Link href={`/category/${strCategory}`} className="knopka1 text-red-400 hover:underline font-medium">
                    Watch category
                </Link>
            </div>
        </div>
    )
}