import rootDirPath from 'root-dir-path'

describe('rootDirPath', () => {
  it('should end with default', () => {
    const result = rootDirPath()
    expect(result.endsWith('default')).toBe(true)
  })
})
