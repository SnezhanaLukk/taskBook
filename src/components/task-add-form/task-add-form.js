import './task-add-form.css';

const TaskAddForm = () => {
    return (
        <div className='app-add-form'>
            <h3>Добавить новую задачу</h3>
            <form action="" className='add-form d-flex'>
                <input type="text" className='form-control nem-post-label' placeholder='Новая задача' />
                <input type="date" className='form-control nem-post-label' placeholder='Дедлайн' />
                <button type='submit' className='btn btn-outline-light'>Добавить</button>
            </form>

        </div>
    )
}

export default TaskAddForm;