import { AssistantPackage, RuleDefinition } from '@sketch-hq/sketch-assistant-types'

const tokens: RuleDefinition = {
  rule: async (context) => {
    context.utils.report('Hello world')
  },
  name: '@ap.cx/sketch-assistant-colors/tokens',
  title: 'Colors Tokens',
  description: 'Reports a tokens message',
}

const assistant: AssistantPackage = async () => {
  return {
    name: '@ap.cx/sketch-assistant-colors',
    rules: [tokens],
    config: {
      rules: {
        '@ap.cx/sketch-assistant-colors/tokens': { active: true },
      },
    },
  }
}

export default assistant
