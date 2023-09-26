import React from "react";

interface IProps{

}
interface IState{
name: string;
age: number;
title: string;
}

export class EmployeeClass extends React.Component<IProps, IState>{
    constructor(props: IProps){
        super(props)
        this.state = {
            name: 'Ayesha',
            age: 24,
            title: 'software engineer'
        } as IState
    }

    
 render() {
    let {name, age, title} = this.state
    return(
        <React.Fragment>
            <h3>Employee Class Components</h3>
            <ul className='list-group'>
                <li className="list-group-item">name : {name}</li>
                <li className="list-group-item">age : {age}</li>
                <li className="list-group-item">title : {title}</li>
            </ul>
        </React.Fragment>
    );
 }
}