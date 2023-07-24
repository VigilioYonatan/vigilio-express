#!/usr/bin/env node
const { execSync } = require("child_process");
function runCommand(command) {
    try {
        execSync(`${command}`, { stdio: "inherit" });
    } catch (e) {
        console.error(`Failed to executed ${command}`, e);
        return false;
    }
    return true;
}

let pack = "npm";
const repoName = process.argv[2];
if (process.argv[3].startsWith("--package=")) {
    pack = process.argv[3].replace("--package=", "");
}
if ( process.argv[3].startsWith("-p=")) {
    pack = process.argv[3].replace("-p=", "");
}

const gitCheckoutCommand = `git clone --depth 1 https://github.com/VigilioYonatan/viigilio-express ${repoName}`;
const installDepsClientCommand = `cd ${repoName} && rm package.json && cd client && ${pack} install`;
const installDepsServeCommand = `cd .. && cd server && ${pack} install`;
console.log(`Creating repository: ${repoName}`);

const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log(`Installing dependecies for ${repoName}`);
const installedDeps = runCommand(installDepsClientCommand);
if (!installedDeps) process.exit(-1);
const installedServerDeps = runCommand(installDepsServeCommand);
if (!installedServerDeps) process.exit(-1);
console.log("Congratulation!");
