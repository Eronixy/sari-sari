document.addEventListener('DOMContentLoaded', function() {
    var dataTable = document.getElementById('dataTable');
    var searchInput = document.getElementById('searchInput');
    
    fetch("sari-sari.csv")
        .then(response => response.text())
        .then(data => {
            var rows = data.trim().split('\n');
            var headers = rows[0].split(',');
            for (var i = 1; i < rows.length; i++) {
                var cells = rows[i].split(',');
                var tr = document.createElement('tr');
                for (var j = 0; j < cells.length; j++) {
                    var td = document.createElement('td');
                    td.textContent = cells[j];
                    tr.appendChild(td);
                }
                dataTable.appendChild(tr);
            }
        });

    function search() {
        var filter = searchInput.value.toUpperCase();
        var rows = dataTable.getElementsByTagName('tr');
        for (var i = 1; i < rows.length; i++) {
            var cells = rows[i].getElementsByTagName('td');
            var found = false;
            for (var j = 0; j < cells.length; j++) {
                var cellValue = cells[j].textContent || cells[j].innerText;
                if (cellValue.toUpperCase().indexOf(filter) > -1) {
                    found = true;
                    break;
                }
            }
            rows[i].style.display = found ? '' : 'none';
        }
    }
});