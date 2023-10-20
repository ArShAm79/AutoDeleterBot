# Telegram Message Auto-Deleter Bot

## Description

Telegram Message Auto-Deletion Bot is a simple yet powerful Telegram bot that automatically deletes messages after a specified time. Built with TypeScript and the Telegraf library, this bot offers an efficient solution for managing chat clutter and ensuring privacy.

## Features

- **Message Self-Destruction**: Set a timer for messages to automatically self-destruct after a predefined time, keeping chats clean and private.
- **Configurability**: Easily configure the bot's behavior to suit your needs.
- **Telegram Integration**: Seamlessly integrates with the Telegram platform.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)

## Prerequisites

Before you can run this bot, you'll need the following:

- [Node.js](https://nodejs.org/) installed on your system.
- A Telegram bot token. You can obtain one by talking to the [BotFather](https://core.telegram.org/bots#botfather) on Telegram.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Arsham79/AutoDeleterBot.git

   ```

2. Change into the project directory:

   ```bash
   cd AutoDeleterBot
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a .env file in the root directory with the following content:

   ```bash
   BOT_TOKEN=<your_bot_token>
   ```

## Usage

To start the bot in development mode, run the following command:

```bash
npm run dev
```

This command uses nodemon to automatically reload the server when you make changes to your code.

To build and run the bot in production mode, use the following commands:

```bash
npm run build
npm start
```
