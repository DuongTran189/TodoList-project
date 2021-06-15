



function TodoListItem(props) {
 
  let onClickClose= () =>{
    let Index = parseInt(props.index);
      props.removeItem(Index);
    }
  let onClickDone= () => {
      let Index = parseInt(props.index);
      props.checkTodoDone(Index);
    }
      
      return(
        <li className="list-group-item">
          <div >
            <input
                className="form-check-input"
                type="checkbox"
                readOnly
                value=""
                onClick={ onClickDone }
                checked={props.items.done}
            />
            {props.items.value}
            <button type="button" className="close" onClick={onClickClose} >&times;</button>
          </div>
        </li>
      );
    
  }
  
  export default TodoListItem;