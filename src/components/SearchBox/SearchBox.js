import SearchImage from '../../assets/Icons/Icon-search.svg'

const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className='search-box'
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
        img={SearchImage}
    />
);

export default SearchBox;