import { z } from 'zod'
import { CategoryResponseSchema } from '../schema/drinks.schema'

export type CategoryResponseType = z.infer<typeof CategoryResponseSchema>
