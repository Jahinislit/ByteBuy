type AppScreensParamsList = {
  Welcome: undefined;
  Login: undefined;
  HomeScreen: undefined;
  CategoriesScreen: undefined;
  FavoritesScreen: undefined;
  MoreScreen: undefined;
  ProductDetails: {product: ProductType};
  Cart: undefined;
  BottomNavBar: undefined;
};

type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  priceFormatted: string;
  originalPriceUSD?: number;
  discountPercentage?: number;
  rating?: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  isFavorite: boolean;
};

type ProductsList = ProductType[];

export type {AppScreensParamsList, ProductType, ProductsList};
