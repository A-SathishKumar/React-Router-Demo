import React from 'react';
import './CourseCard.css';
// eslint-disable-next-line react/prop-types
const CourseCard = ({title, image,type})=>{

    return(
        <div style={{margin:8,padding:8,border:"1px solid black", height:400, width:300}}>
            <img src={image} alt="course" style={{height:200, width:300}} />
            <h2>{title}</h2>
            <p>{type}</p>
        </div>
    );
};

export default CourseCard;