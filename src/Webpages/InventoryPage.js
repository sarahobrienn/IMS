import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './InventoryPage.css';

function InventoryPage() {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState('');
  const [updateIndex, setUpdateIndex] = useState('');

  const [url, setUrl] = useState('');
  const [sku, setSku] = useState('');
  const [name, setName] = useState('');
  const [selling_price, setSellingPrice] = useState('');
  const [original_price, setOriginalPrice] = useState('');
  const [currency, setCurrency] = useState('');
  const [availability, setAvailability] = useState('');
  const [color, setColor] = useState('');
  const [category, setCategory] = useState('');
  const [source, setSource] = useState('');
  const [source_website, setSourceWebsite] = useState('');
  const [breadcrumbs, setBreadcrumbs] = useState('');
  const [description, setDescription] = useState('');
  const [brand, setBrand] = useState('');
  const [images, setImages] = useState('');
  const [country, setCountry] = useState('');
  const [language, setLanguage] = useState('');
  const [average_rating, setAverageRating] = useState('');
  const [reviews_count, setReviewsCount] = useState('');
  const [crawled_at, setCrawledAt] = useState('');

  const [updateUrl, setUpdateUrl] = useState('');
  const [updateSku, setUpdateSku] = useState('');
  const [updateName, setUpdateName] = useState('');
  const [updateSellingPrice, setUpdateSellingPrice] = useState('');
  const [updateOriginalPrice, setUpdateOriginalPrice] = useState('');
  const [updateCurrency, setUpdateCurrency] = useState('');
  const [updateAvailability, setUpdateAvailability] = useState('');
  const [updateColor, setUpdateColor] = useState('');
  const [updateCategory, setUpdateCategory] = useState('');
  const [updateSource, setUpdateSource] = useState('');
  const [updateSourceWebsite, setUpdateSourceWebsite] = useState('');
  const [updateBreadcrumbs, setUpdateBreadcrumbs] = useState('');
  const [updateDescription, setUpdateDescription] = useState('');
  const [updateBrand, setUpdateBrand] = useState('');
  const [updateImages, setUpdateImages] = useState('');
  const [updateCountry, setUpdateCountry] = useState('');
  const [updateLanguage, setUpdateLanguage] = useState('');
  const [updateAverageRating, setUpdateAverageRating] = useState('');
  const [updateReviewsCount, setUpdateReviewsCount] = useState('');
  const [updateCrawledAt, setUpdateCrawledAt] = useState('');

  const fetchData = () => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setData(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddRow = () => {
    const currentTimestamp = new Date().toISOString().slice(0, 19).replace("T", " ");

    const insertQuery = `
      INSERT INTO product_data (
        url,
        sku,
        name,
        selling_price,
        original_price,
        currency,
        availability,
        color,
        category,
        source,
        source_website,
        breadcrumbs,
        description,
        brand,
        images,
        country,
        language,
        average_rating,
        reviews_count,
        crawled_at
      ) VALUES (
        '${url}',
        '${sku}',
        '${name}',
        '${selling_price}',
        '${original_price}',
        '${currency}',
        '${availability}',
        '${color}',
        '${category}',
        '${source}',
        '${source_website}',
        '${breadcrumbs}',
        '${description}',
        '${brand}',
        '${images}',
        '${country}',
        '${language}',
        '${average_rating}',
        '${reviews_count}',
        '${currentTimestamp}'
      )`;

    Axios.post("http://localhost:3001/api/customQuery", { query: insertQuery }).then((response) => {
      // Handle response
      console.log(response.data);
      // Refresh data after adding a row
      fetchData();
    });
  };

  const handleUpdateRow = () => {
    Axios.post("http://localhost:3001/api/updateRow", {
      id: updateIndex,
      updatedData: {
        url: updateUrl,
        sku: updateSku,
        name: updateName,
        selling_price: updateSellingPrice,
        original_price: updateOriginalPrice,
        currency: updateCurrency,
        availability: updateAvailability,
        color: updateColor,
        category: updateCategory,
        source: updateSource,
        source_website: updateSourceWebsite,
        breadcrumbs: updateBreadcrumbs,
        description: updateDescription,
        brand: updateBrand,
        images: updateImages,
        country: updateCountry,
        language: updateLanguage,
        average_rating: updateAverageRating,
        reviews_count: updateReviewsCount,
        crawled_at: updateCrawledAt,
      },
    }).then((response) => {
      // Handle response
      console.log(response.data);
      // Refresh data after updating a row
      fetchData();
      // Clear update fields after updating
      setUpdateIndex('');
      setUpdateUrl('');
      setUpdateSku('');
      setUpdateName('');
      setUpdateSellingPrice('');
      setUpdateOriginalPrice('');
      setUpdateCurrency('');
      setUpdateAvailability('');
      setUpdateColor('');
      setUpdateCategory('');
      setUpdateSource('');
      setUpdateSourceWebsite('');
      setUpdateBreadcrumbs('');
      setUpdateDescription('');
      setUpdateBrand('');
      setUpdateImages('');
      setUpdateCountry('');
      setUpdateLanguage('');
      setUpdateAverageRating('');
      setUpdateReviewsCount('');
      setUpdateCrawledAt('');
    });
  };

  const handleDeleteRow = () => {
    Axios.post("http://localhost:3001/api/deleteRow", { index: index }).then((response) => {
      // Handle response
      console.log(response.data);
      // Refresh data after deleting a row
      fetchData();
    });
  };

  return (
    <div className="title">
      <h1> My Inventory</h1>
    <div className="container"> 
      <div className="table-container">
        <table>
        <thead>
          <tr>
            <th>index</th>
            <th>url</th>
            <th>sku</th>
            <th>name</th>
            <th>selling_price</th>
            <th>original_price</th>
            <th>currency</th>
            <th>availability</th>
            <th>color</th>
            <th>category</th>
            <th>source</th>
            <th>source_website</th>
            <th>breadcrumbs</th>
            <th>description</th>
            <th>brand</th>
            <th>images</th>
            <th>country</th>
            <th>language</th>
            <th>average_rating</th>
            <th>reviews_count</th>
            <th>crawled_at</th>
            {/* Add more header cells as needed */}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.index}</td>
              <td>{item.url}</td>
              <td>{item.sku}</td>
              <td>{item.name}</td>
              <td>{item.selling_price}</td>
              <td>{item.original_price}</td>
              <td>{item.currency}</td>
              <td>{item.availability}</td>
              <td>{item.color}</td>
              <td>{item.category}</td>
              <td>{item.source}</td>
              <td>{item.source_website}</td>
              <td>{item.breadcrumbs}</td>
              <td>{item.description}</td>
              <td>{item.brand}</td>
              <td>{item.images}</td>
              <td>{item.country}</td>
              <td>{item.language}</td>
              <td>{item.average_rating}</td>
              <td>{item.reviews_count}</td>
              <td>{item.crawled_at}</td>
              
              {/* Add more cells as needed */}
            </tr>
          ))}
        </tbody>
        </table>
      </div>
      <br></br>
      <div className="form-container">
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL" />
        <input type="text" value={sku} onChange={(e) => setSku(e.target.value)} placeholder="SKU" />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input type="text" value={selling_price} onChange={(e) => setSellingPrice(e.target.value)} placeholder="Selling Price" />
        <input type="text" value={original_price} onChange={(e) => setOriginalPrice(e.target.value)} placeholder="Original Price" />
        <input type="text" value={currency} onChange={(e) => setCurrency(e.target.value)} placeholder="Currency" />
        <input type="text" value={availability} onChange={(e) => setAvailability(e.target.value)} placeholder="Availability" />
        <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="Color" />
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
        <input type="text" value={source} onChange={(e) => setSource(e.target.value)} placeholder="Source" />
        <input type="text" value={source_website} onChange={(e) => setSourceWebsite(e.target.value)} placeholder="Source Website" />
        <input type="text" value={breadcrumbs} onChange={(e) => setBreadcrumbs(e.target.value)} placeholder="Breadcrumbs" />
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
        <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} placeholder="Brand" />
        <input type="text" value={images} onChange={(e) => setImages(e.target.value)} placeholder="Images" />
        <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Country" />
        <input type="text" value={language} onChange={(e) => setLanguage(e.target.value)} placeholder="Language" />
        <input type="text" value={average_rating} onChange={(e) => setAverageRating(e.target.value)} placeholder="Average Rating" />
        <input type="text" value={reviews_count} onChange={(e) => setReviewsCount(e.target.value)} placeholder="Reviews Count" />
        <button onClick={() => handleAddRow()}>Add Row</button>
<br></br>
        <input type="text" value={index} onChange={(e) => setIndex(e.target.value)} placeholder="Index to Delete" />
      <button onClick={() => handleDeleteRow()}>Delete Row</button>

<br></br>
  <input type="text" value={updateIndex} onChange={(e) => setUpdateIndex(e.target.value)} placeholder="Index to Update" />
<input type="text" value={updateName} onChange={(e) => setUpdateName(e.target.value)} placeholder="Update Name" />
<input type="text" value={updateSellingPrice} onChange={(e) => setUpdateSellingPrice(e.target.value)} placeholder="Update Selling Price" />
<input type="text" value={updateOriginalPrice} onChange={(e) => setUpdateOriginalPrice(e.target.value)} placeholder="Update Original Price" />
<input type="text" value={updateCurrency} onChange={(e) => setUpdateCurrency(e.target.value)} placeholder="Update Currency" />
<input type="text" value={updateAvailability} onChange={(e) => setUpdateAvailability(e.target.value)} placeholder="Update Availability" />
<input type="text" value={updateColor} onChange={(e) => setUpdateColor(e.target.value)} placeholder="Update Color" />
<input type="text" value={updateCategory} onChange={(e) => setUpdateCategory(e.target.value)} placeholder="Update Category" />
<input type="text" value={updateSource} onChange={(e) => setUpdateSource(e.target.value)} placeholder="Update Source" />
<input type="text" value={updateSourceWebsite} onChange={(e) => setUpdateSourceWebsite(e.target.value)} placeholder="Update Source Website" />
<input type="text" value={updateBreadcrumbs} onChange={(e) => setUpdateBreadcrumbs(e.target.value)} placeholder="Update Breadcrumbs" />
<input type="text" value={updateDescription} onChange={(e) => setUpdateDescription(e.target.value)} placeholder="Update Description" />
<input type="text" value={updateBrand} onChange={(e) => setUpdateBrand(e.target.value)} placeholder="Update Brand" />
<input type="text" value={updateImages} onChange={(e) => setUpdateImages(e.target.value)} placeholder="Update Images" />
<input type="text" value={updateCountry} onChange={(e) => setUpdateCountry(e.target.value)} placeholder="Update Country" />
<input type="text" value={updateLanguage} onChange={(e) => setUpdateLanguage(e.target.value)} placeholder="Update Language" />
<input type="text" value={updateAverageRating} onChange={(e) => setUpdateAverageRating(e.target.value)} placeholder="Update Average Rating" />
<input type="text" value={updateReviewsCount} onChange={(e) => setUpdateReviewsCount(e.target.value)} placeholder="Update Reviews Count" />
<input type="text" value={updateCrawledAt} onChange={(e) => setUpdateCrawledAt(e.target.value)} placeholder="Update Crawled At" />
        <button onClick={() => handleUpdateRow()}>Update Row</button>
      </div> 
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
    </div>
    
  );
}

export default InventoryPage;