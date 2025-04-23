import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import TaskList from '../task-list/task-list';
import TaskAddForm from '../task-add-form/task-add-form';

import './app.css';

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
    onTogglePriority = (id) => {
        this.setState(({ taskList }) => ({
            taskList: taskList.map(item => {
                if (item.id === id) {
                    return { ...item, priority: !item.priority }
                }
                return item
            })
        }))
        // console.log(`priority this ${id}`)
    }
    onToggleIsTaskComplete = (id) => {
        // this.setState(({ taskList }) => {
        //     const index = taskList.findIndex(item => item.id === id);
        //     const old = taskList[index];
        //     const newItem = { ...old, isTaskComplete: !old.isTaskComplete };
        //     const newArray = [...taskList.slice(0, index), newItem, ...taskList.slice(index + 1)]
        //     return {
        //         data: newArray
        //     }
        // })
        // console.log(`isTaskComplete this ${id}`)
        this.setState(({ taskList }) => ({
            taskList: taskList.map(item => {
                if (item.id === id) {
                    return { ...item, isTaskComplete: !item.isTaskComplete }
                }
                return item;
            })
        }))
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
                    onDelete={this.deleteItem}
                    onTogglePriority={this.onTogglePriority}
                    onToggleIsTaskComplete={this.onToggleIsTaskComplete} />
                <TaskAddForm addTask={this.addItem} />
            </div>
        )
    }
}
export default App;