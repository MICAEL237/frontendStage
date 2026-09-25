import NavLogin from './nav'
import DriotePage from '../register/droite'
import LoginForm from './LoginForm'

export default function LoginPage(){
    return(
        <div className="max-w-310 h-162.5 bg-white mx-42 my-2 ">
            <NavLogin/>
            <div  className="w-full h-150.5 flex justify-between ">
                <DriotePage/>
                <LoginForm/>
            </div>
        </div>
    )
}