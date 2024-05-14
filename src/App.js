import './App.css';
import Header from './components/Header';
import PageDetails from './components/PageDetails';
import SignUpForm from './components/SignUpForm';
function App() {
  return (
    <div className="App">
      <SignUpForm />
      <Header />
      <PageDetails />
    </div>
  );
}

export default App;
