import { Telegraf } from 'telegraf'
import env from './env'
import autuDeleter from './autoDeleteFunction'
import { config } from 'dotenv'

config()

const main = async () => {
  const Bot = new Telegraf(env('BOT_TOKEN'))
  autuDeleter(Bot)
  await Bot.launch()
  console.log('Bot is running')
}

main()
