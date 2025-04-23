import TaskListItem from "../task-list-item/task-list-item";

import './task-list.css'

const TaskList = ({ taskList, onDelete, onTogglePriority, onToggleIsTaskComplete }) => {

    const elements = taskList.map(item => {
        const { id, ...taskItem } = item;
        return (
            <TaskListItem
                key={id}
                {...taskItem}
                onDelete={() => onDelete(id)}
                onTogglePriority={() => onTogglePriority(id)}
                onToggleIsTaskComplete={() => onToggleIsTaskComplete(id)} />
        )
    })
    return (
        <ul className='app-list list-group'>
            {elements}
        </ul>
    )


}

export default TaskList;