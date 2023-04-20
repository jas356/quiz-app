import Header from './components/Header.jsx';
import Quiz from './components/Quiz.jsx';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <Quiz />
      <Footer />
    </div>
  );
}

export default App;
