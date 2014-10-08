Package.describe({
  summary: "Npm 'sloc' package integration",
  version: "1.0.0",
  git: " \* Fill me in! *\ "
});

// packages/spooky/package.js
Npm.depends({
  'sloc': '0.1.7' // Where x.x.x is the version, e.g. 0.3.2
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3.1');
  api.addFiles('sloc.js');
  api.export('Sloc', ['server', 'client']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('sloc');
  api.addFiles('sloc-tests.js');
});
