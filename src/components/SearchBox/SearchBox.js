import SearchImage from '../../assets/Icons/Icon-search.svg'

const SearchBox = ({ placeholder }) => (
    <input
        className='search-box'
        type='search'
        placeholder={placeholder}
        img={SearchImage}
    />
);

export default SearchBox;