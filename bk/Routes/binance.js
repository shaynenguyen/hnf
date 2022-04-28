const express               = require("express");
const binanceController     = require("../Controllers/binanceC");

// 2. Router configuration
const router                = express.Router();

// 3. METHODS
// Retrive all listed symbols
router.get('/symbols', binanceController.list_symbols)

// 4. Exports
module.exports = router;
