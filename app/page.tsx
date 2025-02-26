import UserList from './components/UserList';
import ProductList from './components/ProductList';
import MaterialTableSection from './components/MaterialTableSection';

export default function Home() {
  return (
    <main className="container mx-auto p-4 min-h-screen" suppressHydrationWarning>
      <h1 className="text-4xl font-bold mb-8 text-center dark:text-gray-100">
        Next.js Data Fetching System
      </h1>
      
      <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-colors">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100 border-b pb-2 border-gray-200 dark:border-gray-700">
            Server-Side Fetching Example
          </h2>
          <ProductList />
        </section>
        
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-colors">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100 border-b pb-2 border-gray-200 dark:border-gray-700">
            Client-Side Fetching Example
          </h2>
          <UserList />
        </section>
        
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-colors">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100 border-b pb-2 border-gray-200 dark:border-gray-700">
            Third-Party Component Integration
          </h2>
          <MaterialTableSection />
        </section>
      </div>
    </main>
  );
}