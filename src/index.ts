#!/usr/bin/env node

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { config, getJson } from 'serpapi'
import Yargs from 'yargs'

import { schemas } from './params/index.js'

const runServer = async () => {
  const { apiKey } = await Yargs(process.argv)
    .option('api-key', {
      alias: 'k',
      type: 'string',
      description: 'API Key for the SerpApi',
      demandOption: true,
    })
    .parse()

  // Create an MCP server
  const server = new McpServer({
    name: 'mcp-serpapi',
    version: '0.1.0',
  })

  config.api_key = apiKey

  // Add tools
  for (const schema of schemas) {
    server.registerTool(
      schema.name,
      {
        description: schema.description,
        inputSchema: schema.params,
      },
      async (paramters) => {
        try {
          const response = await getJson({
            ...paramters,
            engine: schema.name,
            api_key: apiKey,
          })

          return {
            content: [
              {
                type: 'text',
                text: JSON.stringify(response) as string,
              },
            ],
          }
        } catch (error) {
          return {
            content: [
              {
                type: 'text',
                text: `Error fetching data: ${error instanceof Error ? error.message : String(error)}`,
              },
            ],
          }
        }
      },
    )
  }

  const transport = new StdioServerTransport()

  await server.connect(transport)
}

runServer().catch((err) => {
  console.error('Error starting MCP server:', err)
  process.exit(1)
})
