import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
//const mongoose = require('mongoose');


//const dbOptions = {useNewUrlParser:true, useUnifiedTopology:true}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
); 
//mongoose.connect('mongodb+srv://scpvillegas2:sGT8hFjEmyjuRrcH@cluster0.pxi8leq.mongodb.net/jlab_sample_db?retryWrites=true&w=majority&appName=Cluster0',dbOptions)
//.then(() => console.log('DB Connected'))
//.catch(err => console.log(err))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
