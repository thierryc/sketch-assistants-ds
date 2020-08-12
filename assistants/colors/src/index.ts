import { AssistantPackage, RuleDefinition } from '@sketch-hq/sketch-assistant-types'

const tokens: RuleDefinition = {
  rule: async (context) => {
    context.utils.report('Hello world')
  },
  name: '@ap.cx/sketch-assistant-colors/tokens',
  title: 'Colors Tokens',
  description: 'Reports a tokens message',
}

const colorBlind: RuleDefinition = {
  rule: async (context) => {
    context.utils.report('Hello world')
  },
  name: '@ap.cx/sketch-assistant-colors/colorBlind',
  title: 'Colors Blindless',
  description: 'Reports a colorBlind message',
}

const similarColors: RuleDefinition = {
  rule: async (context) => {
    context.utils.report('Hello world')
  },
  name: '@ap.cx/sketch-assistant-colors/similarColors',
  title: 'Similar Colors',
  description: 'Reports a Similar Colors very close or too close',
}

const assistant: AssistantPackage = async () => {
  return {
    name: '@ap.cx/sketch-assistant-colors',
    rules: [tokens, colorBlind, similarColors],
    config: {
      rules: {
        '@ap.cx/sketch-assistant-colors/tokens': { active: true, severity: 3 },
        '@ap.cx/sketch-assistant-colors/colorBlind': { active: true, severity: 2 },
        '@ap.cx/sketch-assistant-colors/similarColors': { active: true, severity: 1 },
      },
    },
  }
}

export default assistant
