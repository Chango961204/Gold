// src/components/PrecioOro.js

import React, { useEffect, useState } from 'react';

function PrecioOro() {
  const [precioOro, setPrecioOro] = useState(null);

  useEffect(() => {
    const fetchPrecioOro = async () => {
      try {
        const response = await fetch('/api/precio-oro');
        const data = await response.json();
        setPrecioOro(data);
      } catch (error) {
        console.error('Error al obtener el precio del oro:', error);
      }
    };

    fetchPrecioOro();
  }, []);

  return (
    <div>
      <h2>Precio del Oro</h2>
      {precioOro ? (
        <div>
          <p>Precio por Troy Ounce: {precioOro.price}</p>
          <p>Precio por Gramo (24k): {precioOro.price_gram_24k}</p>
          {/* Puedes agregar más detalles según la respuesta de la API */}
        </div>
      ) : (
        <p>Cargando precio del oro...</p>
      )}
    </div>
  );
}

export default PrecioOro;
