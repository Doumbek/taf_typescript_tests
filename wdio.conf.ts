const versions = {
    chrome: '94.0.4606.61',
    chromiumedge: '95.0.997.1'
}

export const config: WebdriverIO.Config = {
    specs: [
        './test/specs/**/*.ts'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 2,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
            acceptInsecureCerts: true,
            port: 5555
        },
        {
            maxInstances: 1,
            browserName: 'MicrosoftEdge',
            acceptInsecureCerts: true,
            port: 5555
        }
    ],

    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',
    logLevels: {
        webdriver: 'info'
    },
    baseUrl: 'https://the-internet.herokuapp.com/',
    waitforTimeout: 3000,
    waitforInterval: 500,

    connectionRetryTimeout: 10000,
    connectionRetryCount: 1,

    services: [
        [
            'selenium-standalone', {
                installArgs: {
                    drivers: {
                        chrome: {
                            version: versions.chrome,
                            arch: process.arch,
                            baseURL: "https://chromedriver.storage.googleapis.com"
                        },
                        chromiumedge: {
                            version: versions.chromiumedge,
                            arch: process.arch,
                            baseURL: "https://msedgedriver.azureedge.net"
                        }
                    }
                },
                drivers: {
                    chrome: versions.chrome,
                    chromiumedge: versions.chromiumedge
                },
                args: {
                    seleniumArgs: ['--port', '5555'],
                }

            }
        ]
    ],
    framework: 'mocha',
    reporters: [
        'spec',
        [
            'allure', {
                outputDir: 'allure-results'
            }
        ]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
