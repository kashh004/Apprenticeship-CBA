import React from 'react';

export default function Hello() {
  const name = "akash";
  const greeting = 'Hello, ' + name + ' !!';
  const _message = <h3>{'Welcome ' + name}</h3>;
  const x = 10, y = 20;
  const result = <h3>The addition of {x} and {y} is {x + y}</h3>;
  const loggedIn = false;
  const status = <p>{loggedIn ? "welcome again:" : "login again"}</p>;
  const greet = ["Hello", "Hi", "Hey"];
  const greetList = <p>{greet.length>0&& "you have new greet messages"}</p>
  const style={
    color: 'blue',
    fontSize: '20px',
    fontWeight: 'bold'
  }
  const styledText=<h2 style={style}>this is a styled test</h2>
  const form= <form>
    <input type="text" placeholder="Enter your name" />
    <input type="email" placeholder="Enter your email" />
    <input type="password" placeholder="Enter your password" />
    <button type="submit">Submit</button>
  </form>;
 
  return (
    <>
      <h1>{greeting}</h1>
      {_message}
      {result}
      {status}
      {greetList}
        {styledText}
        {form}

    </>
  );
}