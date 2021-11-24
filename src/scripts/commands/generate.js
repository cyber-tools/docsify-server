import fs from 'fs';
import os from 'os';
import {promisify} from "util";
import {cwd, exists} from '../util';
import chalk from 'chalk';
import path from 'path';
const ignoreFiles = ['_navbar', '_coverpage', '_sidebar'];

// eslint-disable-next-line
export default async function (path = '', sidebar) {
  const cwdPath = cwd(path || '.')

  if (exists(cwdPath)) {
    if (sidebar) {
      await genSidebar(cwdPath, sidebar)
      console.log(chalk.green(`Successfully generated the sidebar file '${sidebar}'.`))
      return true
    }
  }

  console.error(chalk.red(`${cwdPath}`) + ' directory does not exist.')
}

async function genSidebar(cwdPath, sidebarPath) {
  let tree = ''
  let lastPath = ''
  let nodeName = ''
  getDirFiles(cwdPath, function (pathname) {
    path.relative(pathname, cwdPath)
    pathname = pathname.replace(cwdPath + '/', '')
    let filename = path.basename(pathname, '.md')
    let splitPath = pathname.split(path.sep)

    if (ignoreFiles.indexOf(filename) === -1) {
      nodeName = '- [' + filename + '](' + pathname + ')' + os.EOL
    }

    if (splitPath.length > 1) {
      if (splitPath[0] !== lastPath) {
        lastPath = splitPath[0]
        tree += os.EOL + '- ' + splitPath[0] + os.EOL
      }

      tree += '  ' + nodeName
    } else {
      if (lastPath !== '') {
        lastPath = ''
        tree += os.EOL
      }

      tree += nodeName
    }
  });
  await promisify(fs.writeFile)(sidebarPath,tree);
};

function getDirFiles(dir, callback) {
  fs.readdirSync(dir).forEach(function (file) {
    let pathname = path.join(dir, file)

    if (fs.statSync(pathname).isDirectory()) {
      getDirFiles(pathname, callback)
    } else if (path.extname(file) === '.md') {
      callback(pathname)
    }
  })
}
