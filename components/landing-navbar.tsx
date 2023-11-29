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
        <h1 className={cn('text-2xl font-bold', font.className)}>
          <span className='text-white'>Cred</span>
          <span className='text-[#fe8400]'>X</span>
        </h1>
      </Link>
      <div className='flex items-center gap-x-5'>
        <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
          <Button variant='outline' className='rounded-full'>
            {isSignedIn ? 'Dashboard' : 'Register'}
          </Button>
        </Link>
        {!isSignedIn && (
          <Link href={isSignedIn ? '/dashboard' : '/sign-in'}>
            <Button className='rounded-full' type='submit'>
              Login
            </Button>
          </Link>
        )}
      </div>
    </nav>
  )
}
