# Automated Integration Testing

## Overview
This repo is an example on how to implement automated integration tests with WebdriveIO

### Assumptions
This repository is windows only as it uses the `.exe` ChromeDriver.

## Getting Started
Using [WebdriverIO](http://webdriver.io/), the `test` script
* Reads the [config file](wdio.conf.js)
* The `onPrepare` call hosts the app locally & starts Chromedriver.exe
* In place of the Chrome binary, `RunOpenFin.bat` is called to pass the remote-debugging-port to the OpenFin runtime
* The hello world test runs
* After the test runs, `.close()` is called on the app
* Install required build tools: `npm install --global --production windows-build-tools`

## Launch
### Run locally

```bash
npm install
npm test
```

## Disclaimers
* This is a starter example and intended to demonstrate to app providers a sample of how to approach an implementation. There are potentially other ways to approach it and alternatives could be considered. 
* Its possible that the repo is not actively maintained.

## License
MIT

The code in this repository is covered by the included license.

However, if you run this code, it may call on the OpenFin RVM or OpenFin Runtime, which are covered by OpenFin’s Developer, Community, and Enterprise licenses. You can learn more about OpenFin licensing at the links listed below or just email us at support@openfin.co with questions.

https://openfin.co/developer-agreement/ <br/>
https://openfin.co/licensing/


## Support
Please enter an issue in the repo for any questions or problems. 
<br> Alternatively, please contact us at support@openfin.co
