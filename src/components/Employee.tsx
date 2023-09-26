import React, { useState } from "react";

interface IProps{

}

interface IState{
    name: string;
    age: number;
    title: string;
}
let Employee:React.FC<IProps> = () => {

    let [state, setState] = useState<IState>({
        name:'Ayesha',
        age:24,
        title: 'Software Engineer'
    });

    let [num, setNum] = useState<number>(0)
    return(
        <React.Fragment>
            <h3>Employee Component</h3>
            <ul className="list-group">
                <li className="list-group-item">name: {state.name}</li>
                <li className="list-group-item">age: {state.age} </li>
                <li className="list-group-item">title: {state.title}</li>
                <li className="list-group-item">Number: {num}</li>
                <button onClick={() => setNum(num+1)}>set state</button>
                {/* <button onClick={() => setState({name:'usman', age:2, title: 'good'})}>set state</button> */}
            </ul>
        </React.Fragment>
    );
}

export default Employee