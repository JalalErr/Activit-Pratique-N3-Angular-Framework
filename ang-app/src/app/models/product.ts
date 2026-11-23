export interface Product {
  id: number;
  name: string;
  price: number;
  selected: boolean;
}

export interface ProductPayload {
  name: string;
  price: number;
  selected: boolean;
}
