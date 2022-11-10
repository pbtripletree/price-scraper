## abstract

This script ingests a file (`sources.json`). A sample is included based on the contents of the coding prompt. This is a JSON list of objects containing a `url` to scrape and the `selector` to retrieve the desired contents.

When the script is run it follows a pull > extract > cleanse flow.

- pull: make a network request for the HTML content. Either push returned html in a list to pass down the flow, or in the case of a timeout push to an errors list to retry later. This script recursively executes with increasing timeout values, until there are no more errors or the max timeout is reached.

- extract: use the selector to retrieve text from HTML

- cleanse: format values before they're saved in a CSV

Once this is finished you'll see a `prices.csv` in the `price-scraper` root.

## setup

Install dependencies `npm install`
Run tests `npm run test`

Create a .env file in `price-scraper` root with the following variables, you can set these to whatever you like! This defines the min/max timeout parameters for recursively retrying failed network requests.

```
MIN_TIMEOUT=3750
MAX_TIMEOUT=60000
```

## run

Run `npm run scrape`, follow along with the logs, and view your CSV once finished!
