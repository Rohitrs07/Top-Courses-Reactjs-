import React from "react";
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    //let description = `${course.description.substring(0,100)}...`;

    function clickHandler(){
        if(likedCourses.includes(course.id)){
            //pehle se like huaa pada hai mtlb vo likedcourses waale array me hai
            // to ab agr ham button p click krenge to vo us array me se hatt jana chahiye
            setLikedCourses( (prev) => prev.filter( (cid) => (cid !== course.id)));
            toast.warning("Like Removed!!!");
        }
        else{
            //pehle se liked nhi tha ye course to ab is course ki id ko ham liked course k array me insert krenge
            if(likedCourses.length === 0){   // agr likedCourse wala array pura khali hai to direct insert krenge
                setLikedCourses([course.id]);
            }
            else{         //warna pichhle jitne inserted hai unke saath insert krenge
                setLikedCourses( (prev) => [...prev,course.id]);
            }
            toast.success("Liked Successfully...");
        }
    }

    return(
        <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-sm overflow-hidden">

            <div className="relative">
                <img src={course.image.url}></img>    
                <div className="absolute w-[40px] h-[40px] bg-white rounded-full right-2 -bottom-3
                grid place-items-center ">
                    <button onClick={clickHandler}>
                        {
                            !likedCourses.includes(course.id) ? 
                            (<FcLikePlaceholder fontSize="1.75rem" />) : (<FcLike fontSize="1.75rem" />)
                            //likedCourses.includes(course.id) ? 
                            //(<FcLike fontSize="1.75rem" />) : (<FcLikePlaceholder fontSize="1.75rem" />)
                        }
                    </button>
                </div>
            </div>

            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6"> {course.title} </p>
                <p className="text-white mt-2"> 
                    {
                        course.description.length >= 100 ?
                            (course.description.substr(0,100) + "...") : (course.description)
                        }
                </p>
            </div>

        </div>
    );

}

export default Card;