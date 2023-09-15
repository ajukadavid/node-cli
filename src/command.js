import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

yargs(hideBin(process.argv))
    .command('new <note>', 'Create a new note', (yargs) => {}, () => {
        
    })    

  .demandCommand(1)
  .parse()