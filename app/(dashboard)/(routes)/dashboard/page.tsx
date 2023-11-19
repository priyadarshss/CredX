'use client'

import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

import { tools } from '@/constants'
import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function HomePage() {
  const router = useRouter()
  const [url, setUrl] = useState('')
  const [screenshot, setScreenshot] = useState('')
  const [loading, setLoading] = useState(false)

  function downloadImage(imageSrc: string) {
    const link = document.createElement('a')
    link.href = imageSrc
    link.download = 'download'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleSubmit = async (event: any) => {
    setLoading(true)
    event.preventDefault()
    const res = await fetch(
      `https://api.screenshotmachine.com?key=f87fa6&url=${url}&dimension=1024xfull&delay=3000`
    )
    setScreenshot(res.url)
    // downloadImage(res.url)

    setLoading(false)
  }

  return (
    <div>
      <div className='mb-8 space-y-4'>
        <h2 className='text-2xl md:text-4xl font-bold text-center'>
          Explore the power of AI
        </h2>
        <p className='text-muted-foreground font-light text-sm md:text-lg text-center'>
          Chat with the smartest AI - Experience the power of AI
        </p>
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
        <form className='flex justify-evenly' onSubmit={handleSubmit}>
          <Input
            className='border-2 border-gray-300 p-2 w-1/2'
            type='text'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder='Enter the URL of the website...'
          />
          <Button type='submit'>Submit</Button>
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
