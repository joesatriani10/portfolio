import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
// If you use TypeScript, uncomment the next line
// import nextTs from 'eslint-config-next/typescript'

export default defineConfig([
    ...nextVitals,
    // ...nextTs,
    globalIgnores([
        '.next/**',
        'out/**',
        'build/**',
        'next-env.d.ts',
    ]),
])