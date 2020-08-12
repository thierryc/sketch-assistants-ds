import { RuleDefinition } from '@sketch-hq/sketch-assistant-types'

const tokens: RuleDefinition = {
  rule: async (context) => {
    const { utils } = context

    // Get a configuration option named "pattern"
    const colors = utils.getOption('colors')
    if (typeof colors !== 'object' || !Array.isArray(colors)) {
      throw Error()
    }

    context.utils.report(colors.join(', '))
  },
  name: '@ap.cx/sketch-assistant-colors/tokens',
  title: 'Colors Tokens',
  description: 'Reports a tokens message',
}

export default tokens
