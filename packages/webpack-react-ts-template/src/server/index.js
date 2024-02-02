const chokidar = require('chokidar');
const fs = require('fs');

const routesFile = 'src/constans/routes.ts';
const pageFiles = 'src/page';

let routesMap = [{ path: '/', component: <App />, children: [{}] }];

// function getPageMap(pageFiles) {
//   if (!pageFiles.includes('.')) {
//     const pageChilds = fs.readdirSync(pageFiles);
//     pageChilds.forEach((child) => {
//       getPageMap(child);
//     });
//   } else {
//     if (pageFiles === 'index.tsx') {

//     }
//   }
// }



// function generateRoutes() {
//   const routes = [];
//   // const pageFile = fs.readdirSync(pageFiles);
//   const pageMap = getPageMap(pageFiles);
//   console.log(pageMap, 'pageFile');
// }

// function addDir

chokidar.watch('./src/page', { ignored: '*.module.less' }).on('all', (event, path) => {
  console.log(event, path, '=============event');
  if(event==='add'||event==='addDir'){
    
  }
  if(event==='unlink'){
    
  }
  // generateRoutes(path);
});
