/*=== Import Modules ===*/
import Axios  from 'axios';

/*=== Import Components ===*/
import Layout from './Components/Layout/Layout.js';

/*=== Import CSS ===*/
import './App.css';

// Establish client and Server Connection
Axios.defaults.baseURL                      = process.env.REACT_APP_BASE_URL;
Axios.defaults.headers.post['Content-Type'] = 'application/json';

function App() {
  return (
    <div className="container-fluid">
      <Layout />
    </div>
  );
}

export default App;
