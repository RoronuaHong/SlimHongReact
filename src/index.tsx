import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // <React.StrictMode>
    <ErrorBoundary fallback={<h1>Something went wrong.</h1>}>
      <App />
    </ErrorBoundary>
  // </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import { createElement, render } from './MyReact'

// const element = createElement(
//   'h1', 
//   { id: 'title', style: 'background: orange' }, 
//   'HelloWorld',
//   createElement(
//     'h2'
//   ),
//   createElement(
//     'h3'
//   ),
//   createElement(
//     'a',
//     {
//       href: 'https://bilibili.com'
//     },
//     'Biliblibi'
//   ),
// )

// const container = document.querySelector('#root')

// render(element, container)

// console.log(container)

