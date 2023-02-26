
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../../hooks';
import { Input } from '../components'
import { useAuthStore } from '../hooks/useAuthStore';

const loginFormFields = {email:'', password:'',}


//NO TENGO SONIDO REINICIO LLAMADA 1S

{}
export const Login = () => {

    const { onInputChange, email, password, onResetForm } = useForm(loginFormFields);
    const { startLogin } = useAuthStore();


    const onHandleLogin = (event) => {
        event.preventDefault()
        startLogin({email, password})
        onResetForm();
    }

    return(
        <section className=" min-h-[50rem] flex justify-center mx-auto container  items-center">
            <div className=" flex  w-full  justify-center p-12 bg-bg_light_primary max-w-3xl mt-24">
                <div className="md:w-1/2 px-8 md:px-16">
                    <h2 className="font-bold text-2xl text-[#2b2d42]">Login</h2>
                    <p className="text-xs mt-4 text-bg_dark_primary mb-4 ">Logea con tu email y contraseña.</p>
                    <form 
                        action="" 
                        className="flex flex-col gap-4"
                    >
                        <Input 
                            onInputChange={onInputChange} 
                            type='email' 
                            placeholder='E-mail' 
                            name='email'
                            value={email}
                        />
                        <Input 
                            onInputChange={onInputChange} 
                            type='password' 
                            placeholder='Password' 
                            name='password'
                            value={password}
                        />
                        <button 
                            className="bg-bg_dark_primary text-bg_light_primary py-2 mt-4"
                            onClick={onHandleLogin}
                        >
                            Login
                        </button>
                    </form>

                    <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                        <hr className="border-gray-400"/>
                        <p className="text-center text-sm">OR</p>
                        <hr className="border-gray-400"/>
                    </div>

        
                    <div className="mt-5 text-xs border-b border-[#2b2d42] py-4 text-text_gray_for_span">
                        <a href="#">Forgot your password?</a>
                    </div>

                    <div className="mt-3 text-xs flex justify-between items-center text-text_gray_for_span">
                        <p>Don't have an account?</p>
                        <button 
                            className="py-2 px-5 border  text-bg_dark_primary bg-bg_light_primary"
                            onClick={ () =>  navigate('/auth/register')}
                        >
                          Register
                        </button>
                    </div>
                </div>
            </div>
        </section>   
    )
}