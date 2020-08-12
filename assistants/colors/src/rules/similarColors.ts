import { RuleDefinition } from '@sketch-hq/sketch-assistant-types'

const similarColors: RuleDefinition = {
  rule: async (context) => {
    context.utils.report('Hello world')
  },
  name: '@ap.cx/sketch-assistant-colors/similarColors',
  title: 'Similar Colors',
  description: 'Reports a Similar Colors very close or too close',
}

export default similarColors
