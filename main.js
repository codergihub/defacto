
const { puppeteerCrawler } = require('wflows')

const { handlePageFunction } = require('./handlePageFunction')

console.log('workflow_moda has run')


async function crawler() {

    console.log('main js defacto workflow', process.env.PAGE_URL)
    debugger;
    const crawler = await puppeteerCrawler({
        handlePageFunction, headless: process.env.LOCAL === 'TRUE' ? false : true, preNavHook: null, postNavHook: null,

        urls: [{ url: process.env.PAGE_URL, userData: {}, batchName: 'kadin-elbise', unshift: false, retry: false, retries: 0, sync: false }],

        batches: [{ batchName: 'kadin-elbise', concurrencyLimit: 20, retries: 3 }]
    })

    crawler.on('BROWSER_CLOSED', async () => {

        console.log('exiting....')


    })

}

crawler()