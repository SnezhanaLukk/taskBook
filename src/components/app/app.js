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
            textSearch: '',
            filter: 'all'
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
    }
    onToggleIsTaskComplete = (id) => {
        this.setState(({ taskList }) => ({
            taskList: taskList.map(item => {
                if (item.id === id) {
                    return { ...item, isTaskComplete: !item.isTaskComplete }
                }
                return item;
            })
        }))
    }

    searchTask = (tasks, text) => {
        if (text.length === 0) {
            return tasks;
        }

        return tasks.filter(task => {
            return task.taskName.indexOf(text) > -1
        })
    }

    onUpdateSearch = (textSearch) => {
        this.setState({ textSearch }); //({textSearch: textSearch}) === ({textSearch})
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'priority':
                return items.filter(item => item.priority);
            case 'deadline':
                return items.sort((a, b) => new Date(a.date) - new Date(b.date));
            case 'isTaskComplete':
                return items.filter(item => item.isTaskComplete);
            case 'isNotTaskComplete':
                return items.filter(item => !item.isTaskComplete);
            default:
                return items;
        }
    }
    onFilterPost = (filter) => {
        this.setState({ filter });
    }

    render() {
        const { taskList, textSearch, filter } = this.state;
        // const visibleTask = this.searchTask(taskList, textSearch);
        const visibleTask = this.filterPost(this.searchTask(taskList, textSearch), filter);
        return (
            <div className="app">
                <AppInfo
                    taskQuantity={taskList.length}
                    completedTaskNumber={taskList.filter(item => item.isTaskComplete === true).length}
                    importantTask={taskList.filter(item => item.priority === true).length} />

                <div className='search-panel'>
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter filter={filter} onFilterPost={this.onFilterPost} />
                </div>
                <TaskList
                    taskList={visibleTask}
                    onDelete={this.deleteItem}
                    onTogglePriority={this.onTogglePriority}
                    onToggleIsTaskComplete={this.onToggleIsTaskComplete} />
                <TaskAddForm addTask={this.addItem} />
            </div>
        )
    }
}
export default App;