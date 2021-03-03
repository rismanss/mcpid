import PropTypes from 'prop-types';
import './style.scss';

const Layout = (props) => {
  const className = ['layout', `layout-${props.size}`].join(' ');
  return (
    <div className={className} {...props}>
      {props.children}
    </div>
  );
};

Layout.propTypes = {
  size: PropTypes.oneOf(['full', 'middle']),
};

Layout.defaultProps = {
  size: 'middle'
};

export default Layout;