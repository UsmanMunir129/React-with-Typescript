import React, {useState} from "react";
import { IUser } from "../Models/IUser";

interface IProps{}
interface IState{
    user: IUser
}

let LoginForm:React.FC = () => {

    let [state, setState] = useState<IState>({
        user:{
            username: '',
            password:''
        }
    })

    let updateInput = (event:React.ChangeEvent<HTMLInputElement>):void => {
        setState({
            user : {
                ...state.user,
                [event.target.name]: event.target.value
            }
        })
    }
    let login = (event:React.FormEvent<HTMLFormElement>):void => {
        event.preventDefault();
        console.log('Login Success', state.user.username, state.user.password)
    }
    return(
        <>
        <pre>{JSON.stringify(state.user)}</pre>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header text-center bg-primary text-white">
                            <p>Login Here</p>
                        </div>
                        <div className="card-body">
                            <form onSubmit={login}>
                                <div className="mb-2">
                                    <input
                                        name={'username'}
                                        required={true}
                                        value={state.user.username}
                                        onChange={updateInput}
                                        type={'text'} className='form-control' placeholder="Username" />
                                </div>
                                <div className="mb-2">
                                    <input name={'password'} required={true} 
                                    value={state.user.password}
                                    onChange={updateInput}
                                    type={'password'} className='form-control' placeholder="Password" />
                                </div>
                                <div className="mb-2">
                                    <input type={'submit'} className='btn btn-primary' value='Login' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default LoginForm