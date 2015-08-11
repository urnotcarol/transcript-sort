function sort(start, keyCol, end) {
  var arrToSort = [];
  var list = document.getElementById("list");
  var listRows = list.rows.length;
  var listColumns = list.rows.item(0).cells.length;

  for (var i = 1; i < listRows; i++) {
    var elem = [];
    for (var j = start; j <= end; j++) {
      elem.push(list.rows[i].cells[j].innerHTML);
    }
    arrToSort.push(elem);
  }

  var sortedArr = arrToSort.sort(function(a, b) {
    return b[keyCol] - a[keyCol];
  });

  for (var x = 1; x < listRows; x++) {
    for (var y = 0; y < listColumns; y++) {
      list.rows[x].cells[y].innerHTML = sortedArr[x - 1][y];
    }
  }
}

document.getElementById("chinese").addEventListener('click', function() {
  sort(0, 1, 2);
});

document.getElementById("math").addEventListener('click', function() {
  sort(0, 2, 2);
});
