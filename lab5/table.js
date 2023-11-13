document.addEventListener('DOMContentLoaded', function () {
    createTable();
  });
  
  function createTable() {
    const table = document.getElementById('table');
    let counter = 1;
  
    for (let i = 0; i < 6; i++) {
      const row = table.insertRow();
  
      for (let j = 0; j < 6; j++) {
        const cell = row.insertCell();
        cell.textContent = counter;
        if (cell.textContent === '32') {
            cell.addEventListener('mouseover', () => changeColorRandom(cell));
            cell.addEventListener('click', () => changeColorPalette(cell));
            cell.addEventListener('dblclick', () => changeColumnColor(cell.cellIndex));
        }        
        counter++;
      }
    }
  }
  
  function changeColorRandom(cell) {
    const randomColor = getRandomColor();
    cell.style.backgroundColor = randomColor;
  }
  
  function changeColorPalette(cell) {
    const colorPicker = document.getElementById('colorPicker');
      cell.style.backgroundColor = colorPicker.value;
  }
  
  function changeColumnColor(columnIndex) {
    const colorPicker = document.getElementById('colorPicker');
    const selectedColor = colorPicker.value;
  
    const table = document.getElementById('table');
    for (let i = 0; i < table.rows.length; i++) {
      const row = table.rows[i];
      const cell = row.cells[columnIndex];
      cell.style.backgroundColor = selectedColor;
    }
  }
  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
