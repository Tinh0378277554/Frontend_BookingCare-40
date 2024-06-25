import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { ModalBody, ModalFooter, ModalHeader, Modal } from "reactstrap";
import { emitter } from "../../utils/emitter"
import _ from 'lodash';

class ModalEditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''
        }
    }

    componentDidMount() {
        let user = this.props.currentUser

        if (user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,
                email: user.email,
                password: 'harcode',
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address,
            })
        }
        console.log('didmount edit modal', this.props.currentUser)
    }

    toggle = () => {
        this.props.toggleFromParent();
    };

    handleOnchangeInput = (event, id) => {
        //kiểu 2 là good code
        let copyState = { ...this.state }
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })
    }

    checkValideInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address'];
        for (let i = 0; i < arrInput.length; i++) {
            console.log('check inside loop', this.state[arrInput[i]], arrInput[i])
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter :' + arrInput[i]);
                break;
            }
        }
        return isValid;
    }

    handleSaveUser = () => {
        let isValid = this.checkValideInput();
        if (isValid === true) {
            // gọi API edit user modle
            this.props.editUser(this.state);
        }
    }

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => {
                    this.toggle();
                }}
                className={"modal-user-container"}
                size="lg"
                centered
            >
                <ModalHeader
                    toogle={() => {
                        this.toggle();
                    }}
                >
                    Edit a new User
                </ModalHeader>
                <ModalBody>
                    <div className="modal-user-body">
                        <div className="input-container">
                            <label>Email</label>
                            <input type="text"
                                className="form-control"
                                onChange={(event) => { this.handleOnchangeInput(event, "email") }}
                                value={this.state.email}
                                disabled
                            />
                        </div>
                        <div className="input-container">
                            <label>Password</label>
                            <input type="password"
                                onChange={(event) => { this.handleOnchangeInput(event, "password") }} className="form-control"
                                value={this.state.password}
                                disabled
                            />
                        </div>
                        <div className="input-container">
                            <label>First name</label>
                            <input type="text"
                                onChange={(event) => { this.handleOnchangeInput(event, "firstName") }} className="form-control"
                                value={this.state.firstName} />
                        </div>
                        <div className="input-container">
                            <label>Last name</label>
                            <input type="text"
                                onChange={(event) => { this.handleOnchangeInput(event, "lastName") }} className="form-control"
                                value={this.state.lastName} />
                        </div>
                        <div className="input-container max-wid">
                            <label>Address</label>
                            <input type="text"
                                onChange={(event) => { this.handleOnchangeInput(event, "address") }} className="form-control"
                                value={this.state.address} />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button
                        color="primary"
                        className="px-3"
                        onClick={() => {
                            this.handleSaveUser()
                        }}
                    >
                        Save changes
                    </button>
                    {""}
                    <button
                        color="secondary"
                        className="px-3"
                        onClick={() => {
                            this.toggle();
                        }}
                    >
                        Cancel
                    </button>
                </ModalFooter>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
