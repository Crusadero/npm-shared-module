/* eslint-disable @typescript-eslint/no-require-imports */

const childProcessExec = require('child_process').exec;
const util = require('util');
const fs = require('fs');
const exec = util.promisify(childProcessExec);
const path = require('path');

const procecessHook = async () => {
  await updateVersions();
};

const updateVersions = async () => {
  const isGitMerge = fs.existsSync(path.resolve(__dirname, '../.git/MERGE_HEAD'));
  if (!isGitMerge) return;

  const packageJSON = require('../package.json')
  const packageLock = require('../package-lock.json')

  const releasePackegeJSONRequest = await exec('git show HEAD:package.json')
  const releasePackegeJSON = JSON.parse(releasePackegeJSONRequest.stdout)
  const releaseVersion = releasePackegeJSON.version;

  fs.writeFileSync(path.resolve(__dirname,'../package.json'), JSON.stringify({
    ...packageJSON,
    version: releaseVersion,
  }, null, 2) + '\n')

  fs.writeFileSync(path.resolve(__dirname,'../package-lock.json'), JSON.stringify({
    ...packageLock,
    version: releaseVersion,
    packages: {
      ...packageLock.packages,
      ['']: {
        ...packageLock.packages[''],
        version: releaseVersion,
      },
    },
  }, null, 2) + '\n')

  await exec('git add package.json package-lock.json')
};

procecessHook();