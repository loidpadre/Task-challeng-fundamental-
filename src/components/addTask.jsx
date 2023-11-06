import { useState } from "react"

let indexID = 0
export const AddTask = ({listTask, setTasks}) => {

    const [name,  setName] = useState("")
    const [date,  setData] = useState("")
    const [reminder,  setReminder] = useState(false)

    const handleAdd = (e) => {
        e.preventDefault()
        if(!name){
            alert("Please set Title")
            return
        }
        setTasks(
            [
                {
                    id: ++indexID,
                    name: name,
                    day: date,
                    reminder: reminder
                },
                ...listTask     
            ]
            
        )
        setData("")
        setName("")
        setReminder(false)

    }
    return(
        <form onSubmit={handleAdd}>
            <div className="text-form">
                <label>Task</label>
                <input type="text" placeholder="Add task" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="text-form">
                <label>Day & time</label>
                <input type="text" placeholder="Add day & time" value={date}  onChange={(e) => setData(e.target.value)}/>
            </div>
            <div className="text-form-checkbox">
                <label>Reminder</label>
                <input type="checkBox" style={{cursor:"pointer"}} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input type="submit"  style={{cursor:"pointer"}} value="Save Task"  className="btn-saveTask"/>
        </form>
    )
}