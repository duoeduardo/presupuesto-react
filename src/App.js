import React from 'react'
import './App.css'
import { Header } from "./components/Header";
import { Balance } from './components/Balance'
import { IncomePres } from './components/IncomePres';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';


function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomePres />
        <TransactionList/>
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
