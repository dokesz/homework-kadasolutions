"use client"
import { Rating } from 'react-simple-star-rating'

type RatingStarsProp = {
    rating: number | undefined
}

export default function RatingStars({ rating }: RatingStarsProp) {
    const initialValue = Math.floor(rating!);
    return (
        <div className='flex'>
            <Rating initialValue={initialValue} iconsCount={5} readonly={true} fillColor="#7139c8" SVGclassName={`inline-block w-6 h-6`} />
            <p className="font-bold text-xl">{rating}</p>
        </div>
    )
}