import rootDirPath from 'root-dir-path'

describe('rootDirPath', () => {
  it('should end with repo1', () => {
    const result = rootDirPath()
    expect(result.endsWith('repo1')).toBe(true)
  })
})
