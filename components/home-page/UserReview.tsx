'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Star } from 'lucide-react'
import Image from 'next/image'

const reviews = [
  {
    id: 1,
    text: "Quik has revolutionized our workflow. It's intuitive, fast, and incredibly powerful.",
    author: "Alex Johnson",
    position: "CTO, TechCorp",
    rating: 5,
    date: "15th May, 2023"
  },
  {
    id: 2,
    text: "I can't imagine running our business without Quik. It's been a game-changer for our team's productivity.",
    author: "Samantha Lee",
    position: "Operations Manager, StartUp Inc.",
    rating: 5,
    date: "2nd June, 2023"
  },
  {
    id: 3,
    text: "Quik's customer support is top-notch. They're always there when we need them.",
    author: "Michael Brown",
    position: "CEO, Brown Enterprises",
    rating: 5,
    date: "20th June, 2023"
  }
]

interface Review {
  id: number;
  text: string;
  author: string;
  position: string;
  rating: number;
  date: string;
}

const ReviewCard = ({ review }: { review: Review }) => (
  <div className="bg-white shadow-lg rounded-lg p-6  border-2 border-gray-100 mx-4 w-[400px] flex-shrink-0">
    <div className="flex justify-between items-center mb-4">
      <div className="flex">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-current text-yellow-500" />
        ))}
      </div>
      <p className="text-sm text-gray-400">{review.date}</p>
    </div>
    <p className="text-gray-600 mb-4 font-semibold">{review.text}</p>
    <div className="flex items-center">
      {/* <div className="mr-4">
        <Image
          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(review.author)}&background=random`}
          alt={review.author}
          width={50}
          height={50}
          className="rounded-full"
        />
      </div> */}
      <div>
        <p className="font-semibold text-lg">{review.author}</p>
        <p className="text-sm text-gray-500">{review.position}</p>
      </div>
    </div>
  </div>
)

export default function UserReviews() {
  const [isHovered, setIsHovered] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const totalWidth = scrollContainer.scrollWidth / 2
    const scrollSpeed = 1 // Adjust this value to change scroll speed

    let animationId: any
    const scroll = () => {
      if (!isHovered) {
        setScrollPosition((prevPosition) => {
          const newPosition = (prevPosition + scrollSpeed) % totalWidth
          scrollContainer.scrollLeft = newPosition
          return newPosition
        })
      }
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationId)
  }, [isHovered])

  return (
    <div className="bg-white py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
      <div className="text-center mb-10">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">What people tell about us</h2>
                <p className="mt-2 text-xl text-gray-600">See what our customers have to say</p>
                </div>
        <div 
          className="flex gap-16 overflow-hidden" 
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {[...reviews, ...reviews, ...reviews].map((review, index) => (
            <ReviewCard key={`${review.id}-${index}`} review={review} />
          ))}
        </div>
      </div>
    </div>
  )
}