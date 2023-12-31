import React, { useState } from "react";
import { Statement } from "typescript";

interface IState{
count:number;
}

interface IProps{

}

let Counter: React.FC<IProps> = () => {

    let [state, setState] = useState<IState>({
        count:0
    })

    let incr = ():void => {
        setState({count:state.count + 1})
    };

    let decr = ():void => {
        setState({count:state.count - 1})
    };

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <p className="h3 display-3">{state.count}</p>
                            <button className="btn btn-success m-1" onClick={() => incr()}>Increment</button>
                            <button className="btn btn-danger m-1" onClick={() => decr()}>Decrement</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Counter;