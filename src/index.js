var yargs  = require('yargs');
var init   = require('./init.js');
var server = require('./server.js');

function fatalError(err) {
  console.log(err);
  console.log("\nRun with -h for usage instructions.");
  process.exit();
}

var argv = yargs.usage('Usage: $0 <command> [options]')
                .command('init', 'Initialize the capture directory in the current directory')
                .demand(1)
                .boolean('d')
                .describe('d', 'Delete existing directory structure')
                .example('$0 init')
                .command('server', 'Run the capture HTTP server in current directory')
                .demand(1)
                .example('$0 server')
                .argv;

var command = argv._[0];

switch (command) {
  case 'init':
    init(argv.d);
    break;
  case 'server':
    server(argv.d);
    break;
  default:
    fatalError(`Invalid command ${command}`);
    break;
}
