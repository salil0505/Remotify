import React from 'react';
import ReactDOM from 'react-dom';
import * as Firebase from 'firebase';
import Layout from './components/Layout';

const firebaseconfig = require('../../config/firebase-config.json');

Firebase.initializeApp(firebaseconfig);

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);

