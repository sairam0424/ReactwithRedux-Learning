// import logo from './logo.svg';
import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './components/CakeContainer';
import store from './redux/store';
import DocTitleTwo from './hooks/DocTitleTwo';
import DocTitleOne from './hooks/DocTitleOne';
import NewCakeContainer from './components/NewCakeContainer';
import CounterOne from './hooks/CounterOne';
import ItemContainer from './components/ItemContainer';
function App() {
  return (
    <Provider store={store}>
    <div className="App">

      <NewCakeContainer/>
      <ItemContainer  item = "cake"/>
      {/* <CounterOne/> */}
      
     {/* <CakeContainer/> */}


     
    </div>
     </Provider>
  );
}

export default App;