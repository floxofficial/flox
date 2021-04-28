const electronInstaller = require('electron-winstaller');

const resultPromise = electronInstaller.createWindowsInstaller({
  exe: 'Flox.exe',
  authors: 'Flox',
  outputDirectory: './dist/installer',
  appDirectory: './dist/Flox-win32-x64',
});

resultPromise.then(
  () => console.log('Successful'),
  (e) => console.log(`Error: ${e.message}`),
);
