'use client'

import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '@clerk/nextjs'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const font = Montserrat({ weight: '600', subsets: ['latin'] })

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth()

  return (
    <nav className='p-4 bg-transparent flex items-center justify-between'>
      <Link href='/' className='flex items-center'>
        <Image
          height='40'
          width='40'
          alt='Logo'
          src='/DLLogo.jpg'
          style={{
            borderRadius: '50px',
            marginRight: '10px',
            border: '2px solid white',
          }}
        />
        <h1 className={cn('text-3xl font-bold', font.className)}>
          <span className='text-white'>Pixa</span>
          <span className='text-[#fe8400]'>lens</span>
        </h1>
        {/* className='text-transparent h-24 bg-clip-text bg-gradient-to-r from-[#dc2f02] to-[#ffba08]' */}
      </Link>
      <div className='flex items-center gap-x-5'>
        <Link href={isSignedIn ? '/dashboard' : '/register'}>
          <Button variant='outline' className='rounded-full'>
            {isSignedIn ? 'Dashboard' : 'Register'}
          </Button>
        </Link>
        {!isSignedIn && (
          <Link href={isSignedIn ? '/dashboard' : '/sign-in'}>
            {/* <Button variant='secondary' className='rounded-full'>
            {'Sign In'}
          </Button> */}
            <Button className='rounded-full' type='submit'>
              Sign In
            </Button>
          </Link>
        )}
      </div>
    </nav>
  )
}
