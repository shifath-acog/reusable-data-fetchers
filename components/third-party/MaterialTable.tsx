'use client';

import React from 'react';
import withClientFetching from '../../hoc/withClientFetching';
import { Product, WithDataProps } from '../../types';

// This is a mock of a third-party table component
// In a real app, you would import from the actual library
// (e.g., @mui/material or other UI libraries)
const ThirdPartyTable = ({ data, columns }: { data: any[], columns: any[] }) => {
  return (
    <div className="third-party-table">
      <h2>Third Party Table Component</h2>
      <table className="min-w-full bg-white shadow-md rounded">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} className="py-2 px-4 bg-blue-500 text-white">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="py-2 px-4 border-b">
                  {typeof column.accessor === 'function' 
                    ? column.accessor(row) 
                    : row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Now we create a wrapper component that adapts our data format to the third-party component
const MaterialProductTable: React.FC<WithDataProps<Product>> = ({ data, isLoading, error }) => {
  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Define columns for the third-party table
  const columns = [
    { accessor: 'id', header: 'ID' },
    { accessor: 'name', header: 'Product Name' },
    { 
      accessor: (row: Product) => `$${row.price.toFixed(2)}`, 
      header: 'Price' 
    },
    { accessor: 'category', header: 'Category' },
    { accessor: 'stock', header: 'In Stock' }
  ];

  return <ThirdPartyTable data={data} columns={columns} />;
};

// Export the component wrapped with our client-side fetching HOC
export default withClientFetching<Product, WithDataProps<Product>>(
  MaterialProductTable, 
  'ProductList'
);