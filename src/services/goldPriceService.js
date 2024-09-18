// src/services/goldPriceService.js

const API_URL = 'https://www.goldapi.io/api/XAU/MXN'; 
const API_KEY = 'goldapi-9vsag19m0zslzfg-io';

export const fetchGoldPrice = async () => {
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'x-access-token': API_KEY,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Error fetching gold price');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching gold price:', error);
    throw error;
  }
};
