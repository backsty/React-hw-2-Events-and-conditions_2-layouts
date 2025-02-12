import { Store } from '@components/Store';
import { products } from '@data/products';

function App() {
  return (
    <div className="container">
      <Store products={products} />
    </div>
  );
}

export default App;
