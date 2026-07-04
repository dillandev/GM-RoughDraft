import app  from './src/app.js'
import './src/sharer/jobs/creditRefill.js'

const PORT = process.env['PORT'] || 3001

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
   console.log(`press CTRL+C to stop server`);
});