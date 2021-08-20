


const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className='search-box'
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
    />
);

export default SearchBox;