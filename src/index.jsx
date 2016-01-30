import './index.less';
import React from 'react';
import ClassNames from 'classnames';

class Input extends React.Component {
  constructor() {
    super();
  }
  render() {
    let {
      className,
      skin,
      ...props
    } = this.props;
    let classes = ClassNames({
      [className]: true,
      [skin]: true,
      disabled: this.props.disabled
    });
    return <input className={classes} {...props}/>;
  }
}
Input.displayName = 'Input';
Input.propTypes = {
  /**
   * className of the input
   */
  className: React.PropTypes.string,
  /**
   * whether the input is disabled
   */
  disabled: React.PropTypes.bool,
  /**
   * skin of the input
   */
  skin: React.PropTypes.oneOf(['success', 'error', 'default'])
};
Input.defaultProps = {
  className: 'ra-input',
  skin: 'default',
  disabled: false
};
export default Input;
