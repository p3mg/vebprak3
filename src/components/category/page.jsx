'use client'
import {useState, useEffect } from "react"
import { Preloader } from "@/components/ui/Preloader"
import { getFilteredCategory } from "../../app/lib/api"
import { MealList } from "../../app/meal/MealList"

// export function Category() - Было вот так 
export default function CategoryPage() {
    const [meals, setMeals] = useState([])

    useEffect(() => {
        //  getFilteredCategory().then((data) => setMeals(data.meals))
        getFilteredCategory().then((data) => setMeals(data.meals ?? []))
    }, [])  
    return(
    <>
        <button>
            Go Back
         </button>
        {!meals.length ? <Preloader /> : <MealList meals = {meals}/>}
    </>
    )
}