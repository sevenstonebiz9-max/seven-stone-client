import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { article } from './schemas/article'

export default defineConfig({
  name: 'Hamptons Hills Admin',
  title: 'Hamptons Hills Gravestones',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  basePath: '/studio',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [article],
  },
})