import PropTypes from 'prop-types';

const Error = ({ error }) => {
    <div className='error'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
        </svg>

        <div>
            <span className='font-medium'>{error}</span>
        </div>
    </div>
}

Error.propTypes = {
    error: PropTypes.string
};

export default Error;