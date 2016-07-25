import React from 'react';
import ReactBEM from './ReactBEM';
import FormField from './FormField';
import clone from './utils/clone';


export default class Form extends ReactBEM {
  constructor(...args) {
    super(...args);
    this.importConfig = this.importConfig.bind(this);
    this.exportConfig = this.exportConfig.bind(this);
    this.importConfig();
  }

  /**
   * Gets a config object from this.props and processes it.
   * @private
   * @method importConfig
   * @return {void}
   */
  importConfig() {
    const conf = clone(this.props.config);

    // Add random key to all questions:
    for (const q of conf.questions) {
      q.key = String(Date.now() + Math.random());
    }

    this.state = conf;
  }

  exportConfig() {

  }

  render() {
    const appControl = {};
    return (
      <div className={this.bemClass} >
        <div className={this.bemSubComponent('questions')} >
          {this.state.questions.map(q => {
            return <FormField config={q} appControl={appControl} key={q.key} />;
          })}
        </div>
      </div>
    );
  }
}

Form.PropTypes = {
  config: React.PropTypes.object.isRequired,
};
