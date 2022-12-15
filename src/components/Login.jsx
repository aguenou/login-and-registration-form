import { useState } from "react"

export const Login = (props) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email)
    }

    return(
        <div className="container">
            <h2>Connexion</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" name="email" id="email" placeholder="Entrez votre email" />
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" name="password" id="password" placeholder="Entrez votre mot de passe" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={()=>props.onFormSwitch('register')}>Vous n'avez pas encore de compte? S'inscrire</button>
        </div>
    );
}