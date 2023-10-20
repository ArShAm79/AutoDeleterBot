import { Context, Telegraf } from 'telegraf'
import { Message, Update } from 'telegraf/typings/core/types/typegram'

const autuDeleter = (Bot: Telegraf<Context<Update>>) => {
  Bot.on('channel_post', async (ctx) => {
    try {
      const { channelPost } = ctx
      const message = channelPost as Message.TextMessage

      if (!message.text || !message.reply_to_message) return

      const repliedMessage = message.reply_to_message

      const command = message.text.toLocaleLowerCase()

      if (!command.startsWith('!delete')) return

      const time = command.split(' ')[1]
      if (!time) return

      const hour = Number(time)
      const seconds = hour * 60 * 60
      await ctx.deleteMessage(message.message_id)
      setTimeout(async () => {
        try {
          await ctx.deleteMessage(repliedMessage.message_id)
        } catch (error) {
          console.log((error as Error).message)
        }
      }, seconds * 1000)
    } catch (error) {
      console.log((error as Error).message)
    }
  })
}

export default autuDeleter
