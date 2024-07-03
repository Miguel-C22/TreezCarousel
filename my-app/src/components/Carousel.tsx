import { useState, useEffect } from 'react';
import items from '../data/items'
import { Product } from './../schema/products';
import Paging from './Paging';
import DrawerCatagories from './DrawerCatagories';
import DrawerBrands from './DrawerBrands';


function Carousel() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);
  const [displayedItems, setDisplayedItems] = useState<Product[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [filteredItems, setFilteredItems] = useState<Product[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [categorySelect, setCategorySelect] = useState<string>('')

  useEffect(() => {
    const totalItems = inputValue || categorySelect ? filteredItems.length : items.length;
    setTotalPages(Math.ceil(totalItems / itemsPerPage));

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const itemsToDisplay = inputValue || categorySelect ? filteredItems.slice(startIndex, endIndex) : items.slice(startIndex, endIndex);
    setDisplayedItems(itemsToDisplay);
  }, [currentPage, itemsPerPage, filteredItems]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page - 1);
  };

  //User input Selection
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const lowercaseInput = inputValue.toLowerCase();

    const filteredItems = items.filter((item) => {
      return (
        item.brand.toLowerCase().includes(lowercaseInput) ||
        item.name.toLowerCase().includes(lowercaseInput) ||
        item.productCategory.toLowerCase().includes(lowercaseInput) ||
        item.productSubCategory.toLowerCase().includes(lowercaseInput)
      );
    })

    setFilteredItems(filteredItems);
    setCurrentPage(0);
  };

  //Category Selection
  const handleSelectCategoryOrBrand = (category: string) => {
    console.log("Selected category:", category);
  
    const lowercaseInput = category.toLowerCase();

    if(category === 'All'){
      setFilteredItems(items)
    }else{
        const filteredItems = items.filter((item) => {
        return (
          item.brand.toLowerCase().includes(lowercaseInput) ||
          item.name.toLowerCase().includes(lowercaseInput) ||
          item.productCategory.toLowerCase().includes(lowercaseInput) ||
          item.productSubCategory.toLowerCase().includes(lowercaseInput)
        );
      });
      console.log("Filtered items:", filteredItems);
  
      setCategorySelect(category)
      setFilteredItems(filteredItems);
    }
  

    setCurrentPage(0); // Reset page to 0 when filtering
  };


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
              <div key={item.id}>
                  <h2 key={item.name}>{item.name}</h2>
                  <img key={item.images[0]} src={item.images[0]} alt={item.name} />
                  <p>Description: {item.description}</p>
              </div>
          ))}
          <Paging totalPages={totalPages} onPageChange={handlePageChange} />
          <DrawerCatagories onSelectCategory={handleSelectCategoryOrBrand} />
          <DrawerBrands onSelectBrand={handleSelectCategoryOrBrand} />
      </div>
  );
}

export default Carousel;