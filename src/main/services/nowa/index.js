import mkdirp from 'mkdirp';
// import { join } from 'path';

import Nowa from './nowa';
import { existsNowa, writeNowaVer } from './utils';
// import { writeFileSync } from 'fs';
import { NOWA_INSTALL_DIR } from '../paths';

try {
  if (!existsNowa()) {
    mkdirp.sync(NOWA_INSTALL_DIR);
    writeNowaVer({});
  }
} catch (e) {
  console.log(e);
}

const iwant = ['nowa', 'nowa-init', 'nowa-server', 'nowa-build', 'nowa-lib', 'nowa-dep'];

const nowa = new Nowa(iwant);

export default nowa;
