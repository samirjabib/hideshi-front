
import { Input } from '../components'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../../hooks';

const registerFormFields = {
    name:'', 
    email:'', 
    password:'',
    confirmPassword:''
}

export const Register = () => {

    const navigate = useNavigate();


    const { onInputChange, name, email, password, confirmPassword } = useForm(registerFormFields);

    return(
        <section className=" min-h-[50rem] flex justify-center mx-auto container  items-center">
            <div className=" flex  w-full  justify-center p-12 bg-bg_light_primary max-w-5xl mt-24">
                <div className="md:w-1/2 px-8 md:px-16">
                    <h2 className="font-bold text-2xl text-[#2b2d42]">Registrate</h2>
                    <p className="text-xs mt-4 text-bg_dark_primary mb-4 ">¿No tienes cuenta todavia?</p>
                    <form action="" class="flex flex-col gap-4">
                        <Input 
                            onInputChange={onInputChange} 
                            type='text' 
                            placeholder='Name' 
                            name='name'
                            value={name}
                        />
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
                         <Input 
                            onInputChange={onInputChange} 
                            type='password' 
                            placeholder='Confirm password' 
                            name='confirmPassword'
                            value={confirmPassword}
                        />
                        <button className="bg-bg_dark_primary text-bg_light_primary py-2 mt-4">Login</button>
                    </form>

      
                    <div className="mt-5 text-xs border-b border-[#2b2d42] py-4 text-text_gray_for_span">
                        <a href="#">Forgot your password?</a>
                    </div>

                    <div className="mt-3 text-xs flex justify-between items-center text-text_gray_for_span">
                        <p>¿Ya tienes cuenta?</p>
                        <button
                             className="py-2 px-5 border  text-bg_dark_primary bg-bg_light_primary"
                             onClick={ () =>  navigate('/auth/login')}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </section>   
    )
}