/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');

const preCommit = fs.readFileSync('./.github/hooks/pre-commit');
fs.writeFileSync('./.husky/pre-commit', preCommit);