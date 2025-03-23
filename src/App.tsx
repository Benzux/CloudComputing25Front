import pandasLogo from './assets/pandas_logo.png';
import malLogo from './assets/mal.png';
import confusionMatrix from './assets/confusion_matrix.png';
import './App.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Layout } from './responsive';
import { DataDiv } from './responsive';
import useWindowSize from './windowSize';
import { ResponsiveSettings } from './responsive';
import { TextParagraph } from './responsive';
import { sentimentAnalysis} from './fetch';
import { useState } from "react";

function App() {

  const { width } = useWindowSize();
  // UseState to keep track of both the review that the user has written and the response sent by the backend
  const [reviewValue, setReviewValue] = useState("");
  const [response, setResponse] = useState<string | null>(null);

  const analyzeReview = async () => {
    setResponse(null)

    // If the review input box is empty, end the operation
    if (!reviewValue.trim()) {
      console.log("no review input")
      setResponse("Please write at least something in the review first!");
      return
    }

    // We call the fetch function and pass the user-inputted review to it, then update the UI
    const modelResponse = await sentimentAnalysis(reviewValue);
    setResponse("The sentiment analysis model determined that your review is: " + modelResponse)
  };

  // Filling the table with data.
  // Table creation based on the docs for Material UI
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
    // This bit will pop up a lot. Basically, we use the function to get the current viewport size and determine how wide the 
    // content should be at most based on that. On smaller screens, the max width is restricted to that width.
    <Layout style={{maxWidth: 
      width <= parseInt(ResponsiveSettings.smallScreenMaxWidth.replace("px", ""),10)
      ? width
      : 'fit-content'
    }}>
      <div>
        <a href="https://pandas.pydata.org" target="_blank">
          <img src={pandasLogo} className="logo pandas" alt="Pandas logo" />
        </a>
        <a href="https://myanimelist.net" target="_blank">
          <img src={malLogo} className="logo mal" alt="MyAnimeList logo" />
        </a>
      </div>
      <h2>Sentiment Analysis on MyAnimeList reviews using Pandas</h2>
      <div className="card" style={{maxWidth: 
        width <= parseInt(ResponsiveSettings.smallScreenMaxWidth.replace("px", ""),10)
        ? width
        : 'fit-content'
      }}>
        <TextParagraph>
          This web application hosted on render.com serves as a visual tool for displaying the results of 
          a sentiment analysis model trained on anime reviews obtained from the site MyAnimeList.
        </TextParagraph>
        <TextParagraph>
          The sentiment analysis was trained on over 85 thousand reviews sourced from
           <a href="https://www.kaggle.com/datasets/stoicstatic/mal-top-10k-anime-details" target="_blank"> kaggle</a>.
           Below is shown the evaluation of the trained model in the form of a classification report table and a confusion matrix.
        </TextParagraph>
        <TextParagraph>
          The trained sentiment analysis model can be tested with the text box below. 
          Just type some kind of review into it, as short or as long as you want, and press the button!
        </TextParagraph>
        <input 
          type="text" 
          id="reviewInput"
          size={45}
          value={reviewValue}
          onChange={(e) => setReviewValue(e.target.value)}
          placeholder='Type out a review text to have the model analyze it!'/><br></br>
        <button id="sendReview" onClick={analyzeReview}>Analyze Review</button>
        {response && (
          <TextParagraph id='modelresponse'>{response}</TextParagraph>
        )}
      </div>
      <DataDiv style={{flexDirection: 
        width <= 1100
        ? 'column'
        : 'row'
      }}>
        <TableContainer component={Paper} className='tablecontainer' style={{maxWidth: 
            width <= parseInt(ResponsiveSettings.smallScreenMaxWidth.replace("px", ""),10)
            ? width
            : 'fit-content'
          }
        }>
          <Table aria-label="classification report table" className='table'>
            <TableHead>
              <TableRow>
                <TableCell align='right'></TableCell>
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
                  <TableCell align='right' component='th' scope='row'>{row.desc}</TableCell>
                  <TableCell align='right'>{row.precision}</TableCell>
                  <TableCell align='right'>{row.recall}</TableCell>
                  <TableCell align='right'>{row.f1_score}</TableCell>
                  <TableCell align='right'>{row.support}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <img src={confusionMatrix} className="matrix" alt="Confusion Matrix" style = {{maxWidth: 
            width <= parseInt(ResponsiveSettings.smallScreenMaxWidth.replace("px", ""),10)
            ? width
            : 'fit-content'
          }
        }/>
      </DataDiv>
    </Layout>
  )
}

export default App
