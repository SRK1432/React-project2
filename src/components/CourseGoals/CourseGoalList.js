import React from 'react';
import "./CourseGoalList.css"

const CourseGoalList = ({ data, onCancel }) => {
  if (!data || data.length === 0) {
    return <p>No goals entered.</p>;
  }
  return (
    <div >
      
      <ul>
        {data.map((goal, index) => (
            <li onClick={()=>onCancel(index)} key={index}>{goal}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseGoalList;
