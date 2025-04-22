import { Component } from 'react';
import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import TaskList from '../task-list/task-list';
import TaskAddForm from '../task-add-form/task-add-form';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskList: [
                { taskName: 'Помыть пол', date: '2025-07-13', priority: false, isTaskComplete: false, id: 1 },
                { taskName: 'Полить цветы', date: '2025-05-01', priority: false, isTaskComplete: true, id: 2 },
                { taskName: 'Выбросить мусор', date: '2025-04-23', priority: true, isTaskComplete: false, id: 3 },
                { taskName: 'Приготовить ужин', date: '2025-05-17', priority: true, isTaskComplete: true, id: 4 },
            ],

        }
        this.maxId = 5;
    }
    deleteItem = (id) => {
        this.setState(({ taskList }) => {
            return {
                taskList: taskList.filter(elem => elem.id !== id)
            }
        })
    }
    addItem = (taskName, date) => {
        const newItem = {
            taskName,
            date,
            priority: false,
            isTaskComplete: false,
            id: this.maxId++
        }
        this.setState(({ taskList }) => {
            const newArray = [...taskList, newItem];
            return {
                taskList: newArray
            }
        })
    }
    render() {
        return (
            <div className="app">
                <AppInfo />

                <div className='search-panel'>
                    <SearchPanel />
                    <AppFilter />
                </div>
                <TaskList
                    taskList={this.state.taskList}
                    onDelete={this.deleteItem} />
                <TaskAddForm addTask={this.addItem} />
            </div>
        )
    }
}
export default App;