import rootDirPath from '../src/root-dir-path'

describe('rootDirPath', () => {
  it('should return the same path as process.cwd()', () => {
    const cwd = process.cwd()
    const result = rootDirPath()
    expect(result).toBe(cwd)
  })
})
