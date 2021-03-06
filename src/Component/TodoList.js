

import TodoListItem from './TodoListItem';

function TodoList(props) {

 var Items = props.Items.map((Items,index) =>{
      return(
        <TodoListItem 
        key={index} 
        items={Items} 
        index={index} 
        removeItem={props.removeItem}
        checkTodoDone={props.checkTodoDone}
        />
      );
    });

    return(
      <ul className="list-group">{Items}</ul>
    );
}

export default TodoList;