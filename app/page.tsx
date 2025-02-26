import UserList from './components/UserList';
import ProductList from './components/ProductList';
import MaterialTableSection from './components/MaterialTableSection';

export default function Home() {
  return (
    <main className="container mx-auto p-4" suppressHydrationWarning>
      <h1 className="text-3xl font-bold mb-6">Next.js Data Fetching System</h1>
      
      <div className="grid grid-cols-1 gap-8">
        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Server-Side Fetching Example</h2>
          <ProductList />
        </section>
        
        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Client-Side Fetching Example</h2>
          <UserList />
        </section>
        
        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Third-Party Component Integration</h2>
          <MaterialTableSection />
        </section>
      </div>
    </main>
  );
}