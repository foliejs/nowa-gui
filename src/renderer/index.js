import dva from 'dva';
import { ipcRenderer } from 'electron';
import Message from 'antd/lib/message';

import RouterConfig from './router';
import project from './models/project';
import layout from './models/layout';
import task from './models/task';
import init from './models/init';


import 'antd/dist/antd.min.css';

import '../assets/styles/base.css';
import '../assets/styles/site.less';

if (process.platform === 'win32') {
// if (true) {
  import('../assets/styles/isWin.less');
} else {
  import('../assets/styles/isMac.less');
}

window.AliMonitor = window.AliMonitor || [];
AliMonitor.push({
  url: 'log://uxdata/nowa/',
  msg: '{"PV":1}'
});


ipcRenderer.on('MAIN_ERR', (event, msg) => {
  Message.error(msg, /* duration */3);
});


// 1. Initialize
const app = dva({
  onError(e) {
    Message.error(e.stack, /* duration */3);
  },
});

// 2. Plugins

// 3. Model

app.model(project);
app.model(layout);
app.model(task);
app.model(init);

// 4. Router
app.router(RouterConfig);

// 5. Start
app.start('#root');
