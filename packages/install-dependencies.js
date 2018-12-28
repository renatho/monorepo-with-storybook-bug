const { lstatSync, readFileSync, readdirSync, existsSync } = require('fs');
const { join } = require('path');
const { exec } = require('child_process');

const packagesPath = 'packages/';
const packageJsonFilename = 'package.json';

const isDirectory = path => lstatSync(path).isDirectory()
const getPackages = path =>
    readdirSync(path).map(i => join(path, i)).filter(isDirectory)

getPackages(packagesPath).forEach(p => {
    const packageJsonPath = join(p, packageJsonFilename);

    const existsPackageJson = existsSync(packageJsonPath);
    if (!existsPackageJson) return;

    const packageJson  = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
    if (!packageJson.dependencies && !packageJson.devDependencies) return;

    console.log(`Installing ${p} dependencies...`);
    exec(`npm i ${p}`, (err, stdout, stderr) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log(stdout);
        console.log(stderr);
    });
});
