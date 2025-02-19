import { useState } from 'react';
import TaskInput from '../../components/Input';
import Lists from '../../components/Lists';

function TodoList() {
  const [editedId, setEditedId] = useState('');
  const [lists, setLists] = useState([
    { id: 1, name: 'List 1' },
    { id: 2, name: 'List 2' },
    { id: 3, name: 'List 3' },
  ]);

  const handleDeleteTask = (id) => {
    setLists(lists.filter((list) => list.id !== id));
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
      <div style={{ maxWidth: '640px', width: '100%' }}>
        <h1>Todo List</h1>
        <TaskInput
          onEditTask={(input) => {
            setLists((prevLists) => prevLists.map((list) => list.id === editedId ? { ...list, name: input } : list));
            setEditedId('');
          }}
          editedList={lists.find((list) => list.id === editedId)}
          onAddTask={(input) => {
            setLists((prevLists) => [...prevLists, { id: new Date().toISOString(), name: input }]);
          }}
        />
        <Lists onEdit={setEditedId} onDelete={handleDeleteTask} lists={lists} />
      </div>
    </div>
  );
}

export default TodoList;