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
      style,
      ...props
    } = this.props;
    let classes = ClassNames({
      [className]: true,
      [skin]: true,
      disabled: this.props.disabled
    });
    style.width = this.props.width;
    return <input className={classes} style={style} {...props}/>;
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
  skin: React.PropTypes.oneOf(['success', 'error', 'default']),
  /**
   * style of the input
   */
  style: React.PropTypes.object,
  /**
   * width of the input
   */
  width: React.PropTypes.number
};
Input.defaultProps = {
  className: 'ra-input',
  skin: 'default',
  disabled: false,
  width: 280,
  style: {}
};
export default Input;
