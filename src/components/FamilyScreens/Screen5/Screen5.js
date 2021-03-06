import React from "react";
import Header from "../../Header/Header";
import routes from "../../../routes";
import { Link } from "react-router-dom";
import TextField from "material-ui/TextField";
import DatePicker from "material-ui/DatePicker";
import {
  getMember,
  updateDate,
  updateNotes,
  submitCaseNotes,
  getCaseNotes
} from "../../../ducks/memberreducer";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Screen5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getMember(this.props.match.params.id);
  }

  render() {
    return (
      <div className="screen5">
        <div>
          <Header />
        </div>
        SCREEN 5 DATE:
        <DatePicker
          hintText="DATE"
          container="inline"
          mode="landscape"
          onChange={(e, date) => this.props.updateDate(date)}
        />
        ENTER CASE NOTES
        <TextField
          value={this.props.memberreducer.notes}
          hintText="CASE NOTE"
          fullWidth={true}
          onChange={e => this.props.updateNotes(e.target.value)}
        />
        <Link to={`/Family/${this.props.match.params.id}`}>
          <button
            onClick={e =>
              this.props.submitCaseNotes(
                this.props.memberreducer.date,
                this.props.memberreducer.notes,
                this.props.match.params.id
              )
            }
          >
            DONE
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(
  connect(mapStateToProps, {
    updateDate,
    updateNotes,
    submitCaseNotes,
    getCaseNotes,
    getMember
  })(Screen5)
);
