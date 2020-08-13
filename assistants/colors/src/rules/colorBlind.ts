import { RuleDefinition } from '@sketch-hq/sketch-assistant-types'

const colorBlind: RuleDefinition = {
  rule: async (context) => {
    context.utils.report('Hello world')
  },
  name: '@ap.cx/sketch-assistant-colors/colorBlind',
  title: 'Colors less visible by Blindless peoples',
  description:
    'Color blindness, also known as color vision deficiency, is the decreased ability to see color or differences in color.',
}

export default colorBlind
