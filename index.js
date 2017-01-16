function escapeCsvValue(val, delimiter) {
  
  if (typeof(val) === "undefined" || val === null) {
    return "";
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

  return rows.map(function(row) {
    return row.map(escapeCsvValue, delimiter).join(delimiter);
  }).join("\n");
};

module.exports = arrayToCsv;
