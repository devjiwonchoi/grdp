import rootDirPath from 'root-dir-path'

describe('rootDirPath', () => {
  it('should end with repo2', () => {
    const result = rootDirPath()
    expect(result.endsWith('repo2')).toBe(true)
  })
})
