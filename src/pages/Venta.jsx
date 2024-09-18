import React, { useEffect, useState } from 'react';
import { fetchGoldPrice } from '../services/goldPriceService.js';
import './Venta.css';

function Venta() {
  const [goldPrice, setGoldPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getGoldPrice = async () => {
      try {
        const priceData = await fetchGoldPrice();
        setGoldPrice(priceData);
      } catch (err) {
        setError('Error fetching gold price');
      } finally {
        setLoading(false);
      }
    };

    getGoldPrice();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="gold-price-container">
      <h1>Precios del Oro</h1>
      <h3>Nuestros precios se actualizan Automaticamente Gracias a la API de GoldApi</h3>
      {goldPrice ? (
        <table className="price-table">
          <tbody>
            <tr>
              <td className="price-header">Precio del Oro (por Onza Troy):</td>
              <td className="price-value">{goldPrice.price} MXN</td>
            </tr>
            <tr>
              <td className="price-header">Precio del Oro (por Gramo 24k):</td>
              <td className="price-value">{goldPrice.price_gram_24k} MXN</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No se pudo obtener el precio del oro.</p>
      )}
    </div>
  );
}

export default Venta;
