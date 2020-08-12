import { RuleDefinition } from '@sketch-hq/sketch-assistant-types'

const tokens: RuleDefinition = {
  rule: async (context) => {
    context.utils.report('Hello world')
  },
  name: '@ap.cx/sketch-assistant-colors/tokens',
  title: 'Colors Tokens',
  description: 'Reports a tokens message',
}

export default tokens
