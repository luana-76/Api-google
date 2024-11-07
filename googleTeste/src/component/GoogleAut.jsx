import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';

export function GoogleAut({setNome, setEmail, setImagem, setActive}){

    return(

        <GoogleLogin
        onSuccess={(response)=>{

            const codigoDecodificado = jwtDecode(response?.credential)
            const{name, email, picture} = codigoDecodificado;

            setNome(name);
            setEmail(email);
            setImagem(picture);
            setActive(true);

        }}

        onError={()=>{}}
            
        />

    )

}