import React from "react";
import {UserModel} from "../../models/models.tsx";

interface ICardProps {
    userInfo: UserModel;
}

const Card: React.FC<ICardProps> = ({userInfo}) => {
    const {currentModule, course, id, level, rating, photo, fullName, time }:UserModel = userInfo;
    const isModuleComplete: boolean = currentModule === course.maxModules;
    const percentage: number = !isModuleComplete ? Math.ceil(currentModule/course.maxModules*100) : 0;

    return (
        <div className="card">
            <div className="image__container">
                <img
                    src={course.courseImage}
                    alt=""
                />
                <div className="level">{level}</div>
            </div>

            <h3 className="card__title">{course.courseTitle}</h3>

            <div className="card__info">
                <div className="user">
                    <img
                        src={photo}
                        alt={fullName}
                    />
                    <p>{fullName}</p>
                </div>
                <div className="rating">
                    <p>{rating}</p>
                </div>
            </div>

            { !isModuleComplete &&
                    <div>
                        <progress value={percentage} max="100">
                            {percentage}%
                        </progress>
                        <div className="card__info">
                            <p>{currentModule} / {course.maxModules} Modules</p>
                            <div>{percentage} %</div>
                        </div>
                    </div>
            }

            <div className="card__info">
                <div>{id} Student</div>
                <div>{currentModule} Modules</div>
                <div>{time}</div>
            </div>
        </div>
    );
}

export default Card;