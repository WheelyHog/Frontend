import User from "./User";
import { data } from "../data/users";
import { tasks } from "../data/tasks";
import Task from "./Task";

export function App() {

  return (
    <div>
      {/* {data.map(el => <User {...el} key={el.id} />)} */}
      {tasks.map(el => <Task {...el} key={el.id} />)}
    </div>
  )
}