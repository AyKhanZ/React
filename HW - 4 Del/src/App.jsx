import './App.css';
import Form from './Components/Form/Form'
import Button from './Components/Button/Button'
import CheckList from './Components/CheckList/ChecList'; 
import { useDispatch, useSelector } from 'react-redux';
import {addTask} from './app/slices/checklistSlice'
function App() {  
  const tasks = useSelector(store=>store.checklistReducer)
  const dispatch = useDispatch();
  return ( 
     <>
      <Form onSubmit={(taskData)=>{dispatch(addTask(taskData))}}></Form>
      <Button>All</Button>
      <Button>Done</Button>
      <Button>Remainded</Button>
      <CheckList tasks = {tasks}></CheckList>
     </>
  );
}

export default App;

