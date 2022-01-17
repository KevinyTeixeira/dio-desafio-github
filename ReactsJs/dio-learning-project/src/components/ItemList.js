const ItemList = ({ link, children }) => (
    <a href={link} className='list-group-item list-group-item-action list-group-item-light'>
        {children}
    </a>
)

export default ItemList;
