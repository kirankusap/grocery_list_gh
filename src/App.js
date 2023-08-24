import Header from './Header';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react';


function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // use effect. putting 'items' in the array makes it render only when
  // there are changes in items.

  // below effect only runs at load time

  // LOAD DATA DURING INITIAL APPLICATION LOAD //

  useEffect(() => {

    // function to load items from API. 
    const fetchItems = () => {
      try {
        const listItems = JSON.parse(localStorage.getItem("myList"));
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    // call the above function.
    fetchItems();
  }, []);


  // HANDLE ADD NEW LIST ITEMS.  //

  const addItem = async (item) => {
    const id = items?.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    let listItems = [];
    if (items?.length) {
      listItems = [...items, myNewItem];
    } else {
      listItems = [myNewItem];
    }

    setItems(listItems);

    // update local storage.
    localStorage.setItem("myList", JSON.stringify(listItems));
  }

  // HANDLE CHECK LIST ITEMS  //

  const handleCheck = async (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);

    // update local storage.
    localStorage.setItem("myList", JSON.stringify(listItems));
  }


  // HANDLE DELETE  //

  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);

    // update local storage.
    localStorage.setItem("myList", JSON.stringify(listItems));
  }


  // HANDLE SUBMIT  //

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    // set new item to empty after we add item to list
    setNewItem('');
  }

  return (
    <div className="App">
      <Header
        heading='Groceries List' />

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />

      <SearchItem
        search={search}
        setSearch={setSearch}
      />

      <main>
        {isLoading && <p>Data Loading...</p>}
        {fetchError && <p style={{ color: "red" }}>{`Error:${fetchError}`}</p>}
        {/* if no fetch error and data is loaded, display <Content> page */}
        {!fetchError && !isLoading &&
          <Content
            items={items?.filter((item) => (item.item.toLowerCase()).includes(search.toLowerCase()))}
            handleCheck={handleCheck}
            handleDelete={handleDelete} />}
      </main>

      <Footer
        length={items?.length} />
    </div>
  );
}

export default App;
