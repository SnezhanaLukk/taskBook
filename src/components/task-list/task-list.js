import TaskListItem from "../task-list-item/task-list-item";

import './task-list.css'

const TaskList = ({ taskList }) => {

    const elements = taskList.map(item => {
        const { id, ...taskItem } = item;
        return (
            <TaskListItem key={id} {...taskItem} />
        )
    })
    return (
        <ul className='app-list list-group'>
            {elements}
        </ul>
    )


}

export default TaskList;