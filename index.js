import React from "react";
import "./styles.css";
import ReactDOM from "react-dom/client";

function CulcButton(props) {
  return (
    <button
      className={props.className}
      onClick={() => props.onClick(props.value)}
    >
      {props.value}
    </button>
  );
}

function Culculator() {
  const [clce, setclce] = React.useState({
    current: "0",
    title: "0",
    initial: true,
    desop: ""
  });
  function Handelstar(value) {
    let neWvalue = value;
    if (!clce.initial) {
      neWvalue = clce.current + value;
    }
    setclce({
      current: neWvalue,
      title: clce.title,
      initial: false,
      desop: clce.desop
    });
  }

  function Handeloper(value) {
    const total = doculclation();
    setclce({
      current: total.toString(),
      title: total.toString(),
      initial: true,
      desop: value
    });
  }
  function doculclation() {
    let title = parseInt(clce.title);
    switch (clce.desop) {
      case "+":
        title += parseInt(clce.current);
        break;
      case "*":
        title *= parseInt(clce.current);
        break;
      case "-":
        title -= parseInt(clce.current);
        break;
      case "/":
        title /= parseInt(clce.current);
        break;
      default:
        title = parseInt(clce.current);
    }
    return title;
  }
  function RederDisply() {
    return clce.current;
  }

  function HandClear() {
    setclce({
      current: "0",
      title: "0",
      initial: true,
      desop: ""
    });
  }
  return (
    <div className="culculetor">
      <div className="disply">{clce.current}</div>
      <CulcButton className="start" value="7" onClick={Handelstar} />
      <CulcButton className="start" value="8" onClick={Handelstar} />
      <CulcButton className="start" value="9" onClick={Handelstar} />
      <CulcButton className="oper" value="/" onClick={Handeloper} />

      <CulcButton className="start" value="4" onClick={Handelstar} />
      <CulcButton className="start" value="5" onClick={Handelstar} />
      <CulcButton className="start" value="6" onClick={Handelstar} />
      <CulcButton className="oper" value="*" onClick={Handeloper} />

      <CulcButton className="start" value="1" onClick={Handelstar} />
      <CulcButton className="start" value="2" onClick={Handelstar} />
      <CulcButton className="start" value="3" onClick={Handelstar} />
      <CulcButton className="oper" value="-" onClick={Handeloper} />

      <CulcButton className="start" value="c" onClick={HandClear} />
      <CulcButton className="start" value="0" onClick={Handelstar} />
      <CulcButton className="start" value="=" onClick={Handeloper} />
      <CulcButton className="oper" value="+" onClick={Handeloper} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="app">
    <Culculator />
  </div>
);
