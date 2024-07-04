import { useState, useEffect } from 'react';
import allItems from '../data/allItems'
import { Product } from './../schema/products';
import Paging from './Paging';
import DrawerCatagories from './DrawerCatagories';
import DrawerBrands from './DrawerBrands';
import Modal from './Modal';
import useToggle from '../hooks/toggle';


function CorrectCarousel() {
  //Carousel
  const [displayedItems, setDisplayedItems] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  //Filter Items for input and Drawer
  const [filteredItems, setFilteredItems] = useState<Product[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [categorySelect, setCategorySelect] = useState<string>('')

  //Modal
  const [modalItem, setModalItem] = useState<object>({})
  const { toggleOnAndOff, toggle} = useToggle(false);

  useEffect(() => {
    carouselSetup()
  }, [filteredItems, currentIndex]);

 const carouselSetup = () => {
    const itemsToDisplay = filteredItems.length > 0 ? filteredItems : allItems;

    // Adjust index to stay within bounds of items
    let newIndex = Math.max(0, Math.min(currentIndex, itemsToDisplay.length - 1));
    setCurrentIndex(newIndex);
  
    // Set items to display based on filtered items or all items
    const displayed = itemsToDisplay.slice(newIndex, newIndex + 1);
    setDisplayedItems(displayed);
 }


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
    setInputValue("")
    setCurrentIndex(0);
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
    setCurrentIndex(0);
  };

  //Think about putting this in a custom hook
  const toggleModal = (item: object) => {
    setModalItem(item)
    toggle()
  }

  const nextItem = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCurrentIndex(currentIndex + 1)
  };
  
  const backItem = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  
    setCurrentIndex(currentIndex - 1)
  };


  return (
    <div className="correct_carousel_container">
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
        <button type='submit'>Search</button>
    </form>

    <div className='correct_carousel'>
        {displayedItems.map((item) => (
        <div className='correct_item_container' key={item.id} onClick={() => {toggleModal(item)}}>
            <img className='correct_carousel_Images' key={item.images[0]} src={item.images[0]} alt={item.name} />
            <div className='correct_carousel_item_description'>
            <h4>{item.name}</h4>
            <h4>${item.price.toFixed(2)}</h4>
            </div>
        </div>
        ))}
    </div>
    <div className='correct_carousel_btn'>
            <button type="button" className='backBtn' onClick={backItem}>Back</button>
            <button type="button" className='nextBtn' onClick={nextItem}>Next</button>
        </div>
    
    {!toggleOnAndOff ? <></> : <Modal item={modalItem} toggleOnAndOff={toggleOnAndOff} toggle={toggle}/> }
    </div>
  );
}

export default CorrectCarousel;