import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';

class HomeFooter extends Component {

    render() {

        return (
            <div className="home-footer">
                <p>&copy; 2024 Website tạo ra nhằm mục đích học tập của cá nhân Bùi Thuận Tình <a target="_blank" href="https://github.com/Tinh0378277554/Frontend_BookingCare-40"> &#8594; github link here  &#8592;</a></p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
