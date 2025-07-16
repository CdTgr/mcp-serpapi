# 🔍 Simple MCP Server for SerpAPI

A lightweight command-line tool to query [SerpAPI](https://serpapi.com/) using the **Model Context Protocol (MCP)**.

Use this tool to connect your AI or context-aware systems to real-time search results via SerpAPI.

> 🙌 Contributions are welcome!

---

## 🚀 Installation

Install globally via npm:

```sh
npm i -g mcp-serpapi
```

## 🛠️ Usage & Debugging

To test and debug your MCP server connection, use the official MCP Inspector:

```sh
npx @modelcontextprotocol/inspector mcp-serpapi \
  --api-key YOUR_SERPAPI_KEY
```

## 📘 CLI Options

View all available CLI options by running:

```sh
mcp-serpapi --help
```

| Option      | Alias | Type   | Required | Description              |
| ----------- | ----- | ------ | -------- | ------------------------ |
| `--api-key` | `-k`  | string | Yes      | Your SerpAPI private key |

## 💬 Feedback & Contributions

If you encounter issues, have suggestions, or want to contribute, feel free to open an [issue or pull request](https://github.com/CdTgr/mcp-serpapi).

## 📄 License

[MIT](./LICENSE) © 2025 GhosT
