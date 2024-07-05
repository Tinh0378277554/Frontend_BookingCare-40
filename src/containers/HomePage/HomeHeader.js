import React, { Component } from "react";
import { connect } from "react-redux";
import './HomeHeader.scss';
import logo from "../../assets/images/logo.png";
import { FormattedMessage } from 'react-intl';
import { lANGUEGES } from "../../utils"

import { changeLanguageApp } from "../../store/actions"

class HomeHeader extends Component {

    changeLanguege = (languege) => {
        this.props.changeLanguageAppRedux(languege);
    }

    render() {
        let languege = this.props.languege;
        return (
            <React.Fragment>
                <div className="home-header-container">
                    <div className="home-header-content">
                        <div className="left-content">
                            <i className="fas fa-bars"></i>
                            <img className="header-logo" src={logo} />
                        </div>
                        <div className="center-content">
                            <div className="child-content">
                                <div><b> <FormattedMessage id="homeheader.speciality" /></b></div>
                                <div className="subs-title">  <FormattedMessage id="homeheader.search-doctor" /> </div>
                            </div>
                            <div className="child-content">
                                <div><b> <FormattedMessage id="homeheader.health-facilities" /> </b></div>
                                <div className="subs-title"> <FormattedMessage id="homeheader.select-room" /> </div>
                            </div>
                            <div className="child-content">
                                <div><b><FormattedMessage id="homeheader.doctor" /></b></div>
                                <div className="subs-title"> <FormattedMessage id="homeheader.select-doctor" /> </div>
                            </div>
                            <div className="child-content">
                                <div><b><FormattedMessage id="homeheader.fee" /></b></div>
                                <div className="subs-title"><FormattedMessage id="homeheader.check-heelth" /></div>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="support"><i className="fas fa-question"></i><FormattedMessage id="homeheader.support" /></div>

                            <div className={languege === lANGUEGES.VI ? 'languege-vi active' : 'languege-vi'} ><span onClick={() => this.changeLanguege(lANGUEGES.VI)}>VN</span></div>

                            <div className={languege === lANGUEGES.EN ? "languege-en active" : 'languege-en'}><span onClick={() => this.changeLanguege(lANGUEGES.EN)}>EN</span></div>
                        </div>
                    </div>
                </div>

                <div className="home-header-banner">
                    <div className="content-up">
                        <div className="title1"><FormattedMessage id="banner.title1" /></div>
                        <div className="title2"><FormattedMessage id="banner.title2" /></div>
                        <div className="search">
                            <i className="fas fa-search"></i>
                            <input type="text" placeholder="Tìm chuyên khoa khám bệnh" />
                        </div>
                    </div>

                    <div className="content-down">
                        <div className="options">
                            <div className="option-child">
                                <div className="icon-child"><i className="far fa-hospital"></i></div>
                                <div className="text-child"><FormattedMessage id="banner.child1" /></div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child"><i className="fas fa-mobile-alt"></i></div>
                                <div className="text-child"><FormattedMessage id="banner.child2" /></div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child"><i className="fas fa-procedures"></i></div>
                                <div className="text-child"><FormattedMessage id="banner.child3" /></div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child"><i className="fas fa-flask"></i></div>
                                <div className="text-child"><FormattedMessage id="banner.child4" /></div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child"><i className="fas fa-user-md"></i></div>
                                <div className="text-child"><FormattedMessage id="banner.child5" /></div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child"><i className="fas fa-briefcase-medical"></i></div>
                                <div className="text-child"><FormattedMessage id="banner.child6" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        languege: state.app.languege,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeLanguageAppRedux: (languege) => dispatch(changeLanguageApp(languege))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
