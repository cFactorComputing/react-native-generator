const { execSync } = require('child_process');

execSync('export ENVFILE=config/debug.properties');
execSync('yarn run build');
execSync('concurrently -r "yarn run watch" "react-native run-android"');
