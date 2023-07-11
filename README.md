# root-dir-path
Retrieve the root directory path of the project, regardless of monorepo.

## Installation

```sh
npm install root-dir-path
```

## Usage

### Default

```js
import rootDirPath from 'root-dir-path'

const rootDirPath = rootDirPath(); // => '/Users/username/Projects/project-name'
```

### Monorepo

```js
// repo1/some/path/file.js
import rootDirPath from 'root-dir-path'

const monorepoRootDirPath = rootDirPath(); // => '/Users/username/Projects/monorepo/repo1'
```

```js
// repo2/some/path/file.js
import rootDirPath from 'root-dir-path'

const monorepoRootDirPath = rootDirPath(); // => '/Users/username/Projects/monorepo/repo2'
```