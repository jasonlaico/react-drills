import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'
export default function List( props ) {
  let list = props.tasks.map( ( element, index ) => {
    return (
      <Todo key={ index } task={ element } />
    )
  })

  return (
    <div>
      { list }
    </div>
  )
}