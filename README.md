# pdf-text-extract
Node module (wrapper arount pdfjs-dist) that extracts metadata, text-content, and styling from readable pdf-files

Uses [https://www.npmjs.com/package/pdfjs-dist/v/2.16.105](https://www.npmjs.com/package/pdfjs-dist/v/2.16.105) for text-extraction 

# Usage
```bash
npm i @vestfoldfylke/pdf-text-extract
```

```js
const { pdfTextExtract } = require('@vestfoldfylke/pdf-text-extract')

// Input variants (use one of these)
const pdf = './<path-to-pdf>.pdf' // Path
const pdf = 'https://<url-to-pdf>.pdf' // Network resource. Remember to handle CORS if using url
const pdf = new Uint8Array(readFileSync('./<path-to-pdf>.pdf')) // Uint8Array (doesnt have to come from readFile - just as an example)
const pdf = { url: './<path-or url-to-pdf>.pdf', data: 'arrayBuffer or similar', verbosity: 0, ...options } // use either url or data - options are found in typedef, verboosity: 0 for suppressing logs

const pdfData = await pdfTextExtract(pdf)
console.log(pdfData)
```

Example result
```json
{
  "metadata": {
    "info": {
      "PDFFormatVersion": "1.4",
      "Language": null,
      "EncryptFilterName": null,
      "IsLinearized": false,
      "IsAcroFormPresent": false,
      "IsXFAPresent": false,
      "IsCollectionPresent": false,
      "IsSignaturesPresent": false,
      "Producer": "macOS Version 14.3.1 (Build 23D60) Quartz PDFContext",
      "CreationDate": "D:20240304093013Z00'00'",
      "ModDate": "D:20240304093013Z00'00'"
    },
    "metadata": null,
    "contentDispositionFilename": null,
    "contentLength": null,
    "numPages": 2
  },
  "pages": [
    {
      "pageNumber": 1,
      "textLines": [
        "YOYO",
        "Halla Huhei!",
        "JAUDA",
        "😇",
        "DOWN HERE",
        "EMOJI 🤡",
        "A bit more text which streches over",
        "several linebreaks – so that this can be",
        "tested as well, might be useful, might not.",
        "How many coffees can you drink during",
        "one day? Maybe one more?",
        "Text that goes from one page to the next,",
        "is it best if this is connected to the next",
        "page, or if it is separated in two pages?",
        "Luckily, if needed, we can check if the last",
        "textItem has EOL, and deduce if it"
      ],
      "textItems": [
        {
          "str": "YOYO",
          "dir": "ltr",
          "width": 26.487599999999965,
          "height": 12,
          "transform": [
            12,
            0,
            0,
            12,
            72,
            708.48
          ],
          "fontName": "g_d2_f1",
          "hasEOL": false
        },
        {
          "str": "",
          "dir": "ltr",
          "width": 0,
          "height": 0,
          "transform": [
            12,
            0,
            0,
            12,
            91.640616,
            679.1999999999999
          ],
          "fontName": "g_d2_f1",
          "hasEOL": true
        },
        ...
      ]
    },
    {
      "pageNumber": 2,
      "textLines": [
        "contiuuess on the next page or not – or",
        "maybe not if the text is really malformed",
        "or something, I have no idea... Hopefully",
        "this case won’t happen at all...",
        "What will jhappen here anyways? This is a ver8cal",
        "textbox with several lines of text....",
        "And what will happen here? This is a",
        "textbox"
      ],
      "textItems": [
        {
          "str": "con",
          "dir": "ltr",
          "width": 18.357600000000005,
          "height": 12,
          "transform": [
            12,
            0,
            0,
            12,
            72,
            708.48
          ],
          "fontName": "g_d2_f5",
          "hasEOL": false
        },
        {
          "str": "t",
          "dir": "ltr",
          "width": 4.056,
          "height": 12,
          "transform": [
            12,
            0,
            0,
            12,
            90.357432,
            708.48
          ],
          "fontName": "g_d2_f5",
          "hasEOL": false
        },
        {
          "str": "i",
          "dir": "ltr",
          "width": 3.3360000000000003,
          "height": 12,
          "transform": [
            12,
            0,
            0,
            12,
            94.417968,
            708.48
          ],
          "fontName": "g_d2_f5",
          "hasEOL": false
        },
        {
          "str": "uuess on the next page or not",
          "dir": "ltr",
          "width": 149.9352,
          "height": 12,
          "transform": [
            12,
            0,
            0,
            12,
            97.751952,
            708.48
          ],
          "fontName": "g_d2_f5",
          "hasEOL": false
        },
        ...
      ]
    }
  ],
  "styles": [
    {
      "fontName": "g_d2_f1",
      "fontFamily": "sans-serif",
      "ascent": 0.9521484375,
      "descent": -0.2685546875,
      "vertical": false
    },
    {
      "fontName": "g_d2_f2",
      "fontFamily": "sans-serif",
      "ascent": 0.73486328125,
      "descent": -0.2529296875,
      "vertical": false
    },
    {
      "fontName": "g_d2_f3",
      "fontFamily": "monospace",
      "ascent": 1,
      "descent": -0.3125,
      "vertical": false
    },
    {
      "fontName": "g_d2_f4",
      "fontFamily": "serif",
      "ascent": 0.88818359375,
      "descent": -0.2236328125,
      "vertical": false
    },
    {
      "fontName": "g_d2_f5",
      "fontFamily": "serif",
      "ascent": 0.9501953125,
      "descent": -0.22216796875,
      "vertical": false
    }
  ]
}
```