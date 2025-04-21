import './app-filter.css'

const AppFilter = () => {
    return (
        <div className='btn-group app-filter'>
            <button
                type='button'
                className="btn btn-light">
                Все задачи
            </button>
            <button
                type='button'
                className="btn btn-outline-light">
                Выполнены
            </button>
            <button
                type='button'
                className="btn btn-outline-light">
                Не выполнены
            </button>
            <button
                type='button'
                className="btn btn-outline-light">
                Важные
            </button>
            <button
                type='button'
                className="btn btn-outline-light">
                Срочные
            </button>
        </div>
    )
}

export default AppFilter;