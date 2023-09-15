import csvToJson from 'convert-csv-to-json';
import fs from 'fs';

let fileInputName = '15sep.csv'
let fileOutputName = 'data.json'

const res = csvToJson.fieldDelimiter(',').supportQuotedField(true).getJsonFromCsv(fileInputName);

res.sort((a,b)=>{
    return ((b['#ofSkillBadgesCompleted']+b['#ofCoursesCompleted'] + b['#ofGenAIGameCompleted']) - (a['#ofCoursesCompleted']+a['#ofSkillBadgesCompleted']+a['#ofGenAIGameCompleted']));
  })

const jsonString = JSON.stringify(res)
fs.writeFile('./data.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
})