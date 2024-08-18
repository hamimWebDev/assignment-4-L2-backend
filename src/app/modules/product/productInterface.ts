export interface TProduct {
  images: string[];
  name: string;
  category: string;
  oldPrice?: string;
  newPrice: string;
  rating: number;
  inStock: number;
  size: string;
  brand: string;
  shopArea: string;
  policy: string;
  PolicyDays: number;
  contact_whatsapp: string;
  contact_phone: string;
  isDeleted?: boolean;
}
