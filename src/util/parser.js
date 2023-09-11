import csvToJson from 'convert-csv-to-json';

let fileInputName = '10sep.csv'
let fileOutputName = 'data.json'

csvToJson.fieldDelimiter(',').supportQuotedField(true).generateJsonFileFromCsv(fileInputName,fileOutputName);