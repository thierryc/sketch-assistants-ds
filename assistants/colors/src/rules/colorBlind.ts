import { RuleDefinition } from '@sketch-hq/sketch-assistant-types'

const colorBlind: RuleDefinition = {
  rule: async (context) => {
    context.utils.report('Hello world')
  },
  name: '@ap.cx/sketch-assistant-colors/colorBlind',
  title: 'Colors Blindless',
  description: 'Reports a colorBlind message',
}

export default colorBlind
