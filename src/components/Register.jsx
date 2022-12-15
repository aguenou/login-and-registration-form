import { useState } from "react";

export const Register = (props)=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email)
    }

    return(
        <div className="container">
            <h2>Inscription</h2>
            <form onSubmit={handleSubmit} className="register-form">
                <label htmlFor="name">Name</label>
                <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" name="name" id="name" />
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" name="email" id="email" placeholder="Entrez votre email" />
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" name="password" id="password" placeholder="Entrez votre mot de passe" />
                <button type="submit">Register</button>
            </form>
            <button className="link-btn" onClick={() =>props.onFormSwitch('login')}>Vous avez déjà un compte? Se connecter</button>
        </div>
    )
}