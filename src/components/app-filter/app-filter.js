import './app-filter.css'

const AppFilter = (props, onFilterPost) => {

    const buttonsData = [
        { name: 'all', label: 'Все задачи' },
        { name: 'priority', label: 'Важные' },
        { name: 'isTaskComplete', label: 'Выполнены' },
        { name: 'isNotTaskComplete', label: 'Не выполнены' },
        { name: 'deadline', label: 'Сортировка по дате' }
    ]

    const buttons = buttonsData.map(({ name, label }) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button type='button'
                className={`btn ${clazz}`}
                key={name}
                onClick={() => props.onFilterPost(name)}>
                {label}
            </button>
        )
    })

    return (
        <div className='btn-group app-filter'>
            {buttons}
        </div>
    )
}

export default AppFilter;