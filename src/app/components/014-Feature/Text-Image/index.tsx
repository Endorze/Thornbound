"use client"
import { useState } from "react"
import ReusableTextImage from "../../006-Resusable-Text-Image"
import { teamData } from "@/data/images"

const TextImage = () => {
    const [visibleCount, setVisibleCount] = useState(5)

    const loadMore = () => {
        setVisibleCount((prev) => prev + 5)
    }

    const visibleItems = teamData.slice(0, visibleCount)

    return (
        <div className="space-y-15 w-full lg:w-3/5">
            {visibleItems.map((person, index) => (
                <div
                    key={index}
                    className="relative bg-black p-4 text-white border-t border-r border-white mb-16">
                    <ReusableTextImage title={person.title} text={person.text} image={person.image} />

                    <div className="absolute bottom-0 right-0 h-[1px] w-1/2 bg-gradient-to-l from-white to-transparent" />
                    <div className="absolute top-0 left-0 w-[1px] h-1/2 bg-gradient-to-b from-white to-transparent" />
                </div>
            ))}

            {visibleCount < teamData.length && (
                <div className="flex items-center justify-center p-6 uppercase text-white border bg-blue-950 cursor-pointer">
                    <button onClick={loadMore}>Load More News</button>
                </div>
            )}
        </div>
    )
}

export default TextImage;