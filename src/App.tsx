import React from 'react';
import LogoImg from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LogoImg className='App-logo'/>
          <p>Цель: жить.</p>
          <p>Чем хочу овладеть: актуальными навыками по React.</p>
          <p>Чем владею: Siebel CRM, кунг-фу.</p>
          <p>О себе: Топчиёв Анатолий, 15.07.1991г.р. Работаю в Ak Bars Digital.</p>
      </header>
    </div>
  );
}

export default App;
