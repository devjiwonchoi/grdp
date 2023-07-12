# grdp (Get Root Dir Path)
Retrieve the root directory path of the project, regardless of monorepo.

## Installation

```bash
npm install grdp
```

## Usage

### Default

```js
import getRootDirPath from 'grdp'

const rootDirPath = getRootDirPath(); // => '/Users/username/Projects/project-name'
```

### Monorepo

```js
// repo1/some/path/file.js
import rootDirPath from 'grdp'

const monorepoRootDirPath = getRootDirPath(); // => '/Users/username/Projects/monorepo/repo1'
```

```js
// repo2/some/path/file.js
import rootDirPath from 'grdp'

const monorepoRootDirPath = getRootDirPath(); // => '/Users/username/Projects/monorepo/repo2'
```