'use client'

import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "./progress.css";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import ProgressBar from "./ProgressBar";
import PomodoroTimer from "./Pomodoro";
import CalendarPage from "./CalendarPage";

const DATA = [
  {
    id: "1",
    name: "Academics",
    items: [
      { id: "a", name: "CCN ISE 2" },
      { id: "b", name: "DAA Lab 10" },
    ],
    tint: 1,
  },
  {
    id: "2",
    name: "Extra Curriculum",
    items: [
      { id: "c", name: "Python Tutorial", },
      { id: "d", name: "Learn OpenCV" },
    ],
    tint: 2,
  },
  {
    id: "3",
    name: "Others",
    items: [
      { id: "e", name: "Buy birthday gift" },
      { id: "f", name: "Call aunt" },
    ],
    tint: 3,
  },
];

function App() {
  const [stores, setStores] = useState(DATA);
  const [progress, setProgress] = useState(50); // Example progress value

  const handleDragAndDrop = (results) => {
    const { source, destination, type } = results;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === "group") {
      const reorderedStores = [...stores];

      const storeSourceIndex = source.index;
      const storeDestinatonIndex = destination.index;

      const [removedStore] = reorderedStores.splice(storeSourceIndex, 1);
      reorderedStores.splice(storeDestinatonIndex, 0, removedStore);

      return setStores(reorderedStores);
    }
    const itemSourceIndex = source.index;
    const itemDestinationIndex = destination.index;

    const storeSourceIndex = stores.findIndex(
      (store) => store.id === source.droppableId
    );
    const storeDestinationIndex = stores.findIndex(
      (store) => store.id === destination.droppableId
    );

    const newSourceItems = [...stores[storeSourceIndex].items];
    const newDestinationItems =
      source.droppableId !== destination.droppableId
        ? [...stores[storeDestinationIndex].items]
        : newSourceItems;

    const [deletedItem] = newSourceItems.splice(itemSourceIndex, 1);
    newDestinationItems.splice(itemDestinationIndex, 0, deletedItem);

    const newStores = [...stores];

    newStores[storeSourceIndex] = {
      ...stores[storeSourceIndex],
      items: newSourceItems,
    };
    newStores[storeDestinationIndex] = {
      ...stores[storeDestinationIndex],
      items: newDestinationItems,
    };

    setStores(newStores);
  };

  const handleAddTask = (storeId, taskName) => {
    const newTask = { id: `${storeId}-${Date.now()}`, name: taskName };
    const newStore = { ...stores.find((store) => store.id === storeId), items: [...stores.find((store) => store.id === storeId).items, newTask] };
    const newStores = [...stores];
    const storeIndex = newStores.findIndex((store) => store.id === storeId);
    newStores.splice(storeIndex, 1, newStore);
    setStores(newStores);
  };

  const handleDeleteTask = (storeId, taskId) => {
    const newStore = { ...stores.find((store) => store.id === storeId), items: stores.find((store) => store.id === storeId).items.filter((item) => item.id !== taskId) };
    const newStores = [...stores];
    const storeIndex = newStores.findIndex((store) => store.id === storeId);
    newStores.splice(storeIndex, 1, newStore);
    setStores(newStores);
  };

  return (
    <div className="flex flex-row justify-between overflow-y-auto h-full" style={{
      backgroundColor: "rgb(212, 212, 216)",
      backgroundImage: "radial-gradient(at 17% 69%, rgb(199, 210, 254) 0, transparent 80%), radial-gradient(at 3% 92%, rgb(254, 202, 202) 0, transparent 67%), radial-gradient(at 30% 53%, rgb(68, 64, 60) 0, transparent 90%), radial-gradient(at 40% 35%, rgb(5, 150, 105) 0, transparent 61%), radial-gradient(at 29% 88%, rgb(131, 24, 67) 0, transparent 60%), radial-gradient(at 75% 30%, rgb(237, 233, 254) 0, transparent 79%)"}}>
      <div className="layout__wrapper">
        <div className="card">
            <DragDropContext onDragEnd={handleDragAndDrop}>
            <div className="header">
                <h1 className="font-bold text-center text-2xl">To Do List</h1>
            </div>
            <Droppable droppableId="ROOT" type="group">
                {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                    {stores.map((store, index) => (
                    <Draggable
                        draggableId={store.id}
                        index={index}
                        key={store.id}
                    >
                        {(provided) => (
                        <div
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                            ref={provided.innerRef}
                        >
                            <StoreList store={store} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} {...store} />
                        </div>
                        )}
                    </Draggable>
                    ))}
                    {provided.placeholder}
                </div>
                )}
            </Droppable>
            </DragDropContext>
        </div>
        <div className="progress-card">
            <ProgressBar progress={progress} />
        </div>
        </div>
        <div className="flex flex-col items-center gap-4 mr-5">
            <PomodoroTimer/>
            <CalendarPage />
        </div>
    </div>
  );
}

function StoreList({ name, items, id, onAddTask, onDeleteTask }) {
    const [newTask, setNewTask] = useState("");
  
    const handleAddTaskClick = () => {
      if (newTask.trim()) {
        onAddTask(id, newTask);
        setNewTask("");
      }
    };
  
    return (
      <Droppable droppableId={id}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <div className="store-container">
              <h3>{name}</h3>
            </div>
            <div className="items-container">
              {items.length > 0 ? (
                items.map((item, index) => (
                  <Draggable draggableId={item.id} index={index} key={item.id}>
                    {(provided) => (
                      <div
                        className="item-container flex flex-row justify-between"
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                      >
                        <h4>{item.name}</h4>
                        <button onClick={() => onDeleteTask(id, item.id)}><MdDelete /></button>
                      </div>
                    )}
                  </Draggable>
                ))
              ) : (
                <p>No items in this list</p>
              )}
              {provided.placeholder}
            </div>
            <div className="add-task-container flex flex-row justify-between p-2  bg-slate-50">
              <input
                className="bg-inherit"
                type="text"
                value={newTask}
                placeholder="Add task here"
                onChange={(e) => setNewTask(e.target.value)}
              />
              <button onClick={handleAddTaskClick}><FaPlus /></button>
            </div>
          </div>
        )}
      </Droppable>
    );
  }

export default App;