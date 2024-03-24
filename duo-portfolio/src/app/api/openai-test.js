import OpenAI from 'openai'
// const { OpenAI } = require('openai')

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_PRIVATE_KEY,
  dangerouslyAllowBrowser: true,
})

export async function testGPT() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'system', content: 'You are a helpful assistant.' }],
    model: 'gpt-3.5-turbo',
  })

  console.log(completion.choices[0])
}
