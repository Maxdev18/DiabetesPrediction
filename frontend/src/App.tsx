import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Axios from 'axios';
import { Landing } from './Landing';
import { Survey } from './Survey';
import { Results } from './Results';

Axios.defaults.baseURL = "http://127.0.0.1:5000"

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/survey" element={<Survey />}/>
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
};

export default App;