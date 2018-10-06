import React from "react";
import ReactDOM from "react-dom";
import { Observable } from "rxjs";
import "./styles.css";

let numbers = [1, 2, 3, 10, "a"];
let source = Observable.create(observer => {
  let index = 0;
  let produceValue = () => {
    observer.next(numbers[index++]);
    if (index < numbers.length) {
      setTimeout(produceValue, 2000);
    } else {
      observer.complete();
    }
  };
  produceValue();
});

source.subscribe(
  value => console.log(`value ${value}`),
  e => console.log(`error ${e}`),
  () => console.log("Done")
);

function App() {
  return (
    <div className="App">
      <h1>Hello RxJs</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
