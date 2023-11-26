'use client'

import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

import { tools } from '@/constants'
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
const GaugeComponent = dynamic(() => import('react-gauge-component'), {
  ssr: false,
})

export default function HomePage() {
  const router = useRouter()
  const [url, setUrl] = useState('')
  const [screenshot, setScreenshot] = useState('')
  const [loading, setLoading] = useState(false)
  const [score, setScore] = useState(300)
  const [isActive, setIsActive] = useState(true) // New state variable to control the interval
  const [position, setPosition] = useState('bottom')

  useEffect(() => {
    let interval: any;

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

  const handleSubmit = async (event: any) => {
    setLoading(true)
    event.preventDefault()
    const res = await fetch(
      `https://api.screenshotmachine.com?key=f87fa6&url=${url}&dimension=1024xfull&delay=3000`
    )
    setScreenshot(res.url)
    setLoading(false)
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
        <form className='flex flex-col gap-10 mt-12' onSubmit={handleSubmit}>
          <div className='flex justify-evenly'>
            <Input
              className='border-2 border-gray-300 p-2 w-1/2'
              type='text'
              value={
                url.length > 0
                  ? `${url.substring(0, 5)}...${url.substring(url.length - 5)}`
                  : ''
              }
              onChange={(e) => setUrl(e.target.value)}
              placeholder='Enter your wallet address ...'
              style={{ width: '20%', height: '50%' }}
            />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='outline'>Select The Chain</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-56'>
                <DropdownMenuLabel>Chain</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
                  <DropdownMenuRadioItem value='ethereum'>
                    Ethereum
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value='polygon'>
                    Polygon
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className='flex justify-evenly'>
            <Button type='submit' className='flex w-32'>
              Get my Score
            </Button>
          </div>
        </form>
      </div>
      {/* <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card onClick={() => router.push(tool.href)} key={tool.href} className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">
                {tool.label}
              </div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div> */}
    </div>
  )
}
