export interface BaseModel {
    id: string; // A unique identifier for the object
  }
  
  export enum ProductStatus {
    Active = "active", // The product is available for purchase and in stock
    Discontinued = "discontinued", // The product is no longer being produced or sold
    Discount = "discount", // The product is being sold at a reduced price
    Regular = "regular", // The product is being sold at its standard price
    LowStock = "low_stock", // The product is in stock but the quantity is low
    OutOfStock = "out_of_stock", // The product is currently not in stock
    PreOrder = "pre_order", // The product can be pre-ordered before it is available
    NewArrival = "new_arrival" // The product is newly added to the inventory
  }
  
export type UUID = string; // Assuming UUID is a string type

export interface Product extends BaseModel {
    name: string;
    status: ProductStatus;
    productCategory: string;
    productSubCategory: string;
    description?: string;
    brandId: UUID;
    brand: string;
    productLineId?: UUID;
    productLine?: string;
    strain?: string;
    images: string[]; // the strings should be urls for the image to render or something similar. For local development, it can reference a file. 
}