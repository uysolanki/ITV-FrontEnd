import PropTypes from 'prop-types';
import './Breadcrumbs.css';
import arrow_icon from '../assets/myimages/Arrow.png';

export const Breadcrumbs = ({ product }) => {
    return (
        <div className='breadcrum'>
            HOME <img src={arrow_icon} alt="arrow" /> SHOP <img src={arrow_icon} alt="arrow" /> {product.category} <img src={arrow_icon} alt="arrow" /> {product.title}
        </div>
    );
};

// Prop type validation
Breadcrumbs.propTypes = {
    product: PropTypes.shape({
        category: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
};

export default Breadcrumbs;
