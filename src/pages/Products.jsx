import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard/ProductCard'
import { getProducts } from '../services/productService'

function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    const data = await getProducts()
    setProducts(data)
  }

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Products
