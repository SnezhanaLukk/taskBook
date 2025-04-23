import './app-info.css';

const AppInfo = (props) => {
    return (
        <div className="app-info">
            <h1>Задачник</h1>
            <h2>Общее количество задач: {props.taskQuantity}</h2>
            <h3>Выполнено: {props.completedTaskNumber}</h3>
            <h3>Важных: {props.importantTask}</h3>
        </div>
    )
}
export default AppInfo;