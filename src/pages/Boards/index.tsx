import React, { useState } from 'react'
import {Board} from '../../data/board';
import {Columns} from '../../types';
import {onDragEnd} from '../../helpers/onDragEnd';
import { AddOutline } from 'react-ionicons';
import {AddMOdal} from '../../components/modals/addModal';
import Task from '../../components/task';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const Home = () => {
  const[columns, setColumns] =useState<Columns>(Board);
  const [modalOpen, setModalOpem] = useState(false);
  const [selectdColumn, setSelectdColumn] = useState('');

  const openModal = (columnld: any) => {
    setSelectdColumn(columnld);
    setModalOpem(true);
  }

  const closeModal = () => {
    setModalOpem(false);
  }

  const handleAddTask = (taskData: any) => {
    const newBoard = {...columns};
    newBoard[selectdColumn].items.push(taskData);
  };
  

  return (
    <div>
      <DragDropContext onDragEnd={(result: any) => onDragEnd(result, columns, setColumns)}>
        <div className='w-full items-start justify-between px-5 pb-8 md:gap-0 gap10'>
          {Object.entries(columns).map(([columnId, column]:any) =>(
            <div className='w-full flex flex-col gap-0' key={columnId}
            >
              <Droppable droppableId={columnId} key={columnId}>
                {(provided:any) => (
                  <div ref={provided.innerRef}
                  {...provided.droppableProps}
                  className='flex flex-col md:w-[290px] w-[50px] gap-3 items-center py-5'
                  >
                    <div className='flex items-center justify-center py-[10px] w-full bg-white rounded-lg shadow-sm text-[#555] font-size-bold' {column.name}>
                    </div>
                    {column.items.map((task:any, index:any) =>(
                      <Draggable key={task.id.toString()}
                      draggableId={task.id.toString()}
                      index={index}
                      >
                          {(provided:any) =>(
                            <div>
                              <Task
                              provided={provided}
                              task={task}
                              />
                            </div>
                          )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <div onClick={() => openModal(columnId)}
                className='flex cursor-pointer items-center justify-center gap-1 py-[10px] md:w-[90%] w-full opacity-90 bg-white rounded'
              >
                <AddOutline color={'#555'}></AddOutline>
                + Nota
              </div>
            </div>
          ))}

        </div>
      </DragDropContext>
          <AddMOdal
            isOpen={modalOpen}
            onClose={closeModal}
            setOpen = {setModalOpem}
            handleAddTask={handleAddTask}
          />
    </div>
  )
}

export default Home