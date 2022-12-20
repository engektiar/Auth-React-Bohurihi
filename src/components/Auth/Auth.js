import React, { Component } from "react";
import { Formik } from "formik";
export default class Auth extends Component {
  state = {
    mode: "Sing up",
  };
  swithmodeHandel = () => {
    this.setState({ mode: this.state.mode === "Sing up" ? "Login" : "Sing up" });
  };
  render() {
    return (
      <div className="loginfromMain mt-5">
        <Formik
          initialValues={{ email: "", password: "", conpassword: "" }}
          onSubmit={(values) => {
            if (!values.conpassword) {
              delete values.conpassword;
            }
            console.log("valise", values);
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Enter your email";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "Enter your password";
            } else if (values.password.length < 4) {
              errors.password = "must be at list 4 chatetes";
            }

            if (this.state.mode === "Sing up") {
              if (!values.conpassword) {
                errors.conpassword = "Required";
              } else if (values.password !== values.conpassword) {
                errors.conpassword = "password feld does nont match";
              }
            }

            // console.log("errors", errors);
            return errors;
          }}
        >
          {({ values, handleChange, handleSubmit, errors }) => (
            <div className="loginfrom">
              <button className="btn btn-success btn-lg" onClick={this.swithmodeHandel}>
                Swith To {this.state.mode === "Sing up" ? "Login" : "Sing up"}
              </button>
              <form onSubmit={handleSubmit} className="mt-4">
                <input name="email" placeholder="Enter your email" className="from-control p-1" value={values.email} onChange={handleChange} />
                <br />
                <span className="erros"> {errors.email}</span>
                <br />
                <input name="password" type="password" placeholder="password" className="from-control p-1" value={values.password} onChange={handleChange} />
                <br />
                <span className="erros">{errors.password} </span>
                <br />
                {this.state.mode === "Sing up" ? (
                  <div>
                    <input name="conpassword" type="password" placeholder="comform password" className="from-control p-1" value={values.conpassword} onChange={handleChange} />
                    <br />
                    <span className="erros">{errors.conpassword} </span>
                    <br />
                  </div>
                ) : null}

                <button type="submit" className="btn btn-success">
                  {this.state.mode === "Sing up" ? "Sing up" : "Login"}
                </button>
              </form>
            </div>
          )}
        </Formik>
      </div>
    );
  }
}
