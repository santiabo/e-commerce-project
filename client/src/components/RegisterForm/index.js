import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


export default function UserRegister() {

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => console.log("esto es data: ", data);

  return (
    <section>
      <div>
        <section>
          <div>
            <h1 style={{
              marginTop: "25px",
              marginBottom: "25px",
              fontWeight: "700",
              fontFamily: "Segoe UI",
              textAlign: "center",
            }}>Registration</h1>
          </div>
        </section>
        <div className="card" style={{
          minWidth: "768px",
          marginRight: "auto",
          marginLeft: "auto",
          width: "20%",
          backgroundColor: "#f4f4f3",
          padding: "3rem",
          overflow: "hidden",
          marginBottom: "3rem",
          boxShadow: "0px 18px 35px 0px rgba(0, 0, 0, 0.29), 0px 6px 10px 0px rgba(0, 0, 0, 0.5)",
          borderRadius: "3px"
        }}>
          <div style={{
            marginBottom: "0",
            position: "relative"
          }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div style={{
                display: "block"
              }}>
                <section>
                  <div style={{
                    marginBottom: "1rem",
                    position: "relative",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "1px"
                  }}>
                    <h2 style={{
                      fontSize: "1.125rem",
                      fontFamily: "-apple-system, Segoe UI Symbol, BlinkMacSystemFont, sans-serif",
                      fontWeight: "700",
                      lineHeight: "1.5",
                      display: "block",
                      marginBlockStart: "0.83em",
                      marginBlockEnd: "0.83em",
                      marginInlineStart: "0px",
                      marginInlineEnd: "0px"
                    }}>Create a new account</h2>
                  </div>
                </section>
                <label style={{
                  top: "-21px",
                  opacity: "1",
                  transition: "top 0.1s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.1s cubic-bezier(0.165, 0.84, 0.44, 1)",
                  color: "#929292",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  fontSize: "0.6875rem",
                  padding: "2px 0",
                  cursor: "default"
                }}>name: </label>
                {errors.name && <span style={{
                  marginLeft: ".5rem",
                  marginBottom: "3rem",
                  fontSize: "0.6875rem"
                }} className="text-danger"> Name is required! </span>}
                <input
                  name="name"
                  style={{
                    WebkitWritingMode: "horizontal-tb !important",
                    boxShadow: "inset 0px 1px 2px 0px rgba(0, 0, 0, 0.21), inset 0px 0px 0px 1px rgba(0, 0, 0, 0.12)",
                    fontSize: "1.25rem",
                    marginBottom: "0",
                    width: "100%",
                    border: "none",
                    borderRadius: "0.25rem",
                    padding: ".375rem .5rem",
                    lineHeight: "1.5",
                    backgroundColor: "rgb(232, 240, 254) !important",
                    color: "internal-light-dark(black, white) !important",
                    textRendering: "auto",
                    letterSpacing: "normal",
                    wordSpacing: "normal",
                    textTransform: "none",
                    textIndent: "0px",
                    textShadow: "none",
                    display: "inline-block",
                    textAlign: "start",
                    cursor: "text",
                    WebkitFontSmoothing: "antialiased"
                  }}
                  ref={register({ required: true })}
                />
                <label style={{
                  top: "-21px",
                  opacity: "1",
                  transition: "top 0.1s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.1s cubic-bezier(0.165, 0.84, 0.44, 1)",
                  color: "#929292",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  fontSize: "0.6875rem",
                  padding: "2px 0",
                  cursor: "default"
                }}>lastname: </label>
                {errors.lastname && <span style={{
                  marginLeft: ".5rem",
                  marginBottom: "3rem",
                  fontSize: "0.6875rem"
                }} className="text-danger"> Lastname is required! </span>}
                <input
                  name="lastname"
                  style={{
                    WebkitWritingMode: "horizontal-tb !important",
                    boxShadow: "inset 0px 1px 2px 0px rgba(0, 0, 0, 0.21), inset 0px 0px 0px 1px rgba(0, 0, 0, 0.12)",
                    fontSize: "1.25rem",
                    marginBottom: "0",
                    width: "100%",
                    border: "none",
                    borderRadius: "0.25rem",
                    padding: ".375rem .5rem",
                    lineHeight: "1.5",
                    backgroundColor: "rgb(232, 240, 254) !important",
                    color: "internal-light-dark(black, white) !important",
                    textRendering: "auto",
                    letterSpacing: "normal",
                    wordSpacing: "normal",
                    textTransform: "none",
                    textIndent: "0px",
                    textShadow: "none",
                    display: "inline-block",
                    textAlign: "start",
                    cursor: "text",
                    WebkitFontSmoothing: "antialiased"
                  }}
                  ref={register({ required: true })}
                />
                <label style={{
                  marginTop: "1rem",
                  top: "-21px",
                  opacity: "1",
                  transition: "top 0.1s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.1s cubic-bezier(0.165, 0.84, 0.44, 1)",
                  color: "#929292",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  fontSize: "0.6875rem",
                  padding: "2px 0",
                  cursor: "default"
                }}>E-mail: </label>
                {errors.Email && <span style={{
                  marginLeft: ".5rem",
                  marginBottom: "3rem",
                  fontSize: "0.6875rem"
                }} className="text-danger"> E-mail is required! </span>}
                <input
                  name="Email"
                  style={{
                    WebkitWritingMode: "horizontal-tb !important",
                    boxShadow: "inset 0px 1px 2px 0px rgba(0, 0, 0, 0.21), inset 0px 0px 0px 1px rgba(0, 0, 0, 0.12)",
                    fontSize: "1.25rem",
                    marginBottom: "0",
                    width: "100%",
                    border: "none",
                    borderRadius: "0.25rem",
                    padding: ".375rem .5rem",
                    lineHeight: "1.5",
                    backgroundColor: "rgb(232, 240, 254) !important",
                    color: "internal-light-dark(black, white) !important",
                    textRendering: "auto",
                    letterSpacing: "normal",
                    wordSpacing: "normal",
                    textTransform: "none",
                    textIndent: "0px",
                    textShadow: "none",
                    display: "inline-block",
                    textAlign: "start",
                    cursor: "text",
                    WebkitFontSmoothing: "antialiased"
                  }}
                  ref={register({ required: true })}
                />
                <label style={{
                  marginTop: "1rem",
                  top: "-21px",
                  opacity: "1",
                  transition: "top 0.1s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.1s cubic-bezier(0.165, 0.84, 0.44, 1)",
                  color: "#929292",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  fontSize: "0.6875rem",
                  padding: "2px 0",
                  cursor: "default"
                }}>password: </label>
                {errors.password && <span style={{
                  marginLeft: ".5rem",
                  marginBottom: "3rem",
                  fontSize: "0.6875rem"
                }}
                  className="text-danger"> Password is required! </span>}
                <input
                  name="checkpassword"
                  type="password"
                  style={{
                    WebkitWritingMode: "horizontal-tb !important",
                    boxShadow: "inset 0px 1px 2px 0px rgba(0, 0, 0, 0.21), inset 0px 0px 0px 1px rgba(0, 0, 0, 0.12)",
                    fontSize: "1.25rem",
                    marginBottom: "0",
                    width: "100%",
                    border: "none",
                    borderRadius: "0.25rem",
                    padding: ".375rem .5rem",
                    lineHeight: "1.5",
                    backgroundColor: "rgb(232, 240, 254) !important",
                    color: "internal-light-dark(black, white) !important",
                    textRendering: "auto",
                    letterSpacing: "normal",
                    wordSpacing: "normal",
                    textTransform: "none",
                    textIndent: "0px",
                    textShadow: "none",
                    display: "inline-block",
                    textAlign: "start",
                    cursor: "text",
                    WebkitFontSmoothing: "antialiased"
                  }}
                  ref={register({ required: true })}
                />
                <label style={{
                  marginTop: "1rem",
                  top: "-21px",
                  opacity: "1",
                  transition: "top 0.1s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.1s cubic-bezier(0.165, 0.84, 0.44, 1)",
                  color: "#929292",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  fontSize: "0.6875rem",
                  padding: "2px 0",
                  cursor: "default"
                }}>confirm password: </label>
                {errors.checkpassword && <span style={{
                  marginLeft: ".5rem",
                  marginBottom: "3rem",
                  fontSize: "0.6875rem"
                }}
                  className="text-danger"> Passwords do not match! </span>}
                <input
                  name="password"
                  type="password"
                  style={{
                    WebkitWritingMode: "horizontal-tb !important",
                    boxShadow: "inset 0px 1px 2px 0px rgba(0, 0, 0, 0.21), inset 0px 0px 0px 1px rgba(0, 0, 0, 0.12)",
                    fontSize: "1.25rem",
                    marginBottom: "0",
                    width: "100%",
                    border: "none",
                    borderRadius: "0.25rem",
                    padding: ".375rem .5rem",
                    lineHeight: "1.5",
                    backgroundColor: "rgb(232, 240, 254) !important",
                    color: "internal-light-dark(black, white) !important",
                    textRendering: "auto",
                    letterSpacing: "normal",
                    wordSpacing: "normal",
                    textTransform: "none",
                    textIndent: "0px",
                    textShadow: "none",
                    display: "inline-block",
                    textAlign: "start",
                    cursor: "text",
                    WebkitFontSmoothing: "antialiased"
                  }}
                  ref={register({ required: true })}
                />
              </div>
              <div style={{
                marginTop: "1rem",
                marginLeft: "auto",
                marginRight: "auto",
                width: "50%"
              }}>
                <input className="button" type="submit" value="Register" style={{
                  width: "100%",
                  marginTop: "0",
                  marginBottom: "0",
                  backgroundColor: "#2c85c5",
                  color: "#ffffff",
                  borderColor: "#2c85c5",
                  borderRadius: "0.25rem",
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  cursor: "pointer",
                  border: "none",
                  textDecoration: "none !important",
                  borderStyle: "solid",
                  userSelect: "none",
                  padding: ".5rem .875rem",
                  lineHeight: "1.5rem",
                  display: "inline-block",
                  textAlign: "center",
                  borderWidth: "2px",
                }} />
              </div>
              <section style={{
                marginTop: "1rem",
                margin: "0",
                padding: "0",
                border: "0",
                fontSize: "100%",
                font: "inherit",
                verticalAlign: "baseline"
              }}>
                <div style={{
                  marginTop: "3rem",
                  marginBottom: "1rem",
                  position: "relative",
                  borderBottomStyle: "solid",
                  borderBottomWidth: "1px"
                }}>
                  <div style={{
                    paddingBottom: ".5rem"
                  }}>
                    <h2 style={{
                      fontSize: "1.125rem",
                      fontFamily: "-apple-system, Segoe UI Symbol, BlinkMacSystemFont, sans-serif",
                      fontWeight: "700",
                      lineHeight: "1.5",
                      display: "block",
                      marginBlockStart: "0.83em",
                      marginBlockEnd: "0.83em",
                      marginInlineStart: "0px",
                      marginInlineEnd: "0px"
                    }}>Have a account?</h2>
                  </div>
                </div>
              </section>
              <div style={{
                marginTop: "1rem",
                marginLeft: "auto",
                marginRight: "auto",
                width: "50%"
              }}>
                <Link to="/signin"><button style={{
                  width: "100%",
                  marginTop: "0",
                  borderColor: "#2c85c5",
                  color: "#2c85c5",
                  background: "none",
                  fontWeight: "700",
                  borderRadius: "0.25rem",
                  fontSize: "0.875rem !important",
                  textDecoration: "none !important",
                  padding: ".3125rem .625rem",
                  lineHeight: "1.25rem",
                  appearance: "none",
                  userSelect: "none",
                  cursor: "pointer",
                  display: "inline-block",
                  textAlign: "center"
                }}>Sign in</button></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

  )
};
