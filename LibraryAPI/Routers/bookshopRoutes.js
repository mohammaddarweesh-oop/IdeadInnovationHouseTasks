const express = require("express");
const router = express.Router();
const {
  createBookshop,
  getAllBookshops,
  getBookshopById,
  getBookshopByCity,
  getBookshopByName,
  getBookshopByEmail,
  updateBookshopName,
  updateBookshopEmail,
  deleteBookshop,
  getCities,
} = require("../Controllers/bookshopController");

router.route("/bookshop").post(createBookshop).get(getAllBookshops);
router.route("/bookshop/:id").get(getBookshopById).delete(deleteBookshop);
router.route("/bookshop/city/:city").get(getBookshopByCity);
router.route("/cities").get(getCities);

router.route("/bookshop/name/:name").get(getBookshopByName);
router.route("/bookshop/email/:email").get(getBookshopByEmail);
router.route("/bookshop/:id/name").put(updateBookshopName);
router.route("/bookshop/:id/email").put(updateBookshopEmail);

module.exports = router;
