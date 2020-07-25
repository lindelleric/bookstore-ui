import { useState, useEffect } from 'react';
import { Product } from '~/models/product';

export function useProducts(): [ Product[], boolean, any ] {
    const [ products, setProducts ] = useState<Product[]>([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState();

    useEffect(() => {
        Product.getAll()
            .then(setProducts)
            .catch(setError)
            .finally(() => setIsLoading(false))
    }, []);

    return [ products, isLoading, error ];
}