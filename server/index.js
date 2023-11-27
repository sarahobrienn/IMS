const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user: "root",  // Replace with your actual database user
    password: "Nguyen123!",  // Replace with your actual database password
    database: "adidas",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM product_data";
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.error("Error executing query:", err);
            res.status(500).send("Error fetching data from the database");
        } else {
            res.send(result);
        }
    });
});

app.post("/api/addRow", (req, res) => {
    const {
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
      crawled_at,
      // Add more fields based on your database schema
    } = req.body;
  
    const sqlInsert = `
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
        // Add more fields based on your database schema
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  
    // Use placeholders to prevent SQL injection
    db.query(
      sqlInsert,
      [
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
        crawled_at,
        // Add more values based on your database schema
      ],
      (err, result) => {
        if (err) {
          console.error("Error executing query:", err);
          res.status(500).send("Error adding a new row to the database");
        } else {
          res.send("Row added successfully");
        }
      }
    );
  });

  app.post("/api/updateRow", (req, res) => {
    const {
      id,
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
      crawled_at,
    } = req.body;
  
    const sqlUpdate = `
      UPDATE product_data 
      SET 
        url = ?,
        sku = ?,
        name = ?,
        selling_price = ?,
        original_price = ?,
        currency = ?,
        availability = ?,
        color = ?,
        category = ?,
        source = ?,
        source_website = ?,
        breadcrumbs = ?,
        description = ?,
        brand = ?,
        images = ?,
        country = ?,
        language = ?,
        average_rating = ?,
        reviews_count = ?,
        crawled_at = ?
      WHERE \`index\` = ?`;
  
    db.query(
      sqlUpdate,
      [
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
        crawled_at,
        id,
      ],
      (err, result) => {
        if (err) {
          console.error("Error executing query:", err);
          res.status(500).send("Error updating the row in the database");
        } else {
          res.send("Row updated successfully");
        }
      }
    );
  });
  
  app.post("/api/deleteRow", (req, res) => {
    const { index } = req.body;
  
    const sqlDelete = "DELETE FROM product_data WHERE `index` = ?";
  
    db.query(sqlDelete, [index], (err, result) => {
      if (err) {
        console.error("Error executing query:", err);
        res.status(500).send("Error deleting the row from the database");
      } else {
        res.send("Row deleted successfully");
      }
    });
  });
  

  app.post("/api/customQuery", (req, res) => {
    const { query } = req.body;
  
    db.query(query, (err, result) => {
      if (err) {
        console.error("Error executing custom query:", err);
        res.status(500).send("Error executing the custom query");
      } else {
        res.send("Custom query executed successfully");
      }
    });
  });
  

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});