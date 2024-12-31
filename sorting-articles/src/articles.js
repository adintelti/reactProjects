import React, { useState } from 'react';

const ArticleList = () => {
  // Dados simulados para os artigos
  const initialArticles = [
    { title: 'Article 1', upvotes: 10, date: '2024-12-01' },
    { title: 'Article 2', upvotes: 25, date: '2024-12-05' },
    { title: 'Article 3', upvotes: 5, date: '2024-12-03' },
    { title: 'Article 4', upvotes: 15, date: '2024-12-04' },
  ];

  // Estado para armazenar os artigos
  const [articles, setArticles] = useState(initialArticles);
  
  // Função para ordenar os artigos
  const sortArticles = (criteria) => {
    const sortedArticles = [...articles];
    if (criteria === 'upvotes') {
      sortedArticles.sort((a, b) => b.upvotes - a.upvotes); // Ordena por upvotes
    } else if (criteria === 'date') {
      sortedArticles.sort((a, b) => new Date(b.date) - new Date(a.date)); // Ordena por data
    }
    setArticles(sortedArticles);
  };

  return (
    <div>
      <h1>Sorting Articles</h1>
      <div>
        <span>Sorted by: </span>
        <button onClick={() => sortArticles('upvotes')} style={{ backgroundColor: 'green', color: 'white', marginRight: '10px' }}>
          Most Upvoted
        </button>
        <button onClick={() => sortArticles('date')} style={{ backgroundColor: 'green', color: 'white' }}>
          Most Recent
        </button>
      </div>
      
      <table border="1" style={{ marginTop: '20px', width: '100%' }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, index) => (
            <tr key={index}>
              <td>{article.title}</td>
              <td>{article.upvotes}</td>
              <td>{article.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArticleList;
