# Integration Testing

## Quick Start

This repository is windows only as it uses the `.exe` ChromeDriver.

```bash
npm install
npm test
```

## What's Happening

Using [WebdriverIO](http://webdriver.io/), the `test` script
* Reads the [config file](wdio.conf.js)
* The `onPrepare` call hosts the app locally & starts Chromedriver.exe
* In place of the Chrome binary, `RunOpenFin.bat` is called to pass the remote-debugging-port to the OpenFin runtime
* The hello world test runs
* After the test runs, `.close()` is called on the app
