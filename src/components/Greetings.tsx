import React, { useState } from "react";

interface IProps{}
interface IState{
    message: string;
}

let Greetings:React.FC<IProps> = () => {

    let [state, setState] = useState<IState>({
        message:'hello'
    })

    let ChangeMessage = (greet: string):void => {
        setState(
            {message: greet}
        )
    }

    return(
        <>
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-body">
                            <p className="h3 display-3">{state.message}</p>
                            <button className="btn btn-success m-1" onClick={() => ChangeMessage('Good Morning')}>Good Morning</button>
                            <button className="btn btn-warning m-1" onClick={() => ChangeMessage('Good Afternoon')}>Good Afternoon</button>
                            <button className="btn btn-danger m-1" onClick={() => ChangeMessage('Good Evening')}>Good Evening</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Greetings