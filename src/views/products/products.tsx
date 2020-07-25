import React from 'react';
import styled from 'styled-components';

import { useProducts } from '~/hooks/useProducts';
import SiteWrapper from '~/components/site-wrapper';
import { device } from '~/utils/screen-sizes';

const ProductList = styled.div`
    display: grid;
    grid: auto / auto auto auto auto auto;
    grid-gap: 35px 10px;

    @media (max-width: ${ device.desktop }) {
        grid: auto / auto auto auto auto;
    }

    @media (max-width: ${ device.tablet }) {
        grid: auto / auto auto auto;
    }
`;

export default function Products() {
    // const [ products, isLoading ] = useProducts();

    return (
        <SiteWrapper>
            <h1>Products</h1>
            {/* {
                isLoading ? <p>Loading products...</p> : (
                    <ProductList>
                        { products.map((product) => <ProductCard product={product} key={product.id} />) }
                    </ProductList>
                )
            } */}
        </SiteWrapper>
    );
}