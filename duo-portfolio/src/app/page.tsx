'use client'

import { useEffect } from 'react'
import { testGPT } from '@/app/api/openai-test'

export default function Home() {
  useEffect(() => {
    testGPT()
  }, [])
  return <main>test</main>
}
