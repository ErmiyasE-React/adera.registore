// Install dependencies: npm install express pg bcrypt jsonwebtoken zod casl

const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { z } = require('zod');
const { AbilityBuilder, Ability } = require('@casl/ability');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// PostgreSQL connection
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Adera',
  password: 'ermi@21',
  port: 5432,
});

// Test Endpoint
app.get('/', (req, res) => {
  res.send('Backend server is running.');
});
const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));