import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:"skSjUSKVBnA9NeRU3GuwmpommkhGBCIiqOoByQfjvZEfgRd96uVVdSu52l9sMv9NHN7V9Pfvys4cZw4MjiBoqA1Q3CCdqSJIrysFAx6ASdSOtKUAfjAMAE6QuUiTAPCgTArAxuQG3xcSEiZihU0rXnMCZd73TnfPxcReYSFX7KvVEZEgYoGH",
})
