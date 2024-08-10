import CourseCard from './CourseCard';
import data from '../data.json';
const AllCourses = ()=>{
    return (
        <div className='coursecard'>
            {
                data.map((course) => (
                    <CourseCard key={course.id} title={course.title} image={course.image} type={course.type}/>
                )) 
            }
        </div>
    );
};

export default AllCourses;