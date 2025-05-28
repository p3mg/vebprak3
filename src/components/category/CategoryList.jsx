import { CategoryItem } from "./CategoryItem";

export function CategoryList({catalog  = []}) {
    return(
        <div className="grid grid-cols-6 gap-2 p-3">
            {catalog.map((el) => (
                <CategoryItem key={el.idCategory} {...el}/>
            ))}
        </div>  
    )
}