import './App.css';
import { Item2 } from './component/Item2';
import { useState} from "react";
import img from "./trash.png"


const App = () => {

  const [lists,setLists]=useState([]);
  const complited=lists.filter((e)=>e.compl).length


  const addList=()=>{
    let inp1=document.getElementById("inp1");
      if(inp1.value!==""){
        let input1=inp1.value;
        inp1.value=""
        let y={text:input1,
          id:Math.floor((Math.random() * 1000000) + 1),
           compl:false}
        setLists([...lists,y]);
      }
    }

    

    const removeList=(index)=>{
      lists.splice(index,1);
      setLists([...lists]);
      
  }

    

      return(<div className="item1-cont">
          <h1>Add Name For Your Task List</h1>
          <div className="inp-cont">
              <input placeholder="Add Some Task Here" id="inp1" className="addListInp" type="text"/>
              <button className='btn1' onClick={()=>addList()}>Add List</button>
          </div>

           <Item2 lists={lists} removeList={removeList} img={img} complited={complited} setLists={setLists} />

          
      </div>)

}


export default App;
