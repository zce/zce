#!/usr/bin/env node

import { register } from 'node:module'

register('import-jsx', import.meta.url)

await import('./app.js')
