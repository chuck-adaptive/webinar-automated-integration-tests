/* global fin, browser */
const spawn = require('child_process').spawn
const fork = require('child_process').fork
// fs.remove doesn't delete non-empty dirs in node < 12.10 so we need fs-extra
const fs = require('fs-extra')
const os = require('os')
const path = require('path')

var temp_profile = "";

exports.config = {
  specs: [
    './test/*.js'
  ],
  maxInstances: 10,
  capabilities: [{
    maxInstances: 5,
    browserName: 'chrome',
    chromeOptions: {
      extensions: [],
      binary: 'RunOpenFin.bat',
      args: ['--config=http://localhost:3000/testingapp.json',
             `--user-data-dir=${temp_profile}`]
    }
  }],
  sync: true,
  port: 9515,
  path: '/',
  logLevel: 'silent',
  coloredLogs: true,
  bail: 0,
  screenshotPath: './errorShots/',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd'
  },
  reporters: ['spec'],
  onPrepare: function (config, capabilities) {
    fork('./localhost.js')
    spawn('./chromedriver.exe')
  },
  after: function (result, capabilities, specs) {
    browser.execute(() => {
      fin.desktop.Application.getCurrent().close()
    })
  },
  beforeSuite : function (suite) {
    random_string = 'xxxxxxxx-xxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0,
    v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
  temp_profile = path.join(os.tmpdir(), `of-temp-profile-${random_string}`);
  fs.mkdirSync(temp_profile, 0744);
  },
  afterSuite: function (suite) {
    fs.remove(temp_profile, err => {
      if (err) return console.error(err)
    })
  }
}
