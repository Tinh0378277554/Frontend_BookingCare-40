import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { ModalBody, ModalFooter, ModalHeader, Modal } from "reactstrap";
import { emitter } from "../../utils/emitter"

class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      address: ''
    }

    this.listenToEmitter();
  }

  listenToEmitter() {
    emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
      //reset state
      this.setState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        address: ''
      })
    })
  }

  componentDidMount() {
  }

  toggle = () => {
    this.props.toggleFromParent();
  };

  handleOnchangeInput = (event, id) => {
    //kiểu 1 là bad code
    // this.state[id] = event.target.value;

    // this.setState({
    //   ...this.state
    // }, () => {

    //   console.log(this.state)
    // })

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

  handleAddNewUser = () => {
    let isValid = this.checkValideInput();
    if (isValid === true) {
      // gọi API create modle
      this.props.createNewUser(this.state, 'abc');
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
          Create User
        </ModalHeader>
        <ModalBody>
          <div className="modal-user-body">
            <div className="input-container">
              <label>Email</label>
              <input type="text"
                className="form-control"
                onChange={(event) => { this.handleOnchangeInput(event, "email") }}
                value={this.state.email} />
            </div>
            <div className="input-container">
              <label>Password</label>
              <input type="password"
                onChange={(event) => { this.handleOnchangeInput(event, "password") }} className="form-control"
                value={this.state.password} />
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
              this.handleAddNewUser()
            }}
          >
            Add new
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
