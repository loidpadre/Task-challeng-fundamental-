import { Button } from './components/button'
import { useState } from "react"
import './App.css'
import { Task } from './components/task'
import { AddTask } from './components/addTask'
import { FaTasks} from "react-icons/fa"

function App() {

  const [tasks, setTasks] = useState(
    [

    ]
  )

  const handleClick = () => {
    console.log("You clicked me")
  }

  const Delete = (id) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    )
  }

  const toggleremainder = (id) => {
    setTasks(
      // usamos map, quando vamoos modificar algum dos elementos do meu array
      tasks.map((task) => task.id === id ?
        {
          ...task,
          reminder: !task.reminder
        } : task)
    )
  }
  return (
    <>
      <div className="box">
        <div className='top'>

          <h1>Task Tracker</h1>
          <Button functionCLick={handleClick} color="green" text="Add" icon={<FaTasks/>} />
        </div>
        <AddTask listTask={tasks} setTasks={setTasks} />
        <div>
          {
            tasks.length > 0 ? (
              <Task tasks={tasks} deleteItem={Delete} toggleRemainder={toggleremainder} />

            ) : <p>No task to show</p>
          }
        </div>

      </div>

    </>
  )
}

export default App
