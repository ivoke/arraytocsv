function escapeCsvValue(val, delimiter) {
  var type = typeof val;
  
  if (type === "undefined" || type === null) {
    output = "";
  } else {
    val = String(val);
  }
  
  val = val.replace(/"/g, '""');

  if (val.search(/("|,|\n)/g) >= 0) {
    val = '"' + val + '"';
  }
  
  return val;
};

function arrayToCsv(rows, delimiter) {
  if (typeof delimiter === "undefined" || delimiter === null) {
    delimiter = ";";
  }

  rows.map(function(row) {
    return row.map(escapeCsvValue, delimiter).join(delimiter);
  }).join("\n");
};

module.exports = arrayToCsv;
