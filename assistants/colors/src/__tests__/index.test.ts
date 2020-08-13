import { resolve } from 'path'
import { testAssistant } from '@sketch-hq/sketch-assistant-utils'

import Assistant from '..'

test('test assistant', async () => {
  const { violations, ruleErrors } = await testAssistant(
    resolve(__dirname, './empty.sketch'),
    Assistant,
  )
  expect(violations[0].message).toBe(
    '["#581374","#C40050","#F5F5F5","#FFFFFF","#000000","#333333"]',
  )
  expect(ruleErrors).toHaveLength(0)
})
