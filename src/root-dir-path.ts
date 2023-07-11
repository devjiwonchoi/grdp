import path from 'path'
import duplicheck from 'duplicheck'

export default function rootDirPath() {
  const currentModulePath = path.resolve(__dirname)
  const cwd = process.cwd()
  const duplicatePath = duplicheck(currentModulePath, cwd)

  if (currentModulePath.includes('/node_modules/')) {
    return currentModulePath.split('/node_modules/')[0]
  }

  if (cwd === duplicatePath) {
    return cwd
  }

  return new Error(
    'root-dir-path is not working properly. Please report this issue to [https://github.com/devjiwonchoi/duplicheck/issues](https://github.com/devjiwonchoi/duplicheck/issues)'
  )
}
