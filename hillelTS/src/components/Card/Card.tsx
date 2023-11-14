import {UserModel} from "../../models/models.tsx";

const Card = (props: {userInfo:UserModel}) => {
    const userInfo: UserModel = props.userInfo;
    const isModuleComplete: boolean = userInfo.currentModule === userInfo.course.maxModules;
    const percentage: number = !isModuleComplete ? Math.ceil(userInfo.currentModule/userInfo.course.maxModules*100) : 0;

    return (
        <div className="card">
            <div className="image__container">
                <img
                    src={userInfo.course.courseImage}
                    alt=""
                />
                <div className="level">{userInfo.level}</div>
            </div>

            <h3 className="card__title">{userInfo.course.courseTitle}</h3>

            <div className="card__info">
                <div className="user">
                    <img
                        src={userInfo.photo}
                        alt={userInfo.fullName}
                    />
                    <p>{userInfo.fullName}</p>
                </div>
                <div className="rating">
                    <p>{userInfo.rating}</p>
                </div>
            </div>

            { !isModuleComplete &&
                    <div>
                        <progress value={percentage} max="100">
                            {percentage}%
                        </progress>
                        <div className="card__info">
                            <p>{userInfo.currentModule} / {userInfo.course.maxModules} Modules</p>
                            <div>{percentage} %</div>
                        </div>
                    </div>
            }

            <div className="card__info">
                <div>{userInfo.id} Student</div>
                <div>{userInfo.currentModule} Modules</div>
                <div>{userInfo.time}</div>
            </div>
        </div>
    );
}

export default Card;