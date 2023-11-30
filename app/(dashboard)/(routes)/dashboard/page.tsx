// @ts-nocheck
'use client'

import OpenAI from 'openai'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import dynamic from 'next/dynamic'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Card } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import { set } from 'zod'
const GaugeComponent = dynamic(() => import('react-gauge-component'), {
  ssr: false,
})

// const openai = new OpenAI({
//   apiKey: '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',
//   dangerouslyAllowBrowser: true,
// })

export default function HomePage() {
  const [address, setUrl] = useState('')
  const [chain, setChain] = useState('')
  const [screenshot, setScreenshot] = useState('')
  const [loading, setLoading] = useState(false)
  const [score, setScore] = useState(300)
  const [isActive, setIsActive] = useState(true)
  const [showFullDescriptions, setShowFullDescriptions] = useState({})
  const [flag, setFlag] = useState(false)
  const [userInput, setUserInput] = useState('')
  const [chatHistory, setChatHistory] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const data = {
    score: 530,
    reasons: {
      'Low overall balance across blockchains':
        'The wallet holds a minimal amount of assets across multiple blockchains: 0.002 MATIC on Polygon with a value of less than $0.01, 0.000121706545464 ETH on Ethereum valued at $0.25, and 0.000104785 BNB on Binance Smart Chain worth $0.02. Additionally, there are no holdings in BTT on the BitTorrent Chain.',
      'Diverse but low-value token holdings':
        'The wallet holds a variety of tokens across different blockchains: 9 tokens on Polygon worth $15.02, 1 token on Ethereum with no value, 10 tokens on Binance Smart Chain valued at $8.69, and 5 BRC20 tokens on BitTorrent Chain with no stated value.',
      'Limited transaction history':
        'There has been limited transaction activity. The last transactions on Ethereum and Binance Smart Chain were 120 and 127 days ago, respectively, and there have been no transactions from the wallet on Polygon.',
    },
    improvements: {
      'Increase asset holdings':
        'Boosting the balance and diversifying the portfolio with higher-value assets across the different blockchains can positively impact the credit score.',
      'Regular transaction activity':
        'Engaging in more frequent transactions can demonstrate consistent use and reliability, thus improving the credit score.',
      'Invest in value-appreciating assets':
        "Allocating funds to potentially value-appreciating assets or participating in DeFi activities can enhance the wallet's financial standing.",
    },
  }

  const toggleFullDescription = (reason: any) => {
    setShowFullDescriptions((prevState) => ({
      ...prevState,
      // @ts-ignore
      [reason]: !prevState[reason],
    }))
  }

  useEffect(() => {
    let interval: any

    if (isActive) {
      interval = setInterval(() => {
        setScore((prev) => {
          if (prev >= 850) {
            setIsActive(false) // Stop the interval
            return 650 // Reset score to 600
          }
          return prev + 1 // Otherwise, increment score
        })
      }, 10)
    }

    return () => {
      if (interval) {
        clearInterval(interval) // Cleanup interval
      }
    }
  }, [isActive]) // Depend on isActive

  useEffect(() => {
  let interval: any;

  if (loading) {
    setScore(300);
    interval = setInterval(() => {
      setScore((prev) => {
        return prev + 1; // Otherwise, increment score
      });
    }, 100);
  }

  return () => {
    if (interval && loading) {
      clearInterval(interval); // Cleanup interval only if loading is false
    }
  };
}, [loading]);

  // const handleSubmit = async (event: any) => {
  //   setLoading(true)
  //   event.preventDefault()
  //   const res = await fetch(
  //     `https://api.screenshotmachine.com?key=f87fa6&url=${url}&dimension=1024xfull&delay=3000`
  //   )
  //   setScreenshot(res.url)
  //   setLoading(false)
  // }

  const handleSubmit = async (event: any) => {
    event.preventDefault() // Prevent default form submission
    setLoading(true)
    setFlag(true)

    // setChatHistory((prevChat) => [
    //   ...prevChat,
    //   { role: 'user', content: userInput },
    // ])

    // const chatCompletion = await openai.chat.completions.create({
    //   messages: [...chatHistory, { role: 'assistant', content: userInput }],
    //   model: 'gpt-3.5-turbo',
    // })

    // setChatHistory((prevChat) => [
    //   ...prevChat,
    //   { role: 'assistant', content: chatCompletion.choices[0].message.content },
    // ])

    // console.log(chatCompletion.choices[0].message.content)

    setTimeout(() => {
      setLoading(false)
      setScore(data.score-1)
    }, 9000)
  }

  return (
    <div>
      <div className='mb-8 space-y-4'>
        <h2 className='text-2xl md:text-4xl font-bold text-center'>
          Credit Score Analysis
        </h2>
        <p className='text-muted-foreground font-light text-sm md:text-lg text-center'>
          Find your credit score and get a free credit report analysis within a
          few seconds
        </p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <GaugeComponent
          type='semicircle'
          arc={{
            colorArray: ['#FF2121', '#00FF15'],
            padding: 0.02,
            subArcs: [
              { limit: 400 },
              { limit: 500 },
              { limit: 600 },
              { limit: 700 },
              { limit: 800 },
              {},
            ],
          }}
          pointer={{ type: 'blob', animationDelay: 0 }}
          value={score}
          minValue={300}
          maxValue={850}
          style={{ width: '50%', height: '100%' }}
        />
      </div>
      <div className='flex flex-col h-full space-y-4 p-4 overflow-auto'>
        {loading ? (
          <div className='flex justify-center'>
            <div
              className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
              role='status'
            >
              <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
                Loading...
              </span>
            </div>
          </div>
        ) : null}
        {screenshot ? (
          <div>
            <h1 className='mb-4'>This is the page:</h1>
            <Image
              src={screenshot}
              alt='screenshot'
              width={1920}
              height={1080}
              style={{ borderRadius: '10px' }}
            />
          </div>
        ) : null}
        {/* report start */}
        {flag && !loading && (
          <div>
            <div className='mt-40 mb-12 space-y-2 text-center dark:bg-gray-800'>
              <h2 className='text-3xl font-bold text-gray-800 md:text-4xl dark:text-white'>
                Report
              </h2>
              <p className='lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300'>
                Quam hic dolore cumque voluptate rerum beatae et quae, tempore
                sunt, debitis dolorum officia aliquid explicabo? Excepturi,
                voluptate?
              </p>
            </div>
            <div className='mt-40 mb-12 space-y-2 text-center dark:bg-gray-800'>
              <h2 className='text-3xl font-bold text-gray-800 md:text-4xl dark:text-white'>
                Reasons for your Credit Score of
              </h2>
              <h2 className='text-3xl font-bold text-orange-600 md:text-4xl dark:text-white'>
                {data.score}
              </h2>
            </div>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {Object.entries(data.reasons).map(([reason, description]) => (
                <div key={reason}>
                  <div className='group min-h-[300px] p-6 sm:p-8 rounded-3xl bg-gray-800 border border-gray-700 dark:border-gray-700 dark:bg-gray-900 shadow-2xl shadow-gray-600/10'>
                    <div className='mt-6 relative min-h-[250px]'>
                      <h3 className='text-2xl text-center font-semibold text-white dark:text-gray-800'>
                        {reason}
                      </h3>
                      <p className='mt-6 mb-8 text-gray-300 dark:text-gray-400'>
                        {showFullDescriptions[reason]
                          ? description
                          : `${description.slice(0, 100)}${
                              description.length > 100 ? '...' : ''
                            }`}
                      </p>
                    </div>
                    {description.length > 100 && (
                      <a
                        className='inline-block cursor-pointer text-blue-300 dark:text-info'
                        onClick={() => toggleFullDescription(reason)}
                      >
                        {showFullDescriptions[reason]
                          ? 'Read less'
                          : 'Read more'}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className='mt-40 mb-12 space-y-2 text-center dark:bg-gray-800'>
              <h2 className='text-3xl font-bold text-gray-800 md:text-4xl dark:text-white'>
                Ways to Improve your Score
              </h2>
            </div>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8'>
              {Object.entries(data.improvements).map(
                ([improvement, description]) => (
                  <div key={improvement}>
                    <div className='group min-h-[350px] p-6 sm:p-8 rounded-3xl bg-gray-800 border border-gray-700 dark:border-gray-700 dark:bg-gray-900 shadow-2xl shadow-gray-600/10'>
                      <div className='mt-6 relative min-h-[250px]'>
                        <h3 className='text-2xl text-center font-semibold text-white dark:text-gray-800'>
                          {improvement}
                        </h3>
                        <p className='mt-6 mb-8 text-gray-300 dark:text-gray-400'>
                          {showFullDescriptions[improvement]
                            ? description
                            : `${description.slice(0, 100)}${
                                description.length > 100 ? '...' : ''
                              }`}
                        </p>
                      </div>
                      {description.length > 100 && (
                        <a
                          className='inline-block cursor-pointer text-blue-300 dark:text-info'
                          onClick={() => toggleFullDescription(improvement)}
                        >
                          {showFullDescriptions[improvement]
                            ? 'Read less'
                            : 'Read more'}
                        </a>
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        )}
        {/* report end */}
        {/* form start */}
        <form
          className={`flex flex-col ${flag ? 'mt-40' : 'mt-12'} gap-10`}
          onSubmit={handleSubmit}
        >
          <div className='flex justify-evenly'>
            <Input
              className='border-2 border-gray-300 p-2 w-1/2'
              type='text'
              value={
                address.length > 0
                  ? `${address.substring(0, 5)}...${address.substring(
                      address.length - 5
                    )}`
                  : ''
              }
              onChange={(e) => setUrl(e.target.value)}
              placeholder='Enter your wallet address ...'
              style={{ width: '20%', height: '50%' }}
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='outline'>
                  {chain ? chain : 'Select The Chain'}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-56'>
                <DropdownMenuLabel>Chain</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={chain} onValueChange={setChain}>
                  <DropdownMenuRadioItem value='Ethereum'>
                    Ethereum
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value='Polygon'>
                    Polygon
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className='flex justify-evenly'>
            <Button type='submit' className='flex w-32'>
              {flag && !loading ? 'Get my Score Again' : 'Get my Score'}
            </Button>
          </div>
        </form>
        {/* form end */}
      </div>
    </div>
  )
}
