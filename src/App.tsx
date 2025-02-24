import pandasLogo from './assets/pandas_logo.png'
import malLogo from './assets/mal.png'
import confusionMatrix from './assets/confusion_matrix.png'
import './App.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function App() {

  function tableData(
    desc: string | null,
    precision: number | null,
    recall: number | null,
    f1_score: number | null,
    support: number | null
  ) {
    return {desc, precision, recall, f1_score, support};
  }

  const rows = [
    tableData('negative', 0.70, 0.69, 0.70, 3354),
    tableData('neutral', 0.30, 0.07, 0.11, 1756),
    tableData('positive', 0.86, 0.95, 0.91, 13118),
    tableData('accuracy', null, null, 0.82, 18228),
    tableData('macro avg', 0.62, 0.57, 0.57, 18228),
    tableData('weighted avg', 0.78, 0.82, 0.79, 18228)
  ]
  

  return (
    <>
      <div>
        <a href="https://pandas.pydata.org" target="_blank">
          <img src={pandasLogo} className="logo pandas" alt="Pandas logo" />
        </a>
        <a href="https://myanimelist.net" target="_blank">
          <img src={malLogo} className="logo mal" alt="MyAnimeList logo" />
        </a>
      </div>
      <h2>Sentiment Analysis on MyAnimeList reviews using Pandas</h2>
      <div className="card">
        <p>
          This web application hosted on render.com serves as a visual tool for displaying the results of 
          a sentiment analysis model trained on anime reviews obtained from the site MyAnimeList.
        </p>
        <p>
          The sentiment analysis was trained on over 85 thousand reviews sourced from
           <a href="https://www.kaggle.com/datasets/stoicstatic/mal-top-10k-anime-details" target="_blank"> kaggle</a>.
           Below is shown the evaluation of the trained model in the form of a classification report table and a confusion matrix.
        </p>
        </div>
        <TableContainer component={Paper} className='table'>
          <Table sx={{minWidth: 650}} aria-label="classification report table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align='right'>Precision</TableCell>
                <TableCell align='right'>Recall</TableCell>
                <TableCell align='right'>F1-Score</TableCell>
                <TableCell align='right'>Support</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.desc}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>{row.desc}</TableCell>
                  <TableCell align='right'>{row.precision}</TableCell>
                  <TableCell align='right'>{row.recall}</TableCell>
                  <TableCell align='right'>{row.f1_score}</TableCell>
                  <TableCell align='right'>{row.support}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <img src={confusionMatrix} className="matrix" alt="Confusion Matrix" />
      </>
    )
  }

export default App
