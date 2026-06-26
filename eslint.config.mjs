import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'

export default defineConfig([
    ...nextVitals,
    globalIgnores([
        '.next/**',
        'oswaldorosalesdev.com/**',
        'out/**',
        'build/**',
        'next-env.d.ts',
    ]),
])
