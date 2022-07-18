import { Product } from "../interfaces/products";

const PRODUCTS: Product[] = [
    {
      favorite: false,
      id: 'product_1',
      image: 'https://dl.airtable.com/.attachmentThumbnails/89ba7458c24252be77f5a835dd398880/c13ef359?ts=1657922923&userId=usrQMwWEPx18KgLcP&cs=6a9c208593a9a5c8',
      name: 'modern poster',
      price: 30.59,
    },
  
    {
      favorite: false,
      id: 'product_2',
      image: 'https://dl.airtable.com/.attachmentThumbnails/a6119fabf7256049cc0e8dbcdf536c9c/b0153f66?ts=1657922923&userId=usrQMwWEPx18KgLcP&cs=c8215b0244332d49',
      name: 'bar stool',
      price: 40.99,
    },
  
    {
      favorite: false,
      id: 'product_3',
      image: 'https://dl.airtable.com/.attachmentThumbnails/530c07c5ade5acd9934c8dd334458b86/cf91397f?ts=1657922923&userId=usrQMwWEPx18KgLcP&cs=078851bc4f921c13',
      name: 'armchair',
      price: 125.99,
    },
  
    {
      favorite: true,
      id: 'product_4',
      image: 'https://dl.airtable.com/.attachmentThumbnails/1cf03bfcee117bd92273d996a82a1534/47ef57c7?ts=1657922923&userId=usrQMwWEPx18KgLcP&cs=b345f71a9f527bc4',
      name: 'suede armchair',
      price: 159.99,
    },
  
    {
      favorite: false,
      id: 'product_5',
      image: 'https://dl.airtable.com/.attachmentThumbnails/d3174ad774fc628e1d50b77e3bec399f/1de7b97a?ts=1657922923&userId=usrQMwWEPx18KgLcP&cs=6fe55545f03949c7',
      name: 'leather chair',
      price: 200.99,
    },
  
    {
      favorite: false,
      id: 'product_5',
      image: 'https://dl.airtable.com/.attachmentThumbnails/0446e84c5bca9643de3452a61b2d6195/1b32f48b?ts=1657922923&userId=usrQMwWEPx18KgLcP&cs=db529fcbd33b4788',
      name: 'Knife Sharpener TOPemperor bed',
      price: 239.99,
    },
  ];
  

  export const getProducts = (): Promise<Product[]> => {
    return new Promise<Product[]>((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.1) {
          reject(new Error('Something went wrong'));
        } else {
          resolve(PRODUCTS);
        }
      }, 2000);
    });
  };
  