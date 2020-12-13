import React from 'react';

// Components
import ProductCard from '../ProductCard';

// Styled Components
import {
  CatalogueWrapper,
  CategoriesTitle,
  CategoriesColumn,
  CategoryButton,
  ProductsColumn
} from './styles';

const Catalogue = ({ product, category, reviews }) => {

  return (
    <CatalogueWrapper>

      <CategoriesColumn>
        <CategoriesTitle>Categories</CategoriesTitle>
        {category.map((category, i) => <CategoryButton category={category} key={i} >{category.name}</CategoryButton>)}
      </CategoriesColumn>

      <ProductsColumn>
        {product.map((product, i) => <ProductCard product={product} category={category} reviews={reviews} key={i} />)}
      </ProductsColumn>

    </CatalogueWrapper>
  );
};

export default Catalogue;