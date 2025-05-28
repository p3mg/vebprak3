'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getFilteredCategory } from '@/app/lib/api'
import { MealList } from '@/components/meal/MealList'
import { Preloader } from '@/components/ui/Preloader'
import Link from 'next/link'

export default function CategoryPage() {
    const { id } = useParams()
    const [meals, setMeals] = useState([])

    useEffect(() => {
        if (!id) return;

        getFilteredCategory(id).then((data) => {
            setMeals(data?.meals || []);
        });
    }, [id]);

    return (
        <div className="p-4">
            <Link href="/" className="goback text-red-500 hover:underline block mb-4 bg-black w-30 p-2">← Go Back</Link>
            {!meals.length ? <Preloader /> : <MealList meals={meals} />}
        </div>
    );
}
