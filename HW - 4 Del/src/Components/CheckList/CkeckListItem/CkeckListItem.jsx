import { useDispatch } from "react-redux";
import { delTask } from "../../../app/slices/checklistSlice";
import Button from "../../Button/Button";
import { useId } from "react";
function CheckListItem({
    taskData
}){
    const id = useId()
    const dispatch = useDispatch()

    return( 
        <ul>
            <input type="checkbox" id={id}/>
            <label htmlFor={id}>{taskData.title}</label>
            <Button>Edit</Button>
            <Button clickHandler={() => dispatch(delTask(taskData.id))}>Delete</Button>
        </ul> 
    )
}

export default CheckListItem;