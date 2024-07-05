import { useState, useEffect } from 'react';
import allItems from '../data/allItems'
import { Product } from './../schema/products';
import DrawerCatagories from './DrawerCatagories';
import DrawerBrands from './DrawerBrands';
import Modal from './Modal';
import useToggle from '../hooks/toggle';


function CorrectCarousel() {
    //useState
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [filteredItems, setFilteredItems] = useState<Product[]>(allItems);
    const [inputValue, setInputValue] = useState<string>('');
    //For Modal Component
    const [modalItem, setModalItem] = useState<Product | null>(null);
    //Hook
    const { toggleOnAndOff, toggle } = useToggle(false);
  
    const getFilteredItems = (filterInput: string): Product[] => {
      const lowercaseInput = filterInput.toLowerCase();
      return allItems.filter((item) =>
        item.brand.toLowerCase().includes(lowercaseInput) ||
        item.name.toLowerCase().includes(lowercaseInput) ||
        item.productCategory.toLowerCase().includes(lowercaseInput) ||
        item.productSubCategory.toLowerCase().includes(lowercaseInput)
      );
    };
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const filteredItems = getFilteredItems(inputValue);
      setFilteredItems(filteredItems);
      setInputValue('');
      setCurrentIndex(0);
    };
  
    const handleSelectCategoryOrBrand = (category: string) => {
      const filteredItems = category === 'All' ? allItems : getFilteredItems(category);
      setFilteredItems(filteredItems);
      setCurrentIndex(0);
    };
  
    const toggleModal = (item: Product) => {
      setModalItem(item);
      toggle();
    };
  
    const nextItem = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredItems.length);
    };
  
    const backItem = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredItems.length) % filteredItems.length);
    };

  return (
    <div className="correct_carousel_container">
      <div className='drawer_container'>
        <DrawerCatagories onSelectCategory={handleSelectCategoryOrBrand} />
        <DrawerBrands onSelectBrand={handleSelectCategoryOrBrand} />
      </div>

      <form onSubmit={handleSubmit} className="form_container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
        <button type='submit'>Search</button>
      </form>

       {filteredItems.length > 0 && (
        <div className="correct_carousel">
          <div
            className="correct_item_container"
            key={filteredItems[currentIndex].id}
            onClick={() => toggleModal(filteredItems[currentIndex])}
          >
            <img
              className="correct_carousel_Images"
              src={filteredItems[currentIndex].images[0]}
              alt={filteredItems[currentIndex].name}
            />
            <div className="correct_carousel_item_description">
              <h4>{filteredItems[currentIndex].name}</h4>
              <h4>${filteredItems[currentIndex].price.toFixed(2)}</h4>
            </div>
          </div>
        </div>
      )}

      <div className='correct_carousel_btn'>
        <button type="button" className='backBtn' onClick={backItem}>Back</button>
        <button type="button" className='nextBtn' onClick={nextItem}>Next</button>
      </div>

      {toggleOnAndOff && modalItem && (
        <Modal item={modalItem} toggleOnAndOff={toggleOnAndOff} toggle={toggle} />
      )}
    </div>
  );
}

export default CorrectCarousel;