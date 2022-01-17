import ItemList from './components/ItemList';
import ItemCard from './components/ItemCard';

const App = () => (
    <>
        <h1>My first app using React</h1>
        <ul>
            <ItemList link="/">
                Item 1
            </ItemList>
        </ul>
        <ItemCard/>
    </>
)

export default App;
