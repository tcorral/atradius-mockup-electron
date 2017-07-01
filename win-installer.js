// var electronInstaller = require('electron-winstaller');
// resultPromise = electronInstaller.createWindowsInstaller({
//     appDirectory: '/Users/tomascorralcasas/projects/electron-quick-start/Atradius-win32-x64',
//     outputDirectory: '/build/installer64',
//     authors: 'Capgemini',
//     exe: 'Atradius.exe'
//   });

// resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));
var winInstaller = require('electron-windows-installer');
winInstaller({
    appDirectory: '/Users/tomascorralcasas/projects/electron-quick-start/Atradius-win32-ia32',
    outputDirectory: '/Users/tomascorralcasas/projects/electron-quick-start/build',
    arch: 'ia32'
})
.then(function () {
    console.log('done');
})
.catch(function (error) {
    console.log('Failure:', error);
})