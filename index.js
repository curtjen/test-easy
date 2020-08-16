// import React from 'react';
// import { render } from '@testing-library/react';
const React = require('react');
const { render } = require('@testing-library/react');

/**
 * @class
 */
class TestEasy {
  // /**
  //  * @type {Object} - React component object.
  //  */
  // Component;

  // /**
  //  * @type {Object} - Component props.
  //  */
  // props;

  /**
   * @constructor
   * @param {Object} component - React component object.
   */
  constructor(component) {
    this.Component = component;
    this.snapshot();
  }

  /**
   * Modify the props for component.
   * @param {Object} props - Component props.
   */
  alterProps(props) {
    this.props = {
      ...this.props,
      ...props,
    };
  };

  /**
   * Generate/compare snapshot
   */
  async snapshot() {
    const { container } = await this.renderComponent();
    expect(container).toMatchSnapshot()
  }

  /**
   * Render the Component
   * @returns {Object} - React Testing Library render object.
   */
  async renderComponent() {
    const Component = React.createElement(this.Component, this.props);
    const renderObj = await render(Component);
    return renderObj;
  }
}

exports.TestEasy = TestEasy;