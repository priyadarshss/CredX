import { Zap } from 'lucide-react'
import { useEffect, useState } from 'react'

import { MAX_FREE_COUNTS } from '@/constants'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { useProModal } from '@/hooks/use-pro-modal'

export const FreeCounter = ({
  isPro = false,
  apiLimitCount = 0,
}: {
  isPro: boolean
  apiLimitCount: number
}) => {
  const [mounted, setMounted] = useState(false)
  const proModal = useProModal()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  if (isPro) {
    return null
  }

  return (
    <div className='px-3'>
      <Card className='bg-white/10 border-0'>
        <CardContent className='py-6'>
          <div className='text-center text-sm text-white mb-4 space-y-2'>
            <p>
              {apiLimitCount} / {MAX_FREE_COUNTS} Free Credits
            </p>
            <Progress
              className='h-3'
              value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
            />
          </div>

          <div
            className='inset-x-6 bottom-6 z-40 mx-auto w-max cursor-pointer'
            onClick={proModal.onOpen}
          >
            <a
              target='_blank'
              className='flex gap-3 rounded-2xl border border-white/10 bg-gradient-to-br from-black/70 to-gray-800 dark:border-yellow-900/30 dark:from-gray-800 dark:to-black/70 p-3 shadow-sm shadow-primary/50 backdrop-blur-xl'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='h-5 w-5 text-orange-500 dark:text-orange-400'
              >
                <path
                  fillRule='evenodd'
                  d='M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z'
                  clipRule='evenodd'
                ></path>
              </svg>
              <span className='text-sm font-semibold tracking-wide text-orange-500 dark:text-white'>
                Upgrade to Pro
              </span>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
