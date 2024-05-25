(async () => {
  const { pdfTextExtract } = require('../index')
  console.log('Manual tests because jest dont work out of the box with pdfjs-dist, and I am lazy')
  {
    console.log('PATH. Example-pdf 1 (one page, one column, some text here and there with different styling')
    const pdfData = await pdfTextExtract({ url: './tests/data/example-pdf.pdf', verbosity: 0 })
    const lineCheck = pdfData.pages[0].textLines[4] === 'SOME Larger TEXT'
    console.log('\t Check that lines are in place')
    if (!lineCheck) throw new Error('Missing "SOME Larger TEXT" on page 1 line 5')
    console.log('\t Check that metadata is present')
    if (!pdfData.metadata) throw new Error('Missing metadata')
    console.log('\t Check that styles are present')
    if (!pdfData.styles) throw new Error('Missing styles')
    console.log('\t Check that textItems are present')
    if (!pdfData.pages[0].textItems[5].str) throw new Error('Missing texItem on page 1, item 5')
  }

  {
    console.log('PATH. Example-pdf 2 (two pages, two columns, some text here and there with different styling, even some vertical text')
    const pdfData = await pdfTextExtract({ url: './tests/data/example-pdf-2.pdf', verbosity: 0 })
    const lineCheck = pdfData.pages[1].textLines[1] === 'maybe not if the text is really malformed'
    console.log('\t Check that lines are in place')
    if (!lineCheck) throw new Error('Missing "maybe not if the text is really malformed" on page 2 line 2')
    console.log('\t Check that metadata is present')
    if (!pdfData.metadata) throw new Error('Missing metadata')
    console.log('\t Check that styles are present')
    if (!pdfData.styles) throw new Error('Missing styles')
    console.log('\t Check that textItems are present')
    if (!pdfData.pages[0].textItems[3].str) throw new Error('Missing texItem on page 1, item 4')
  }

  {
    console.log('UINT8ARRAY. Example-pdf 2 (two pages, two columns, some text here and there with different styling, even some vertical text')
    const { readFileSync } = require('fs')
    const buff = readFileSync('./tests/data/example-pdf-2.pdf')
    const uint8Arr = new Uint8Array(buff)
    const pdfData = await pdfTextExtract({ data: uint8Arr, verbosity: 0 })
    const lineCheck = pdfData.pages[1].textLines[1] === 'maybe not if the text is really malformed'
    console.log('\t Check that lines are in place')
    if (!lineCheck) throw new Error('Missing "maybe not if the text is really malformed" on page 2 line 2')
    console.log('\t Check that metadata is present')
    if (!pdfData.metadata) throw new Error('Missing metadata')
    console.log('\t Check that styles are present')
    if (!pdfData.styles) throw new Error('Missing styles')
    console.log('\t Check that textItems are present')
    if (!pdfData.pages[0].textItems[3].str) throw new Error('Missing texItem on page 1, item 4')
  }

  {
    console.log('UINT8ARRAY. Example-pdf 2 (two pages, two columns, some text here and there with different styling, even some vertical text')
    const { readFileSync } = require('fs')
    const buff = readFileSync('./tests/data/example-pdf-2.pdf')
    const uint8Arr = new Uint8Array(buff)
    const pdfData = await pdfTextExtract({ data: uint8Arr, verbosity: 0 })
    const lineCheck = pdfData.pages[1].textLines[1] === 'maybe not if the text is really malformed'
    console.log('\t Check that lines are in place')
    if (!lineCheck) throw new Error('Missing "maybe not if the text is really malformed" on page 2 line 2')
    console.log('\t Check that metadata is present')
    if (!pdfData.metadata) throw new Error('Missing metadata')
    console.log('\t Check that styles are present')
    if (!pdfData.styles) throw new Error('Missing styles')
    console.log('\t Check that textItems are present')
    if (!pdfData.pages[0].textItems[3].str) throw new Error('Missing texItem on page 1, item 4')
  }

  console.log('Finished with tests - all are well in the land, carry on')
})()
