const AutoGitUpdate = require('auto-git-update');

const config = {
	repository: 'https://github.com/fbuyuk/updater.git',
	token:'277e3cf59dab4e22dde2b437376cc52aa2fa6063',
    tempLocation: 'X:/Workspace/bilmatik/revbil',
    ignoreFiles: [],
    executeOnComplete: 'node app.js',
    exitOnComplete: true
}

const updater = new AutoGitUpdate(config);

updater.autoUpdate();