import { useState, useEffect } from 'react';
import allItems from '../data/allItems'
import { Product } from './../schema/products';
import Paging from './Paging';
import DrawerCatagories from './DrawerCatagories';
import DrawerBrands from './DrawerBrands';
import Modal from './Modal';
import useToggle from '../hooks/toggle';


function Carousel() {
  //Carousel
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);
  const [displayedItems, setDisplayedItems] = useState<Product[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);

  //Filter Items for input and Drawer
  const [filteredItems, setFilteredItems] = useState<Product[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [categorySelect, setCategorySelect] = useState<string>('')

  //Modal
  const [modalItem, setModalItem] = useState<object>({})
  const { toggleOnAndOff, toggle} = useToggle(false);

  useEffect(() => {
    carouselSetup()
  }, [currentPage, itemsPerPage, filteredItems]);

 const carouselSetup = () => {
  
  const itemsFiltered = (inputValue || categorySelect)

  const totalItems = itemsFiltered ? filteredItems.length : allItems.length;
  setTotalPages(Math.ceil(totalItems / itemsPerPage));

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const itemsToDisplay = itemsFiltered ? filteredItems.slice(startIndex, endIndex) : allItems.slice(startIndex, endIndex);

  setDisplayedItems(itemsToDisplay);
 }

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page - 1);
  };


  const getFilteredItems = (filterInput: string) => {
    const lowercaseInput = filterInput.toLowerCase();
        return allItems.filter((item) => {
          return (
            item.brand.toLowerCase().includes(lowercaseInput) ||
            item.name.toLowerCase().includes(lowercaseInput) ||
            item.productCategory.toLowerCase().includes(lowercaseInput) ||
            item.productSubCategory.toLowerCase().includes(lowercaseInput)
          );
        })
  }

  //User input Selection
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const filteredItems = getFilteredItems(inputValue)

    await setFilteredItems(filteredItems);
    await setCurrentPage(0);
    setInputValue("")
    console.log(inputValue)
  };

  //Category Selection
  const handleSelectCategoryOrBrand = (category: string) => {

    if(category === 'All'){
      setFilteredItems(allItems)
    }else{
      const filteredItems = getFilteredItems(category)

      setCategorySelect(category)
      setFilteredItems(filteredItems);
    }
    setCurrentPage(0);
  };

  //Think about putting this in a custom hook
  const toggleModal = (item: object) => {
    setModalItem(item)
    toggle()
  }


  return (
      <div className="carousel_container">
        <div className='drawer_container'>
          <DrawerCatagories onSelectCategory={handleSelectCategoryOrBrand} />
          <DrawerBrands onSelectBrand={handleSelectCategoryOrBrand} />
        </div>

        <form action="" onSubmit={handleSubmit} className="form_container">
          <input
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
          />
          <button type='submit' >Search</button>
        </form>

        <div className='carousel'>
          {displayedItems.map((item) => (
                <div className='item_container' key={item.id} onClick={() => {toggleModal(item)}}>
                    <img className='carousel_Images' key={item.images[0]} src={item.images[0]} alt={item.name} />
                    <div className='carousel_item_description'>
                      <h4>{item.name}</h4>
                      <h4>${item.price.toFixed(2)}</h4>
                    </div>
                </div>
            ))}
        </div>

        <Paging totalPages={totalPages} onPageChange={handlePageChange} />

        {!toggleOnAndOff ? <></> : <Modal item={modalItem} toggleOnAndOff={toggleOnAndOff} toggle={toggle}/> }
          
      </div>
  );
}

export default Carousel;