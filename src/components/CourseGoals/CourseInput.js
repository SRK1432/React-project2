// import React, { useState } from 'react'
// import CourseGoalList from './CourseGoalList';

// const CourseInput = () => {
//   const [input,setInput]=useState([])

//   const addHandler=()=>{
//     const enterdinp=inputref.current.value;
//     setInput([...input,enterdinp])
//     inputref.current.value=''
//   }
//   return (
//     <div>CourseInput
//       <label>Add Course Goal</label>
//       <input type='text' onChange={changeEventHandler}></input>
//       <button onClick={addHandler}>Add Goal</button>
//       <CourseGoalList data={input} />
//     </div>
//   )
// }

// export default CourseInput

import React, { useState } from 'react';
import CourseGoalList from './CourseGoalList';
import "./CourseInput.css"

const CourseInput = () => {
  const [input, setInput] = useState('');
  const [goal, setGoal] = useState([]);

  const addGoalHandler = () => {
    if (input!== '') {
      setGoal([input, ...goal]); 
      setInput(''); 
    }
  };
  const cancelHandler=(index)=>{
    setGoal(goal.filter((_, i) => i !== index));
  }

  return (
    <div className='Parent'>
    <div className='goal-list'>
      <div>
        <label>Add Goal</label>
      </div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)} 
        />
      </div>
      <div>
        <button onClick={addGoalHandler}>Add Goal</button> 
      </div>
    </div>
      <CourseGoalList  data={goal} onCancel={cancelHandler}/> 
    </div>
      
  );
};

export default CourseInput;
