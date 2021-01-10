import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Hello from './Components/hello'
import Message from './Components/Message'
//import Counter from './Components/Counter'
//import FunctionClick from './Components/FunctionClick';
//import ClassClick from './Components/ClassClick';
//import EventBind from './Components/EventBind';
//import ParentComponent from './Components/ParentComponent';
 //import UserGreeting from './Components/UserGreeting';
 //import NameList from './Components/NameList';
 import StyleSheet from './Components/Stylesheet';
import inline from './Components/inline';
import './appStyles.css'
import styles from './appStyles.module.css';
import Form from'./Components/Form'


function App() {
  return (
    <div className="App">
      <Form/>
      {/*<h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      {/*<inline/>*/}
     {/*<StyleSheet primary={true}/>*/}
     {/*<NameList/>*/}
     {/*<FunctionClick/>*/}
      {/*<ClassClick/>*/}
     {/*} <EventBind/>*/}
     {/*<ParentComponent/>*/}
     {/*<UserGreeting/>*/}

      {/*<Message/>*/}
      {/*<Greet name="Bruce" heroName="Batman"/>
      <p>This is children props</p>
      <Greet name="Clark" heroName="Superman" />
      <button>Action</button>
  <Greet name="Diana" heroName="Wonderman" />*/}
{/*<Welcome/> */}
{/*<Hello/>*/}
{/*<Counter/>*/}

          </div>
  );
}

export default App;
