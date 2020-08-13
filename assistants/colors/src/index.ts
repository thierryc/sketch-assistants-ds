import { AssistantPackage } from '@sketch-hq/sketch-assistant-types'
import tokens from './rules/tokens'
import colorBlind from './rules/colorBlind'
import similarColors from './rules/similarColors'

import jsonColors from './tokens/colors.json'

const colors: string[] = jsonColors

/**
 * Deuteranomaly (green deficient: M cone defect)	5.0%	0.35% = level 1 (Deuteranomaly)
 * Protanomaly (red deficient: L cone defect)	1.3%	0.02% = level 2 (level 1 + Protanomaly)
 * Tritanomaly (blue deficient: S cone defect)	0.0001%	0.0001% = level 3 (level 3 + Tritanomaly)
 * https://en.wikipedia.org/wiki/Color_blindness
 */

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
        '@ap.cx/sketch-assistant-colors/colorBlind': {
          active: true,
          severity: 2,
          exclusionPattern: '',
          level: 1, // Anomalous trichromacy Deuteranomaly
        },
        '@ap.cx/sketch-assistant-colors/similarColors': { active: true, severity: 1 },
      },
    },
  }
}

export default assistant
