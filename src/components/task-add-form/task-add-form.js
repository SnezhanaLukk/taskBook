import { Component } from 'react';
import './task-add-form.css';

class TaskAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            deadline: ''
        }
    }
    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const { task, deadline } = this.state;
        return (
            <div className='app-add-form'>
                <h3>Добавить новую задачу</h3>
                <form action="" className='add-form d-flex'>
                    <input
                        onChange={this.onValueChange}
                        name="task"
                        value={task}
                        type="text"
                        className='form-control nem-post-label'
                        placeholder='Новая задача' />
                    <input
                        onChange={this.onValueChange}
                        name="deadline"
                        value={deadline}
                        type="date"
                        className='form-control nem-post-label'
                        placeholder='Дедлайн' />
                    <button type='submit' className='btn btn-outline-light'>Добавить</button>
                </form>

            </div>
        )
    }
}

export default TaskAddForm;