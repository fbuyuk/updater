const AutoGitUpdate = require('auto-git-update');

const config = {
    repository: 'https://github.com/fbuyuk/updater.git',
    tempLocation: 'X:/Workspace/bilmatik/revbil',
    ignoreFiles: [],
    executeOnComplete: 'node app.js',
    exitOnComplete: true
}

const updater = new AutoGitUpdate(config);

updater.autoUpdate();