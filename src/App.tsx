import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Цель: Получить новые знания и научиться их применять.<br />
        Чем хочу овладеть: Знаниями и навыками по front-end<br />
        Чем владею: Siebel CRM, PL/SQL<br />
        О себе: Топчиёв Анатолий, 15.07.1991г.р. Работаю в Ak Bars Digital.
        </p>
      </header>
    </div>
  );
}

export default App;
