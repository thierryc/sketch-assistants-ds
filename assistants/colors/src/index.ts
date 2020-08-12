import { AssistantPackage } from '@sketch-hq/sketch-assistant-types'
import tokens from './rules/tokens'
import colorBlind from './rules/colorBlind'
import similarColors from './rules/similarColors'

import colors from './tokens/colors'

const assistant: AssistantPackage = async () => {
  return {
    name: '@ap.cx/sketch-assistant-colors',
    rules: [tokens, colorBlind, similarColors],
    config: {
      rules: {
        '@ap.cx/sketch-assistant-colors/tokens': {
          active: true,
          severity: 3,
          colors,
        },
        '@ap.cx/sketch-assistant-colors/colorBlind': { active: true, severity: 2 },
        '@ap.cx/sketch-assistant-colors/similarColors': { active: true, severity: 1 },
      },
    },
  }
}

export default assistant
