import data from '../data.json';
import CourseCard from './CourseCard';

const Coding = () => {
    const coding = data.filter((c) => c.type === 'Coding');
    return(
        <div className='coursecard'>
            {
                coding.map((course)=>(
                    <CourseCard key={course.id} title={course.title} image={course.image} type={course.type}/>
                ))
            }
        </div>
    );
};

export default Coding;