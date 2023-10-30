import { useState } from "react";


function HomePage() {
  let [list, setList] = useState(["ready", "set", "GO"]);
  let [text, setText] = useState("");

  function onSubmit(event) {
    event.preventDefault();

    let newList = [...list, text] //creates a new list using the text appended to the current list
    setList(newList);
    setText("");
  }

  return (
    <div>
      <h1>Hello World</h1>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="listitem"
          id="listitem"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button type = "submit">Add</button>
      </form>

      <ul>
        {list.map((item, idx) => {
          return <li key={idx}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default HomePage;
