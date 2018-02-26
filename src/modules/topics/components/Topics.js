import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from '../../../helpers/ReduxHelper';

import {fetchTopics, deleteTopic} from '../actions/topics';

class Topics extends Component {
  static propTypes = {
    topics: PropTypes.array.isRequired,
    fetchTopics: PropTypes.func.isRequired,
    deleteTopic: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.fetchTopics();
  }

  render() {
    return (
      <div className="topics-wrapper">
        <h2>Topics</h2>
        Surprise, motherfucker!
        <div>
          {
            this.props.topics.length === 0 ?
              (<div>No topics for you!</div>) :
              this.props.topics.map(it => (
                /* Extract to component */
                <div key={it.id}>
                  <div>id: {it.id}</div>
                  <div>name: {it.name}</div>
                  <button onClick={() => this.props.deleteTopic(it.id)}>
                    Delete
                  </button>
                </div>
              ))
          }
        </div>
      </div>
    );
  }
}

export default connect(Topics,
  state => ({topics: state.topics.topics}),
  {fetchTopics, deleteTopic});