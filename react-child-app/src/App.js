import './App.css';
import {useEffect} from 'react'
import SharedModule from './shared';

function App() {
  useEffect(()=>{
    const shared=SharedModule.getShared();
    const token=shared.getToken();
    console.log(token);
  });
  return (
    <div className="App">
      <h1>QianKun React 子应用 首页</h1>
    </div>
  );
}

export default App;
