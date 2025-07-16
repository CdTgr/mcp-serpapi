import { INodeProperties } from 'n8n-workflow'
import { z, ZodSchema } from 'zod'

const stringNode = (
  object: Record<string, ZodSchema>,
  node: INodeProperties,
) => {
  let zod: ZodSchema = z.string().describe(node.description || '')
  if (!node.required) {
    zod = zod.optional()
  }

  object[node.name] = zod

  return object
}

const numberNode = (
  object: Record<string, ZodSchema>,
  node: INodeProperties,
) => {
  let zod: ZodSchema = z.number().describe(node.description || '')
  if (!node.required) {
    zod = zod.optional()
  }

  object[node.name] = zod

  return object
}

const booleanNode = (
  object: Record<string, ZodSchema>,
  node: INodeProperties,
) => {
  let zod: ZodSchema = z.boolean().describe(node.description || '')
  if (!node.required) {
    zod = zod.optional()
  }

  object[node.name] = zod

  return object
}

const choiceNode = (
  object: Record<string, ZodSchema>,
  node: INodeProperties,
) => {
  const options = (node.options as { name: string; value: string }[]).map(
    (o) => o.value,
  )
  let zod: ZodSchema = z.enum(options as ['']).describe(node.description || '')
  if (!node.required) {
    zod = zod.optional()
  }

  object[node.name] = zod

  return object
}

export const toParams = (nodes: INodeProperties[]) => {
  const object = {}
  for (const node of nodes) {
    switch (node.type) {
      case 'string':
        stringNode(object, node)
        break
      case 'number':
        numberNode(object, node)
        break
      case 'boolean':
        booleanNode(object, node)
        break
      case 'hidden':
        break
      case 'collection':
        toParams(node.options as INodeProperties[])
        break
      case 'options':
        choiceNode(object, node)
        break
      default:
        console.warn(`Unknown node type: ${node.type} for node ${node.name}`)
    }
  }

  return object
}
