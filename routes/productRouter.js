// products (martha)

const express = require('express');
const router = express.Router();
const controller = require('../controllers/products');
const { createProductSchema, updateProductSchema } = require('../schemas/productSchemas');
const validate = require('../middleware/validate');

router.get('/', controller.getAllProducts);
router.get('/:id', controller.getProductById);
router.post('/', validate(createProductSchema), controller.createProduct);
router.put('/:id', validate(updateProductSchema), controller.updateProduct);
router.delete('/:id', controller.deleteProduct);

module.exports = router;
