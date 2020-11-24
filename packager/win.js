const electronInstaller = require('electron-winstaller');

const resultPromise = electronInstaller.createWindowsInstaller({
  exe: 'Fullet.exe',
  authors: 'Fullet',
  outputDirectory: './dist/installer',
  appDirectory: './dist/Fullet-win32-x64',
});

resultPromise
  .then(
    () => console.log('Successful'),
    (e) => console.log(`Error: ${e.message}`)
  );
