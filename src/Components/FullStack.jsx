import data from '../data.json';
import CourseCard from './CourseCard';

const FullStack = () => {
    const fullstack = data.filter((c) => c.type === "Full Stack Development");

    return(
        <div className='coursecard'>
            {
                fullstack.map((course)=>(
                    <CourseCard key={course.id} {...course}/>
                ))
            }
        </div>
    );
}
export default FullStack;