module.exports = {
    constants: constants
};

function constants() {
    var client = './src/client/';
    var clientApp =  client + 'app/';
    var server = './src/server/';
    var specRunnerFile = 'specs.html';
    var nodeModules = 'node_modules';

    var temp = './.tmp/';
    var bower = {
        json: require('../bower.json'),
        directory: './bower_components/',
        ignorePath: '../..'
    };
    var cons = {
        client: client,
        clientApp: clientApp,
        temp: temp,
        build: './build/',
        bower: bower,
        html: client + '**/*.html',
        less: client + 'styles/styles.less',
        lessWatch: client + 'styles/**/*.less',
        index: client + 'index.html',
        css: temp + 'styles.css',
        js: [
            clientApp + '**/*.module.js',
            clientApp + '**/*.js',
            '!' + clientApp + '**/*.spec.js'
        ],
        jsOrder: [
            '**/app.module.js',
            '**/*.module.js',
            '**/*.js'
        ],
        testlibraries: [
            nodeModules + '/mocha/mocha.js',
            nodeModules + '/chai/chai.js',
            nodeModules + '/sinon-chai/lib/sinon-chai.js'
        ],
        specRunnerFile: specRunnerFile,
        specHelpers: [client + 'test-helpers/*.js'],
        serverIntegrationSpecs: [client + '/tests/server-integration/**/*.spec.js'],
        templateCache: {
            file: 'templates.js',
            options: {
                module: 'app.core',
                root: 'app/',
                standalone: false
            }
        },
        server: server,
        nodeServer: server + 'app.js',
        report: './report/'

    }
    return cons;
}
