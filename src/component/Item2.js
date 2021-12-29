export const Item2 = (props)=>{

    

    return(<div className="list-cont">
        {props.lists.map((e,i)=>{
            return(<div key={i} className="list-col" style={e.compl?{background:" #727474"}:{}}>
                <div className="list-name"  >
                <input checked={props.lists.compl} type="checkbox" className="check"  onChange={()=>{
                    e.compl=!e.compl;
                    props.setLists([...props.lists])
                }}/>
                <span  className="element" style={e.compl?{textDecoration:"line-through"}:{textDecoration:"none"}}>{e.text}</span>
              </div>
            
                <button className="btn2" onClick={()=>props.removeList(i)}>Remove List <img width="20px" height="20px" src={props.img} alt="Delete Item"/>
                </button>
             
            </div>)
          })}
          <div className="footer">
                <p>{props.complited}/{props.lists.length} is Completed </p>
               
        </div>
    </div>)
}