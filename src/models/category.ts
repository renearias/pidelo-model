import { Model } from './abstract-model';


class Category extends Model {
  name: string;
  products_count: number;
  img: string;
  key?: string;
}

export default Category;
