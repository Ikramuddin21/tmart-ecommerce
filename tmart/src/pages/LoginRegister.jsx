import React, { useState } from 'react';
import Login from '../components/Authentication/Login';
import Registration from '../components/Authentication/Registration';
import Header from '../components/partials/Header';
import backgroundImage from '../images/bg/5.jpg';

const LoginRegister = () => {

    const [isSelectedLogin, setSelectedLogin] = useState(true);
    const [isSelectedRegister, setSelectedRegister] = useState(false);

    const handleLogin = () => {
        setSelectedLogin(true);
        setSelectedRegister(false);
    };

    const handleRegistration = () => {
        setSelectedRegister(true);
        setSelectedLogin(false);
    };

    return (
        <>
            <Header />

            <div className="htc__login__register bg__white ptb--130" style={{ background: `rgba(0, 0, 0, 0) url(${backgroundImage}) no-repeat scroll center center / cover` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <ul className="login__register__menu" role="tablist">
                                <li role="presentation" className={`login ${isSelectedLogin ? "active" : ""}`}>
                                    <a href="#login" role="tab" data-toggle="tab"
                                        onClick={handleLogin}
                                    >Login</a>
                                </li>
                                <li role="presentation" className={`register ${isSelectedRegister ? "active" : ""}`}>
                                    <a href="#register" role="tab" data-toggle="tab"
                                        onClick={handleRegistration}
                                    >Register</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- Start Login Register Content --> */}
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <div className="htc__login__register__wrap">
                                {/* <!-- Start Single Content --> */}
                                {isSelectedLogin && <Login isSelectedLogin={isSelectedLogin} />}
                                {/* <!-- End Single Content --> */}
                                {/* <!-- Start Single Content --> */}
                                {isSelectedRegister && <Registration isSelectedRegister={isSelectedRegister} />}
                                {/* <!-- End Single Content --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Login Register Content --> */}
                </div>
            </div>
        </>
    );
};

export default LoginRegister;