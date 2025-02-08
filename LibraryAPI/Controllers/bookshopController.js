const connection = require("../config/db");
/**
 * POST /api/bookshops
 * Creates a new bookshop entry.
 * Expects: { shop_id, name, city, contactNumber, email, address } in the request body.
 * Returns: 201 Created with the ID of the created bookshop on success, 500 on database error.
 */
exports.createBookshop = (req, res) => {
  const { shop_id, name, city, contactNumber, email, address } = req.body;
  const query =
    "INSERT INTO bookshop (shop_id, name, city, contactNumber, email, address) VALUES (?, ?, ?, ?, ?, ?);";

  connection.query(
    query,
    [shop_id, name, city, contactNumber, email, address],
    (err, result) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error adding bookshop", details: err.message });
      }
      res
        .status(201)
        .json({ message: "Bookshop added successfully", id: result.insertId });
    }
  );
};

/**
 * GET /api/bookshops
 * Retrieves all bookshops.
 * Returns: 200 OK with a list of bookshops on success, 500 on database error.
 */
exports.getAllBookshops = (req, res) => {
  const query = "SELECT * FROM bookshop;";

  connection.query(query, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error retrieving bookshops", details: err.message });
    }
    res.status(200).json(result);
  });
};

/**
 * GET /api/bookshops/:id
 * Retrieves a bookshop by its ID.
 * Expects: { id } in the URL parameters.
 * Returns: 200 OK with the bookshop details on success, 404 if not found, 500 on database error.
 */
exports.getBookshopById = (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM bookshop WHERE shop_id = ?;";

  connection.query(query, [id], (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error retrieving bookshop", details: err.message });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: "Bookshop not found" });
    }
    res.status(200).json(result[0]);
  });
};

/**
 * GET /api/bookshops/city/:city
 * Retrieves bookshops by city.
 * Expects: { city } in the URL parameters.
 * Returns: 200 OK with a list of bookshops in the city on success, 500 on database error.
 */
exports.getBookshopByCity = (req, res) => {
  const { city } = req.params;
  const query = "SELECT * FROM bookshop WHERE city = ?;";

  connection.query(query, [city], (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error retrieving bookshops", details: err.message });
    }
    res.status(200).json(result);
  });
};

/**
 * GET /api/bookshops/name/:name
 * Retrieves a bookshop by name.
 * Expects: { name } in the URL parameters.
 * Returns: 200 OK with the bookshop details on success, 500 on database error.
 */
exports.getBookshopByName = (req, res) => {
  const { name } = req.params;
  const query = "SELECT * FROM bookshop WHERE name = ?;";

  connection.query(query, [name], (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error retrieving bookshop", details: err.message });
    }
    res.status(200).json(result);
  });
};

/**
 * GET /api/bookshops/email/:email
 * Retrieves a bookshop by email.
 * Expects: { email } in the URL parameters.
 * Returns: 200 OK with the bookshop details on success, 500 on database error.
 */
exports.getBookshopByEmail = (req, res) => {
  const { email } = req.params;
  const query = "SELECT * FROM bookshop WHERE email = ?;";

  connection.query(query, [email], (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error retrieving bookshop", details: err.message });
    }
    res.status(200).json(result);
  });
};

/**
 * GET /api/cities
 * Retrieves all unique cities from the bookshops.
 * Returns: 200 OK with a list of cities on success, 500 on database error.
 */
exports.getCities = (req, res) => {
  const query = "SELECT distinct city FROM bookshop;";

  connection.query(query, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error retrieving cities", details: err.message });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: "No cities found" });
    }
    const cities = result.map((row) => row.city);
    res.status(200).json(cities);
  });
};

/**
 * PUT /api/bookshops/:id/name
 * Updates the name of a bookshop.
 * Expects: { name } in the request body.
 * Expects: { id } in the URL parameters.
 * Returns: 200 OK with a success message on success, 500 on database error.
 */
exports.updateBookshopName = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const query = "UPDATE bookshop SET name = ? WHERE shop_id = ?;";

  connection.query(query, [name, id], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Error updating bookshop name",
        details: err.message,
      });
    }
    res.status(200).json({ message: "Bookshop name updated successfully" });
  });
};

/**
 * PUT /api/bookshops/:id/email
 * Updates the email of a bookshop.
 * Expects: { email } in the request body.
 * Expects: { id } in the URL parameters.
 * Returns: 200 OK with a success message on success, 500 on database error.
 */
exports.updateBookshopEmail = (req, res) => {
  const { id } = req.params;
  const { email } = req.body;
  const query = "UPDATE bookshop SET email = ? WHERE shop_id = ?;";

  connection.query(query, [email, id], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Error updating bookshop email",
        details: err.message,
      });
    }
    res.status(200).json({ message: "Bookshop email updated successfully" });
  });
};

/**
 * DELETE /api/bookshops/:id
 * Deletes a bookshop by its ID.
 * Expects: { id } in the URL parameters.
 * Returns: 200 OK with a success message on success, 500 on database error.
 */
exports.deleteBookshop = (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM bookshop WHERE shop_id = ?;";

  connection.query(query, [id], (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error deleting bookshop", details: err.message });
    }
    res.status(200).json({ message: "Bookshop deleted successfully" });
  });
};
