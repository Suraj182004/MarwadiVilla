// ListingPage.js
import React, { useState } from 'react';
import { addHouse } from '../data'; // Adjust the path as necessary

const ListingPage = () => {
  const [formData, setFormData] = useState({
    type: '',
    name: '',
    description: '',
    image: '',
    imageLg: '', // Add large image field
    country: '',
    city: '',
    address: '',
    bedrooms: '',
    bathrooms: '',
    surface: '',
    year: '',
    price: '',
    agentName: '',
    agentPhone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newHouse = {
      id: Date.now(), // Use timestamp as a unique ID
      type: formData.type,
      name: formData.name,
      description: formData.description,
      image: formData.image,
      imageLg: formData.imageLg, // Include large image
      country: formData.country,
      city: formData.city,
      address: formData.address,
      bedrooms: formData.bedrooms,
      bathrooms: formData.bathrooms,
      surface: formData.surface,
      year: formData.year,
      price: formData.price,
      date: new Date().toLocaleDateString(),
      agent: {
        image: '',
        name: formData.agentName,
        phone: formData.agentPhone,
      },
    };

    addHouse(newHouse);
    setFormData({
      type: '',
      name: '',
      description: '',
      image: '',
      imageLg: '', // Reset large image field
      country: '',
      city: '',
      address: '',
      bedrooms: '',
      bathrooms: '',
      surface: '',
      year: '',
      price: '',
      agentName: '',
      agentPhone: '',
    });
    alert('Property added successfully!');
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add a Property</h1>
      <form onSubmit={handleSubmit} className="space-y-4 mb-16">
        <input
          type="text"
          name="type"
          placeholder="Type"
          value={formData.type}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
        />
        {formData.image && (
          <img
            src={formData.image}
            alt="Preview"
            className="w-full h-auto mb-4 rounded"
          />
        )}
        <input
          type="text"
          name="imageLg"
          placeholder="Large Image URL" // Add large image URL field
          value={formData.imageLg}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
        />
        {formData.imageLg && (
          <img
            src={formData.imageLg}
            alt="Large Preview"
            className="w-full h-auto mb-4 rounded"
          />
        )}
        {/* Other fields remain unchanged */}
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
        />
        <input
          type="number"
          name="bedrooms"
          placeholder="Bedrooms"
          value={formData.bedrooms}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
        />
        <input
          type="number"
          name="bathrooms"
          placeholder="Bathrooms"
          value={formData.bathrooms}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="surface"
          placeholder="Surface Area"
          value={formData.surface}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="year"
          placeholder="Year Built"
          value={formData.year}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="agentName"
          placeholder="Agent Name"
          value={formData.agentName}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="agentPhone"
          placeholder="Agent Phone"
          value={formData.agentPhone}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200">
          Add Property
        </button>
      </form>
    </div>
  );
};

export default ListingPage;

