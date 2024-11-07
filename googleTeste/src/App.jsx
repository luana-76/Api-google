import { useState } from 'react'
import './App.css'
import {GoogleOAuthProvider} from "@react-oauth/google";
import { GoogleAut } from './component/GoogleAut';

function App() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [imagem, setImagem] = useState("");
  const [isActive, setActive] = useState(false);

  return (
    <>

      <GoogleOAuthProvider clientId="//">
        
        <GoogleAut

          setNome={setNome}
          setEmail={setEmail}
          setImagem={setImagem}
          setActive={setActive}
        
        />
        
      </GoogleOAuthProvider>

      {isActive ? (

        <div>

          <img src={imagem} alt=''/>
          <p>{nome}</p>
          <p>{email}</p>

        </div>

      ):(

        ''

      )

      }

    </>
  )
}

export default App
