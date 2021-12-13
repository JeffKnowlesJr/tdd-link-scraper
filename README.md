# Link Parser

This link parser uses Node { fs, child_process}, Axios, Cheerio, and Nodemon to extract and open a .csv list of links from your web pages in Excel. The application will get an html file from the URL that you specify and store it locally. It will parse the document object model extracted from your html file and store the links and link text in an object in memory. These objects are formatted into rows and then appended to a csv file that is generated or regenerated when the application runs.

This application was built with knowledge learned via [Web Scraping in Nodejs & JavaScript](https://www.udemy.com/course/web-scraping-in-nodejs/) by [Stefan Hyltoft](https://www.udemy.com/user/stefan-hyltoft/)

## Configuration

You'll need to have [Node.js](https://nodejs.org/en/download/) installed. \([NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) doesn't recommend using a Node.js installer but lets ignore that for now!\)

You'll also need to have [Git](https://git-scm.com/) installed unless you plan on downloading this repository manually. (In which case ignore the git clone command)

## Installation and use

From your command line:

    git clone https://github.com/JeffKnowlesJr/tdd-link-scraper

    cd tdd-link-scraper

    npm install

At this point you'll want to create a .env file with a property as follows (replace your-url-here with your website that you want to scrape):

    URL=https://your-url-here.com

Back to your command line:

This command will get the HTML file from your website and store it

    npm run prepare

This command will run the parser, and keep it running watching for changes in the HTML file

    npm run dev

When you want to run the parser on another website, just update your .env file and run the prepare command again.
