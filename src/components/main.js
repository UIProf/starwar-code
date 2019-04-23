import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPeople } from "../actions/PeopleActon";
import PeopleName from "../containers/PeoplesName";
import ModalPopup from "../containers/ModalPopup";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      selectedPeople: ""
    };

    this._nextAndPriviousButton = this._nextAndPriviousButton.bind(this);
    this._openModal = this._openModal.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchPeople());
  }

  _nextAndPriviousButton(URL) {
    this.props.dispatch(fetchPeople(URL));
  }

  _openModal() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const { error, peoples } = this.props;

    return (
      <div className="main">
        <PeopleName
          peoplesData={peoples["results"]}
          onSelectedPeople={selectedPeople =>
            this.setState(prevState => ({
              selectedPeople: selectedPeople,
              modal: !prevState.modal
            }))
          }
        />
        <div className="Buttons">
          <button
            disabled={peoples.previous != null ? "" : "disabled"}
            className="previousBtn"
            onClick={() => this._nextAndPriviousButton(peoples.previous)}
          >
            {"<< Previous"}
          </button>
          <button
            className="nextBtn"
            onClick={() => this._nextAndPriviousButton(peoples.next)}
          >
            {"Next >>"}
          </button>
        </div>
        <ModalPopup
          popupModal={modal => {
            this.setState(prevState => ({
              modal: !prevState.modal
            }));
          }}
          modal={this.state.modal}
          selectedPeople={this.state.selectedPeople}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    peoples: state.peoples.peoples,
    error: state.peoples.error
  };
};

export default connect(mapStateToProps)(Main);
