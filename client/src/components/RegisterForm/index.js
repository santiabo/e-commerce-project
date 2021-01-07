import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { createNewUser } from "../../redux/actions/user";

// Styles
import './styles.css';

export default function UserRegister() {

  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (user) => {
    dispatch(createNewUser(user));
  };

  return (
    <section>
      <div>
        <section>
          <div>
            <h1 className='Registration'>Registration</h1>
          </div>
        </section>
        <div className="card">
          <div id='div1'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <section>
                  <div className='div2'>
                    <h2 className='h2global'>Create a new account</h2>
                  </div>
                </section>
                <label className='globalLabel'>name: </label>
                {errors.firstName && <span className='globalSpan text-danger'> Name is required! </span>}
                <input
                  name="firstName" className='globalInput' ref={register({ required: true })}
                />
                <label className='globalLabel'>lastname: </label>
                {errors.lastName && <span className='globalSpan text-danger'> Lastname is required! </span>}
                <input
                  name="lastName" className='globalInput' ref={register({ required: true })}
                />
                <label className='globalLabel'>birthdate: </label>
                {errors.birthdate && <span className='globalSpan text-danger'> Birthdate is required! </span>}
                <input
                  name="birthdate" className='globalInput' ref={register({ required: true })}
                />
                <label className='globalLabel'>E-mail: </label>
                {errors.email && <span className='globalSpan text-danger'> E-mail is required! </span>}
                <input
                  name="email" className='globalInput' ref={register({ required: true })}
                />
                <label className='globalLabel'>password: </label>
                {errors.password && <span className='globalSpan text-danger'> Password is required! </span>}
                <input
                  name="checkpassword"
                  type="password" className='globalInput' ref={register({ required: true })}
                />
                <label className='globalLabel'>confirm password: </label>
                {errors.checkpassword && <span className='globalSpan text-danger'> Passwords do not match! </span>}
                <input
                  name="password"
                  type="password" className='globalInput' ref={register({ required: true })}
                />
              </div>
              <div className='div3'>
                <input className="inputButton" type="submit" value="Register" />
              </div>
              <section className='section1'>
                <div className='div4'>
                  <div style={{
                    paddingBottom: ".5rem"
                  }}>
                    <h2 className='h2global'>Have an account?</h2>
                  </div>
                </div>
              </section>
              <div className='div3'>
                <Link to="/login"><button className='linkButton'>Log In</button></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
