import { createOpenRouter } from '@openrouter/ai-sdk-provider'

// api key: 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
export const openrouter = createOpenRouter({
  apiKey: import.meta.env.VITE_OPENROUTER_KEY
})
