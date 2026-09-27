import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { Workbook, SpreadsheetFile } from '@oai/artifact-tool';

const outputPath = fileURLToPath(new URL('../public/adaptor-starter-sheet.xlsx', import.meta.url));
const previewPath = '/private/tmp/adaptor-starter-sheet-preview.png';
const wb = Workbook.create();
const sheet = wb.worksheets.add('Starter exercise');
sheet.showGridLines = false;

const navy = '#182331';
const blue = '#1059BF';
const paleBlue = '#EAF2FD';
const paleGold = '#FFF3D8';
const muted = '#5F6B7A';
const line = '#DCE2E8';

sheet.getRange('A1:G36').format.font = { name: 'Arial', size: 11, color: navy };
sheet.getRange('A1:G36').format.verticalAlignment = 'center';
for (const [column, width] of Object.entries({ A: 3, B: 43, C: 58, D: 3, E: 9, F: 54, G: 3 })) {
  sheet.getRange(`${column}:${column}`).format.columnWidth = width;
}
sheet.getRange('B2').values = [['ADAPTOR Starter Sheet']];
sheet.getRange('B2').format.font = { name: 'Arial', size: 16, bold: true, color: navy };
sheet.getRange('B2:F2').format.rowHeight = 30;
sheet.getRange('B3').values = [['A first pass on one part of your work. About 10 minutes.']];
sheet.getRange('B3:F3').format.font = { name: 'Arial', size: 11, color: muted };
sheet.getRange('B4:F4').format.borders = { bottom: { style: 'thin', color: line } };

sheet.getRange('B5').values = [['How to use']];
sheet.getRange('B5').format.font = { name: 'Arial', size: 11, bold: true, color: blue };
sheet.getRange('C5').values = [['Fill the pale cells in your own copy. Pick one recurring activity. The guide and example on the right can help.']];
sheet.getRange('C5').format.wrapText = true;
sheet.getRange('B5:C5').format.rowHeight = 48;

const sections = [
  [7, '1. Profile', 'Describe the work, not your job title.'],
  [12, '2. Personal SWOT', 'One outside change plus one part of your own position.'],
  [20, '3. Goal', 'Choose an outcome that responds to the SWOT pair.'],
  [24, '4. Action', 'Try one observable move, then review what happened.'],
];
for (const [row, title, description] of sections) {
  sheet.getRange(`B${row}`).values = [[title]];
  sheet.getRange(`C${row}`).values = [[description]];
  sheet.getRange(`B${row}:C${row}`).format.fill = paleBlue;
  sheet.getRange(`B${row}`).format.font = { name: 'Arial', size: 11, bold: true, color: blue };
  sheet.getRange(`C${row}`).format.font = { name: 'Arial', size: 11, color: navy };
  sheet.getRange(`B${row}:C${row}`).format.rowHeight = 29;
}

const prompts = [
  [8, 'One recurring activity (e.g. meeting prep)'],
  [9, 'Primary Work Profile'],
  [10, 'Second profile, if relevant (optional)'],
  [13, 'Outside signal (Threat or Opportunity)'],
  [14, 'What may be changing in this activity?'],
  [15, 'What evidence have you seen?'],
  [16, 'Your inside response (Strength or Weakness)'],
  [17, 'What helps or holds you back?'],
  [21, 'In three months, what should be different?'],
  [25, 'One action to start within two weeks'],
  [26, 'What would show progress?'],
  [27, 'When will you review it?'],
];
for (const [row, label] of prompts) {
  sheet.getRange(`B${row}`).values = [[label]];
  sheet.getRange(`C${row}`).format.fill = paleGold;
  sheet.getRange(`B${row}:C${row}`).format.rowHeight = [14, 15, 17, 21, 25, 26].includes(row) ? 43 : 32;
  sheet.getRange(`B${row}:C${row}`).format.wrapText = true;
  sheet.getRange(`B${row}:C${row}`).format.borders = { bottom: { style: 'thin', color: line } };
}

const profileNames = [
  'Administrative Operators', 'Digital Builders', 'Analysts', 'Professional Advisors',
  'Team Coordinators', 'Output Creators', 'Relationship Workers',
];
sheet.getRange('C9').dataValidation = { rule: { type: 'list', values: profileNames } };
sheet.getRange('C10').dataValidation = { rule: { type: 'list', values: profileNames } };
sheet.getRange('C13').dataValidation = { rule: { type: 'list', values: ['Threat', 'Opportunity'] } };
sheet.getRange('C16').dataValidation = { rule: { type: 'list', values: ['Strength', 'Weakness'] } };

sheet.getRange('E5').values = [['ADAPTOR']];
sheet.getRange('E5:F5').format.fill = navy;
sheet.getRange('E5:F5').format.font = { name: 'Arial', size: 11, bold: true, color: '#FFFFFF' };
sheet.getRange('F5').values = [['Seven ways work can show up']];
const profiles = [
  ['A', 'Administrative Operators — processes, schedules, records'],
  ['D', 'Digital Builders — systems, code, digital delivery'],
  ['A', 'Analysts — information, interpretation, decisions'],
  ['P', 'Professional Advisors — specialist judgement and advice'],
  ['T', 'Team Coordinators — people, projects, delivery'],
  ['O', 'Output Creators — written, visual, creative outputs'],
  ['R', 'Relationship Workers — direct human interaction'],
];
sheet.getRange('E6:F12').values = profiles;
sheet.getRange('E6:E12').format.font = { name: 'Arial', size: 11, bold: true, color: blue };
sheet.getRange('F6:F12').format.wrapText = true;
sheet.getRange('E6:F12').format.rowHeight = 34;
sheet.getRange('E14:F14').format.fill = paleBlue;
sheet.getRange('E14').values = [['Example']];
sheet.getRange('E14:F14').format.font = { name: 'Arial', size: 11, bold: true, color: blue };
const example = [
  ['Work', 'Preparing meeting materials and tracking follow-up'],
  ['Profile', 'Administrative Operators, with Team Coordinators'],
  ['Threat', 'AI may reduce time spent on routine drafting and summaries'],
  ['Evidence', 'The team is piloting an AI meeting-summary tool'],
  ['Strength', 'I spot sensitive exceptions that need human judgement'],
  ['Goal', 'Within three months, make that judgement visible to managers'],
  ['Action', 'Add an exception-and-recommendation note to one update'],
  ['Review', 'Ask a manager if it helped; review in two weeks'],
];
sheet.getRange('E15:F22').values = example;
sheet.getRange('E15:E22').format.font = { name: 'Arial', size: 11, bold: true, color: blue };
sheet.getRange('E15:F22').format.wrapText = true;
sheet.getRange('E15:F22').format.rowHeight = 48;
sheet.getRange('E24').values = [['Scope']];
sheet.getRange('E24:F24').format.fill = paleBlue;
sheet.getRange('E24').format.font = { name: 'Arial', size: 11, bold: true, color: blue };
sheet.getRange('F25').values = [['This is a first pass on one activity, not a prediction about your job or a full assessment. Avoid entering confidential employer or client information.']];
sheet.getRange('F25').format.wrapText = true;
sheet.getRange('E25:F25').format.rowHeight = 80;
sheet.getRange('E28').values = [['Go further']];
sheet.getRange('E28:F28').format.fill = navy;
sheet.getRange('E28:F28').format.font = { name: 'Arial', size: 11, bold: true, color: '#FFFFFF' };
sheet.getRange('F29').values = [['The book guides a fuller Profile assessment, evidence-based SWOT, connected goals, actions and reviews. Purchasers also get the companion workbook.']];
sheet.getRange('F29').format.wrapText = true;
sheet.getRange('E29:F29').format.rowHeight = 75;
sheet.getRange('F30').values = [['https://ai-era-adaptor.com/book/']];
sheet.getRange('F30').format.font = { name: 'Arial', size: 11, color: blue };

wb.recalculate();
const table = await wb.inspect({ kind: 'table', range: 'B2:F30', include: 'values,formulas', tableMaxRows: 30, tableMaxCols: 5, maxChars: 5000 });
console.log(table.ndjson);
const errors = await wb.inspect({ kind: 'match', searchTerm: '#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!', options: { useRegex: true, maxResults: 20 }, maxChars: 1000 });
console.log(errors.ndjson);
const preview = await wb.render({ sheetName: 'Starter exercise', range: 'B2:F30', scale: 1, format: 'png' });
await fs.writeFile(previewPath, new Uint8Array(await preview.arrayBuffer()));
const output = await SpreadsheetFile.exportXlsx(wb);
await output.save(outputPath);
console.log(`Saved ${outputPath}`);
