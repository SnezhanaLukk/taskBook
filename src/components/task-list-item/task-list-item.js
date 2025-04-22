import { Component } from 'react';
import './task-list-item.css';

function getTodayDateString() {
    const current = new Date();
    const year = current.getFullYear();
    const month = String(current.getMonth() + 1).padStart(2, '0');
    const day = String(current.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

class TaskListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            priority: false,
            isTaskComplete: false
        }
    }
    onPriority = () => {
        this.setState(({ priority }) => ({
            priority: !priority
        }))
    }
    onIsTaskComplite = () => {
        this.setState(({ isTaskComplete }) => ({
            isTaskComplete: !isTaskComplete
        }))
    }
    render() {
        const { taskName, date, onDelete } = this.props;
        const { priority, isTaskComplete } = this.state;
        const deadline = date ? date : getTodayDateString();
        let classNames = "list-group-item d-flex justify-content-between";
        if (isTaskComplete) {
            classNames += " done"
        }
        if (priority) {
            classNames += " priority"
        }
        return (
            <li className={classNames}>
                <span onClick={this.onPriority} className="list-group-item-label">{taskName}</span>
                <input type="date" className="list-group-item-input" defaultValue={deadline} />
                <div className="d-flex justify-content-center align-items-center">
                    <button onClick={this.onIsTaskComplite} type="button" className="btn-flag btn-sm ">
                        <i className="fa-solid fa-font-awesome"></i>
                    </button>

                    <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}


export default TaskListItem;