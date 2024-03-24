import OpenAI from 'openai'
// const { OpenAI } = require('openai')

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_PRIVATE_KEY,
  // 브라우저 환경에서 openai api 실행은 위험, 테스트시에만 true
  // dangerouslyAllowBrowser: true,
})

export async function testGPT() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'system', content: 'You are a helpful assistant.' }],
    model: 'gpt-3.5-turbo',
  })

  console.log(completion.choices[0])
}
