import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Axios from 'axios';
import { Landing } from './Landing';
import { Survey } from './Survey';

Axios.defaults.baseURL = "http://localhost:5000"

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/survey" element={<Survey />}/>
      </Routes>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;