import path from 'path'

export const src = path.resolve(__dirname, '../src')
export const R = (...p) => path.resolve(__dirname, '../', ...p)
export const dist = path.resolve(__dirname, '../dist')

export const publish = path.resolve(__dirname, '../publish')
