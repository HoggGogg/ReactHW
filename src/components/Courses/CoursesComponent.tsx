import './Courses.css'
import {coursesAndDurationArray} from "../../arrays.ts";
import type {CourseModel} from "../../models/CourseModel.ts";
import {CourseComponent} from "../Course/CourseComponent.tsx";

export const CoursesComponent = () => {
    return (
        <ul>
            {
                coursesAndDurationArray.map((course: CourseModel, index: number) => {
                    return <CourseComponent course={course} key={index}/>
                })
            }
        </ul>
    );
};