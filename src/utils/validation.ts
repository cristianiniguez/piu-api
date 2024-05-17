import { ZodType, z } from 'zod'
import { songSchema } from 'data/schemas'

function validateSchema<T, Z extends ZodType<T>>(dto: unknown, schema: Z): z.infer<Z> {
  const { data, success, error } = schema.safeParse(dto)
  if (!success) throw error
  return data
}

export const validateMapVersionToSongsList = (map: any) => validateSchema(map, z.record(z.record(songSchema)))
