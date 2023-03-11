import './App.css';
import { useState } from 'react';


const files={
  name:"main",
  children:[
    {
      name:"public",
      children:[
        {
          name:"index.html"
        },
        {
          name:"images",
          children:[
            {
              name:"Image1.jpg"
            },
            {
              name:"Image2.png"
            }
          ]
        },
        {
          name:"videos",
          children:[
            {
              name:"video1.mkv"
            },
            {
              name:"video2.mp4"
            }
          ]
        },
        {
          name:"output.txt"
        }
      ]
    },
    {
      name:"src",
      children:[
        {
          name:"App.css"
        },
        {
          name:"App.js"
        }
      ]
    },
    {
      name:"package.json"
    }
  ]
}

function Entry({entry,depth}){
const [isExpanded,setExpanded]=useState(false);


  return <div>
    <div onClick={()=> setExpanded(!isExpanded)} style={entry.children && {cursor:`pointer`}}>
      {entry.children && (isExpanded?"📂":"📁")}
      {!entry.children && "📄"}
      {entry.name}
    </div>
    {isExpanded &&(
      <div style={{paddingLeft:`${depth*10}px`}}>
        {entry.children?.map((entry)=>(
          <Entry entry={entry} depth={depth+1}/>
      ))}
      </div>
    )}
  </div>
}

function App() {
  return (
    <div className="App">
      {files.children.map((entry)=>(
        <Entry entry={entry} depth={1}/>
      ))}
    </div>
  );
}

export default App;
