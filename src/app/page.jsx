"use client";
import { useState, useEffect } from "react";
import { getAllCategories } from "./lib/api";
import { Preloader } from "../components/ui/Preloader";
import { CategoryList } from "../components/category/CategoryList";

export default function Home() {
    const [catalog, setCatalog] = useState([])
    const[searchTerm, setSearchTerm] = useState('')
    useEffect(() => {
    getAllCategories().then((data) => {
        setCatalog(data.categories)
    })
},[]);

const filteredCategory = catalog.filter (category =>
    category.strCategory.toLowerCase().includes(searchTerm.toLowerCase())
);

return (
    <>
        {!catalog.length ? (
            <Preloader />
         ) : (
            <>
            <input 
            type="text"
            placeholder="Поиск по категориям"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className=" poisk border border-black rounded-md p-2 mb-[30px] ml-[1vw]  w-200"
            />
            <CategoryList catalog={filteredCategory} />
            </>
         ) }

    </>
    );
}