import React from 'react';

const Registration = ({isSelectedRegister}) => {
    return (
        <div id="register" role="tabpanel" className={`single__tabs__panel tab-pane fade ${isSelectedRegister ? "in active" : ""}`}>
            <form className="login" method="post">
                <input type="text" placeholder="Name*" />
                <input type="email" placeholder="Email*" />
                <input type="password" placeholder="Password*" />
            </form>
            <div className="tabs__checkbox">
                <input type="checkbox" />
                <span> Remember me</span>
            </div>
            <div className="htc__login__btn">
                <a href="#">register</a>
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

export default Registration;