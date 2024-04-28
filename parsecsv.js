// parseCSV.js
const fs = require('fs');
const csv = require('csv-parser');

async function parseCSV() {
  const data = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream('../public/dspace.csv')
      .pipe(csv())
      .on('data', (row) => {
        // Assuming your CSV has 'semester' and 'link' columns
        data.push({ semester: row.semester, link: row.link });
      })
      .on('end', () => {
        console.log('CSV file successfully processed');
        resolve(data);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}

module.exports = parseCSV;
