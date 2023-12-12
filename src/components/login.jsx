import { Input } from "../ui"
import { useState } from 'react'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className="text-center mt-5">
            <main className="form-signin w-25 m-auto ">
        <form>
        <img
            className="mb-4"
            src="/docs/5.3/assets/brand/bootstrap-logo.svg"
            alt=""
            width="72"
            height="57"
        />
        <h1 className="h3 mb-3 fw-normal">Please Login</h1>

            <Input label={'Email address'} state={setEmail} setState={setEmail}/>
            <Input label={'Password'} type={'password'} state={setPassword} setState={setPassword}/>

        <button className="btn btn-primary w-100 py-2 mt-2" type="submit">
            Login
        </button>
        </form>
    </main>
        </div>
    )
}

export default Login
