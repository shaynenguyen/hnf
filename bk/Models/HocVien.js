const mongoose = require('mongoose');
const HocVienSchema = new mongoose.Schema({
    Email:      String,
    HoTen:      String,
    SoDT:       String,
    ThanhToan:  Boolean,
    Wallet:     String,
    Ngay:       Date
});

module.exports = mongoose.model("HocVien", HocVienSchema);