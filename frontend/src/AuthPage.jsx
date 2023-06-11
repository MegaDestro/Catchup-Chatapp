//Opening page for the chat app with form to enter username

import axios from "axios";

const AuthPage = (props) => {
    const onSubmit = (e) => {
    	e.preventDefault();
      	const { value } = e.target[0];
      	axios
		.post(
        	"http://localhost:3001/authenticate",
         	{ username: value }
        )
		//Successful request
        .then(r => props.onAuth({ ...r.data , secret : value  }))
		//Sailed request 
      	.catch(e => console.log('error', e))
    };

	// Render a form with an input field and a submit button
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">Welcome 👋 \n Welcome to my Chatapp</div>
  
          <div className="form-subtitle">Set a username to get started</div>
  
          <div className="auth">
            <div className="auth-label">Username</div>
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit">
              Enter
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AuthPage;