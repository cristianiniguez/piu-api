import { z } from "zod";

export const songSchema = z.object({
  id: z.string(),
  name: z.string(),
  artist: z.string(),
  bpm: z.number().positive(),
  type: z.enum(['arcade', 'remix', 'fullsong', 'shortcut']),
  category: z.enum(['original', 'k-pop']),
  steps: z.record(z.array(z.array(z.object({
    level: z.number().nonnegative(),
    versionId: z.string()
  }))))
})
