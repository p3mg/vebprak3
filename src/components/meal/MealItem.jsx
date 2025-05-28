import Link from "next/link";
export function MealItem({strMeal, strMealThumb, idMeal}){
    return(
        <div className="rounded-lg overflow-hidden shadow-md bg-black">
        <div className="relative">
            <img src={strMealThumb} alt={strMeal} className="w-full h-48 object-cover" />
            <h2 className="absolute bottom-2 left-2 text-white text-xl font-semibold bg-black/60 px-2 py-1 rounded">{strMeal}</h2>
        </div>
        <div className="px-4 pb-4 p-4">
            <Link 
                href={`/recipe/${idMeal}`}
                className="text-red-400 hover:underline font-medium"
            >
                Watch recipe
            </Link>
        </div>
    </div>
    );
}