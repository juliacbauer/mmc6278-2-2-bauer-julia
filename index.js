const { program } = require("commander");
const fs = require("fs/promises");
const chalk = require("chalk");
const QUOTE_FILE = "quotes.txt";

program
  .name("quotes")
  .description("CLI tool for inspiration")
  .version("0.1.0");

program
  .command("getQuote")
  .description("Retrieves a random quote")
  .action(async () => {

    // TODO: Pull a random quote from the quotes.txt file
    // console log the quote and author
    // You may style the text with chalk as you wish

    try {

      const quote = await fs.readFile('./quotes.txt', 'utf-8')
      const quoteLine = quote.trim().split('\n')
      const randomQuote = quoteLine[Math.floor(Math.random() * quoteLine.length)]

      console.log(`${chalk.bgCyan(randomQuote)}`)
    } catch (err) {

      console.log(err)

    }

  });

program
  .command("addQuote <quote> [author]")
  .description("adds a quote to the quote file")
  .action(async (quote, author) => {

    // TODO: Add the quote and author to the quotes.txt file
    // If no author is provided,
    // save the author as "Anonymous".
    // After the quote/author is saved,
    // alert the user that the quote was added.
    // You may style the text with chalk as you wish
    // HINT: You can store both author and quote on the same line using
    // a separator like pipe | and then using .split() when retrieving

    try {

      if (!author) {
        author = `Anonymous`
      }

      const myQuote = `${quote} | ${author} \n`
  

      await fs.appendFile('./quotes.txt', myQuote)
      console.log(`${chalk.green("Quote added!")}`)
      console.log(`${chalk.bgYellow(quote)} | ${chalk.magenta(author)}`)


    } catch (err) {

      console.log(err)

    }
    
  });

program.parse();
