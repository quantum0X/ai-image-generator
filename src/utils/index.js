import { tryMe } from '../constants'

export function useRandomPrompt(prompt) {
    const randomIndex = Math.floor( Math.random() * tryMe.length)
    const randomPrompt = tryMe[randomIndex]

    if(randomPrompt === prompt) return getRandomPrompt(prompt)

    return randomPrompt
}