const chokidar = require('chokidar');
const fs = require('fs');
const path = require('path');
const routesFilePath = path.join(path.dirname(__dirname), '/constants/routes.tsx');
const pageFiles = 'src/page';

let content = fs.readFileSync(routesFilePath, 'utf8');

var App;
// var routesMap = [{ path: '/', component: App, children: [{}] }];

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
function generateRoutes(directory) {
  const routesMap = [];
  function traverseDirectory(dirPath) {
    const files = fs.readdirSync(dirPath);
    files.forEach((file) => {
      console.log(file, 'file');
      const filePath = path.join(dirPath, file);
      const stat = fs.statSync(filePath);
      console.log(stat, 'stat');
      if (stat.isDirectory()) {
        const folderName = file;
        const folderPath = path.join(dirPath, folderName);
        traverseDirectory(folderPath);

        // const component = folderName;
        // const pathValue = `/${folderName.toLowerCase()}`;

        // const folderData = {
        //   path: pathValue,
        //   Component: component,
        //   children: [],
        // };

        // const errorPagePath = path.join(folderPath, 'ErrorPage.tsx');
        // if (fs.existsSync(errorPagePath)) {
        //   folderData.errorElement = require(errorPagePath).default;
        // }

        // routesMap.push(folderData);
      } else if (file==='index.tsx') {
        
      }
    });
  }

  traverseDirectory(directory);
  console.log(routesMap, 'routesMap');
  return routesMap;
}
// function addDir

chokidar.watch('./src/page', { ignored: '*.module.less' }).on('all', (event, path) => {
  // console.log(event, path, '=============event');
  // if (event === 'add' || event === 'addDir') {
  // }
  // if (event === 'unlink') {
  // }
  generateRoutes(path);
});
