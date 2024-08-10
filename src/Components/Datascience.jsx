import data from '../data.json';
import CourseCard from './CourseCard';

const Datascience = ()=>{
    const datascience = data.filter((c)=>c.type === "Data Science");

    return(
        <div className='coursecard'>
            {
                datascience.map((course)=>(
                    <CourseCard key={course.id} {...course}/>
                ))
            }
        </div>
    );
}

export default Datascience;