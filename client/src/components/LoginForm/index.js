import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logInUser } from '../../redux/actions/user'
import '../LoginForm/style.css';


export default function LoginUser() {

  const history = useHistory();  

  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();

  const isUser = useSelector(state=> state.user.isUser)

  useEffect(()=>{
    if(isUser){
      history.push('/');
    }
  },[isUser])


  const onSubmit = (user) => {
    dispatch(logInUser(user));
  };

  //const onSubmit = data => console.log("data:", data);

  return (
    <section className="main-wrapper xs-col-12">
      <div className="wrapper page-title">
        <section className="wrapper-section">
          <h1 id="title" className="pageTitle">Your Account</h1>
        </section>
      </div>
      <div className="pageContent">
        <section className="section-col">
          <div className="cArd">
            <div className="block">
              <form id="login-form" method="post" onSubmit={handleSubmit(onSubmit)}>
                <section className="subTitle">
                  <div className="header-sub">
                    <h2 id="sub">Log In</h2>
                  </div>
                </section>
                <label for="email" className="label-email">E-mail: </label>
                {errors.email && <span id="spn" className="text-danger">User incorrect!</span>}
                <input type="text" className="text-input" name="email" maxLength="75" ref={register({ required: true })} />
                <label for="password" className="label-password password">Password: </label>
                {errors.password && <span id="spn" className="text-danger">Password incorrect!</span>}
                <input type="password" className="text-input psw" name="password" ref={register({ required: true })} />
                <div className="wrapper-buttn-link">
                  <input type="submit" className="loged-button" value="Log In" />
                </div>
                <div className="wrapper-buttn-link">
                  <Link id="lnk" to="/reset/account/password"><p className="note">Forgot password?</p></Link>
                </div>
                <section className="subForm">
                  <div className="header-subform">
                    <div>
                      <h2 id="sub">Don't have an account?</h2>
                    </div>
                  </div>
                </section>
                <div className="wrapper-button-form">
                  <Link id="lnk2" to="/register"><button className="register-button button--secondary button--small">Register here</button></Link>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}