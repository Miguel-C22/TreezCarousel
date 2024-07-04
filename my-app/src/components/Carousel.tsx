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
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const filteredItems = getFilteredItems(inputValue)

    setFilteredItems(filteredItems);
    setCurrentPage(0);
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
        <form action="" onSubmit={handleSubmit}>
          <input
          type="text" 
          onChange={(e) => setInputValue(e.target.value)}
          />
          <button type='submit' >search</button>
        </form>
          {displayedItems.map((item) => (
              <div key={item.id} onClick={() => {toggleModal(item)}}>
                  <h2 key={item.name}>{item.name}</h2>
                  <img key={item.images[0]} src={item.images[0]} alt={item.name} />
              </div>
          ))}
          <Paging totalPages={totalPages} onPageChange={handlePageChange} />
          <DrawerCatagories onSelectCategory={handleSelectCategoryOrBrand} />
          <DrawerBrands onSelectBrand={handleSelectCategoryOrBrand} />
          {!toggleOnAndOff ? <></> : <Modal item={modalItem}/> }
          
      </div>
  );
}

export default Carousel;