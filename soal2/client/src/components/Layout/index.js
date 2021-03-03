import PropTypes from 'prop-types';
import './style.scss';

const Layout = ({children}, props) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
};

Layout.propTypes = {
  full: PropTypes.string,
  bg: PropTypes.string
};

Layout.defaultProps = {};

export default Layout;