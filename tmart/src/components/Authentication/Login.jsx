import React from 'react';

const Login = ({isSelectedLogin}) => {
    return (
        <div id="login" role="tabpanel" className={`single__tabs__panel tab-pane fade ${isSelectedLogin ? "in active" : ""}`}>
            <form className="login" method="post">
                <input type="text" placeholder="User Name*" />
                <input type="password" placeholder="Password*" />
            </form>
            <div className="tabs__checkbox">
                <input type="checkbox" />
                <span> Remember me</span>
                <span className="forget"><a href="#">Forget Pasword?</a></span>
            </div>
            <div className="htc__login__btn mt--30">
                <a href="#">Login</a>
            </div>
            <div className="htc__social__connect">
                <h2>Or Login With</h2>
                <ul className="htc__soaial__list">
                    <li><a className="bg--twitter" href="#"><i className="zmdi zmdi-twitter"></i></a></li>

                    <li><a className="bg--instagram" href="#"><i className="zmdi zmdi-instagram"></i></a></li>

                    <li><a className="bg--facebook" href="#"><i className="zmdi zmdi-facebook"></i></a></li>

                    <li><a className="bg--googleplus" href="#"><i className="zmdi zmdi-google-plus"></i></a></li>
                </ul>
            </div>
        </div>
    );
};

export default Login;