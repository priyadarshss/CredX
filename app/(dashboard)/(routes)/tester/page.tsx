'use client'
import OpenAI from 'openai'

import { useState } from 'react'

const openai = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true,
})

export default function Page() {
  const [userInput, setUserInput] = useState('')
  const [chatHistory, setChatHistory] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleUserInput = async () => {
    setIsLoading(true)
    setChatHistory((prevChat) => [
      ...prevChat,
      { role: 'user', content: userInput },
    ])

    const chatCompletion = await openai.chat.completions.create({
      messages: [...chatHistory, { role: 'assistant', content: userInput }],
      model: 'gpt-3.5-turbo',
    })

    setChatHistory((prevChat) => [
      ...prevChat,
      { role: 'assistant', content: chatCompletion.choices[0].message.content },
    ])
    setUserInput('')
    setIsLoading(false)
  }

  return (
    <div className='bg-gray-100 min-h-screen flex flex-col justify-center items-center'>
      <div className='w-full max-w-screen-md bg-white p-4 rounded-lg shadow-md'>
        <div className='mb-4'>
          <div className='text-4xl font-bold text-blue-800 mb-2'>
            Chatbot Assistant
          </div>
          <p className='text-gray-600 text-lg'>
            Welcome to the future of AI-powered assistant. Ask me anything!!!
          </p>
        </div>
        <div className='mb-4' style={{ height: '400px', overflow: 'auto' }}>
          {chatHistory.map((message, index) => (
            <div key={index} className='mb-2'>
              {/* Display each chat message here */}
              <div
                className={
                  message.role === 'user' ? 'text-blue-800' : 'text-green-800'
                }
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>
        <div className='flex'>
          <input
            type='text'
            placeholder='Ask me something…'
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className='flex-1 p-2 rounded-lg'
          />
          {isLoading ? (
            <div className='bg-blue-500 text-white p-2 rounded-lg animate-pulse'>
              Loading...
            </div>
          ) : (
            <button
              onClick={handleUserInput}
              className='bg-blue-500 text-white p-2 rounded-lg'
            >
              Send
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
