import styles from "@/components/TaskList/TaskList.module.css"

const TaskList = ({ tasks }) => {
    if (tasks.lenght === 0) {
        return (<p>Não há tarefas no momento</p>)
    }
    
    return (
    <>
    <div>
        {/* Importando o css global */}
        <h4 className="title">Lista de Tarefas: </h4>
        {/* Importando o css modularizado */}
        <ol className={styles.items}>
            {/* Iterando sobre a lista de tarefas */}
            {tasks.map(task => (
            <li key={task.id}>{task.text}</li>
            ))}
        </ol>
    </div>
    </>
    );
};

export default TaskList;