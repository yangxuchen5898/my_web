// 添加
function addRow(params){
    let table = document.getElementById("table");
    // console.log(table);
    // 获取插入的位置
    let length = table.rows.length;
    // console.log(length);
    let newrow = table.insertRow(length);
    console.log(newrow);
    newrow.innerHTML = `
        <td>新姓名</td>
        <td>新联系方式</td>
        <td>
            <button>编辑</button>
            <button>删除</button>
        </td>
    `;
}
// 删除
function deleteRow(btn) {
    let row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
// 编辑
function editRow(btn) {
    let row = btn.parentNode.parentNode;
    let name = row.cells[0];
    let contact = row.cells[1];
    let inputName = prompt("请输入姓名", name.innerHTML);
    let inputPhone = prompt("请输入联系方式", contact.innerHTML);
    name.innerHTML = inputName;
    contact.innerHTML = inputPhone;
}