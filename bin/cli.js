#!/usr/bin/env node

const path = require('path');
const replace = require('replace');
const execSync = require('child_process').execSync;
const readline = require('readline');
const fse = require('fs-extra');

const PROJECT_NAME = "XX_PROJECT_NAME_XX";
const APP_ID = "XX_APPLICATION_ID_XX";
const ANDROID_SRC_PATH = 'android/app/src/main/java/';
const BOILERPLATE_DIR = path.join(__dirname, '..', 'boilerplate');

const replaceInProject = (oldStr, newStr, appDir) => {
  replace({
    regex: oldStr,
    replacement: newStr,
    paths: [appDir],
    recursive: true,
    silent: true,
    exclude: 'generator.js'
  });
};

const generate = function (appName, appId) {
  const appDir = `${process.cwd()}/${appName}/`;
  fse.mkdirsSync(appDir);
  fse.copySync(BOILERPLATE_DIR, appDir, {
    filter: (src, dest) => {
      return src.indexOf('node_modules') === -1;
    }
  });

  console.log('Setting Project Name(MyAwesomeApp): ' + appName);
  replaceInProject(PROJECT_NAME, appName, appDir);

  console.log('Setting App Identifier: ' + appId);
  replaceInProject(APP_ID, appId, appDir);

  console.log('Setting Project Folder:' + appName);
  const renamerCli = path.join(__dirname, '..', 'node_modules/renamer/bin/cli.js');
  const command = `${renamerCli} --find '${PROJECT_NAME}' --replace '${appName}' '${appDir}**'`;
  execSync(command);

  console.log('Copying Android Source files');
  const fullPath = appDir + ANDROID_SRC_PATH + appId.split('.').join('/');
  fse.mkdirsSync(fullPath);
  fse.moveSync(`${appDir}${ANDROID_SRC_PATH}${APP_ID}`, fullPath, {overwrite: true});

  console.log('Created Project at ' + appDir);
};


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('\nApp Name: ', (appName) => {
  rl.question('\nApp Identifier: ', (appId) => {
    generate(appName, appId);

    rl.close();
  });
});

