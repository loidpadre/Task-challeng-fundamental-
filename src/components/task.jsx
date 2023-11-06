
import { FaTimes } from "react-icons/fa"
export const Task = ({ tasks, deleteItem, toggleRemainder }) => {

    return (
        <>
            {tasks.map((item) => (
                <div key={item.id} className={`task ${item.reminder ? "reminder" : ""}`} onDoubleClick={() => toggleRemainder(item.id)}>
                    <div className="text" >
                        <h3>{item.name}</h3>
                        <p>{item.day}</p>
                    </div>
                    <FaTimes onClick={() => deleteItem(item.id)} size={20} style={{ color: "red", cursor: "pointer" }} />
                </div>
            ))}
        </>
    )
}