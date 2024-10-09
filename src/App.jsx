import { useState } from "react";

function App() {
  const [color, setColor] = useState("Olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div > {color}</div>
      <div className="fixed flex flex-wrap  justify-center bottom-12 inset-x-0 px-2 bg-black ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
             onClick={()=>{setColor('red')}}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
          onClick={()=>{setColor('yellow')}}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>
          <button
          onClick={()=>{setColor('green')}}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
          onClick={()=>{setColor('blue')}}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
          onClick={()=>{setColor('pink')}}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
          onClick={()=>{setColor('brown')}}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "Brown" }}
          >
            Brown
          </button>
          <button
          onClick={()=>{setColor('Olive')}}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "Olive" }}
          >
            Olive
          </button>
          <button
          onClick={()=>{setColor('grey')}}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "grey" }}
          >
            Grey
          </button>
          <button
          onClick={()=>{setColor('Purple')}}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
          onClick={()=>{setColor('gold')}}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "gold" }}
          >
            Gold
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
