const program = require("commander");
const check = require("../commands/check");



program
    .command('price')
    .description('Check Price of Coins')
    .option(
        '--coin <type>',
        'Add specific coin types in CSV',
        'BTC,ETH,XMR')

    .option('--cur <currency>', 'Change the Currency', 'EUR')
    .action((cmd) => { check.price(cmd) });

program.parse(process.argv);