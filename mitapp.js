// MIT App Inventor JavaScript Extension
// Byte dizisini float değerlerine dönüştürür.

(function(global) {
  var ByteToFloat = {};

  // Byte dizisini float'a dönüştürme fonksiyonu
  ByteToFloat.convertBytesToFloat = function(bytes) {
    if (bytes.length < 4) {
      throw new Error("Byte dizisi en az 4 byte olmalıdır.");
    }

    // Byte dizisini bir ArrayBuffer'a kopyala
    var buffer = new ArrayBuffer(4);
    var view = new DataView(buffer);
    for (var i = 0; i < 4; i++) {
      view.setUint8(i, bytes[i]);
    }

    // Float değerini oku ve döndür
    return view.getFloat32(0, true); // Little-endian
  };

  // MIT App Inventor'a fonksiyonu ekle
  global.ByteToFloat = ByteToFloat;
})(this);
