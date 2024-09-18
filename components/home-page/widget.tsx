"use client"

import { useState } from "react"
import { MessageSquare, Star, X } from "lucide-react"

export default function FeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [rating, setRating] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const toggleFeedback = () => {
    setIsOpen(!isOpen)
    setIsSubmitted(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div className="fixed bottom-16 right-16 flex flex-col items-end">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-[-5px_5px_5px_2px_#00000024] border border-t-gray-200 p-6 w-[600px] mb-4">
          {!isSubmitted ? (
            <>
              <div className="flex items-center mb-6">
                <MessageSquare className="w-6 h-6 text-green-500 mr-2" />
                <h2 className="text-xl font-semibold text-gray-800">Send us your feedback</h2>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="your.email@example.com"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-1">
                    Feedback
                  </label>
                  <textarea
                    id="feedback"
                    rows={4}
                    placeholder="Your feedback here..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                  ></textarea>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-6 h-6 cursor-pointer ${
                          star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                        onClick={() => setRating(star)}
                      />
                    ))}
                  </div>
                  <button
                    type="submit"
                    className="bg-green-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className=" py-4 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Thank you for your feedback!</h2>
              <p className="text-gray-700 font-medium">We approve your feedback. It helps us improve our product and provide better service to our customers.</p>
            </div>
          )}
        </div>
      )}
      <button
        onClick={toggleFeedback}
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors flex items-center"
      >
        {isOpen ? (
          <div className="font-semibold flex gap-0.5 items-center">
            <X className="w-5 h-5 mr-2" />
            Close
          </div>
        ) : (
          <div className="font-semibold flex gap-0.5 items-center">
            <MessageSquare className="w-5 h-5 mr-2" />
            Give Feedback
          </div>
        )}
      </button>
    </div>
  )
}