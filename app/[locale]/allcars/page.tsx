"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Page = () => {
  const [brands, setBrands] = useState<any[]>([]);
  const [models, setModels] = useState<any[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');

  // Dohvati sve marke
  const getAllCars = async () => {
    const options = {
      method: 'GET',
      url: 'https://car-api2.p.rapidapi.com/api/makes',
      params: {
        direction: 'asc',
        sort: 'id',
      },
      headers: {
        'x-rapidapi-key': 'a7c562452emsh3f749f071814bc5p16c202jsnb899a8fb9a41',
        'x-rapidapi-host': 'car-api2.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setBrands(response.data.data); // Setuj liste marki u state
      console.log('Marke:', response.data.data); // Proveri sve marke
    } catch (error) {
      console.error('Greška pri dohvatanju marki:', error);
    }
  };

  // Dohvati modele za odabranu marku
  const getModelsForBrand = async (brandName: string) => {
    if (!brandName) return;  // Ako nije odabrana marka, ne šaljemo API poziv

    console.log('Dohvatanje modela za marku:', brandName);  // Log za ime marke
    
    const options = {
      method: 'GET',
      url: 'https://car-api2.p.rapidapi.com/api/models',
      params: {
        make: brandName,  // Ovde šaljemo ime marke
        sort: 'id',
        direction: 'asc',
        year: '2020',
        verbose: 'yes',
      },
      headers: {
        'x-rapidapi-key': 'a7c562452emsh3f749f071814bc5p16c202jsnb899a8fb9a41',
        'x-rapidapi-host': 'car-api2.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      console.log('API odgovor sa modelima:', response.data);  // Log za modele
      setModels(response.data.data);  // Postavljamo modele u state
    } catch (error) {
      console.error('Greška prilikom dohvatanja modela:', error);
    }
  };

  // Kada se promeni marka
  const handleBrandChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedBrandId = event.target.value;
    console.log('Izabrana marka ID:', selectedBrandId);

    // Pronalaženje imena marke na osnovu izabranog ID-a
    const selectedBrandName = brands.find((brand) => brand.id.toString() === selectedBrandId)?.name;

    if (selectedBrandName) {
      setSelectedBrand(selectedBrandName); // Postavljamo ime marke u state
      setModels([]); // Resetujemo modele pre nego što dobijemo nove
      getModelsForBrand(selectedBrandName); // Dohvatimo modele na osnovu imena marke
    }
  };

  // Kada se promeni model
  const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModel(event.target.value);
  };

  useEffect(() => {
    getAllCars(); // Dohvatimo sve marke prilikom učitavanja stranice
  }, []);

  return (
    <div>
      <h1>Odaberi Marka i Model</h1>
      
      {/* Prvi select - Marka */}
      <div>
        <label htmlFor="brands">Marka: </label>
        <select id="brands" value={selectedBrand} onChange={handleBrandChange}>
          <option value="">{!selectedBrand ? "Izaberite model" : selectedBrand}</option>
          {brands.map((brand) => (
            <option key={brand.id} value={brand.id}>
              {brand.name}
            </option>
          ))}
        </select>
      </div>
      
      {/* Drugi select - Model */}
      <div>
        <label htmlFor="models">Model: </label>
        <select
          id="models"
          value={selectedModel}
          onChange={handleModelChange}
          disabled={!models.length}
        >
          <option value="">{!selectedModel ? "Izaberite model" : selectedBrand}</option>
          {models.length > 0 ? (
            models.map((model: any) => (
              <option key={model.id} value={model.name}>
                {model.name}
              </option>
            ))
          ) : (
            <option value="">Nema modela za ovu marku</option>
          )}
        </select>
      </div>
    </div>
  );
};

export default Page;
