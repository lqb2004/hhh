document.addEventListener('DOMContentLoaded', function() {
  // 获取记录表格的tbody元素
  const tableBody = document.querySelector('#recordTable tbody');
  
  // 从服务器获取记录数据
  
  fetch('http://localhost:80/user')
      .then(response => response.json())
      .then(data => {
          // 清空表格
          tableBody.innerHTML = '';
          
          // 遍历数据并添加到表格
          data.forEach(record => {
              const row = document.createElement('tr');
              
              // 创建编辑按钮单元格
              const editCell = document.createElement('td');
              const editButton = document.createElement('button');
              editButton.textContent = '编辑';
              editButton.className = 'edit-btn';
              editButton.dataset.id = record.id;
              editCell.appendChild(editButton);
              
              // 添加其他数据单元格
              row.innerHTML += `
                  <td>${record.type}</td>
                  <td>${record.amount}</td>
                  <td>${record.primary_category}</td>
                  <td>${record.secondary_category}</td>
                  <td>${record.account}</td>
                  <td>${record.date.split('T')[0]}</td>
                  <td>${record.notes || ''}</td>
              `;
              
              // 创建删除按钮单元格
              const deleteCell = document.createElement('td');
              const deleteButton = document.createElement('button');
              deleteButton.textContent = '删除';
              deleteButton.className = 'delete-btn';
              deleteButton.dataset.id = record.id;
              deleteCell.appendChild(deleteButton);
              
              // 将单元格添加到行
              row.appendChild(editCell);
              row.insertBefore(editCell, row.firstChild);
              row.appendChild(deleteCell);
              
              // 将行添加到表格
              tableBody.appendChild(row);
          });
      })
      .catch(error => {
          console.error('获取数据失败:', error);
      });
});