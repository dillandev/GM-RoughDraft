import fs from 'fs';

const path = '../src/routes/register.js';

fs.access(path, fs.constants.F_OK, (err) => {
  if (err) {
    console.log('File does NOT exist');
  } else {
    console.log('File exists');
  }
});