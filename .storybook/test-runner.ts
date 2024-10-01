import {getStoryContext, TestRunnerConfig} from '@storybook/test-runner'
import { injectAxe, checkA11y } from 'axe-playwright'

type RuleArray = { id: string, enabled: boolean }[]
type RuleObject = {[key: string]: {enabled: boolean}}

const convertRules = (ruleArray?: RuleArray): RuleObject => {
  const ruleObject: RuleObject = {}
  if (ruleArray) {
    for (const rule of ruleArray) {
      ruleObject[rule.id] = { enabled: rule.enabled }
    }
  }
  return ruleObject
}

/*
 * See https://storybook.js.org/docs/writing-tests/test-runner#test-hook-api
 * to learn more about the test-runner hooks API.
 */
const config: TestRunnerConfig = {
  async preVisit(page) {
    await injectAxe(page)
  },
  async postVisit(page, context) {
    const storyContext = await getStoryContext(page, context)

    if (storyContext.parameters?.a11y?.disable) {
      return
    }

    await checkA11y(page, '#storybook-root', {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
      axeOptions: {
        rules: convertRules(storyContext.parameters?.a11y?.config?.rules)
      }
    });
  },
}

export default config;
