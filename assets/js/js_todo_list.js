let elInput = document.querySelector('#todo-in');
let elAddBtn = document.querySelector('#todo-add-btn');
let elItem = document.querySelector('#todo-item');
let items = [];

/**
 * 將 items 資料使用迴圈組成 HTML 並顯示
 */
const render = () => {
    let html = '';
    items.forEach((item, index) => {
        // let checked = '';
        // if (item.checked) {
        //     checked = 'checked';
        // }

        let checked = item.checked ? 'checked' : '';
        html += `<li data-index="${index}">
                    <input type="checkbox" ${checked}>
                    <span>${item.text}</span>
                </li>`
    })

    elItem.innerHTML = html;
}

const addTodo = () => {
    let value = elInput.value;
    if (!value) {
        elInput.focus();
        return;
    }
    elItem.innerHTML += `<li>
                           
                            <input type="checkbox">
                            <span>${value}</span>
                        </li>`

    elInput.value = '';
    elInput.focus();
}

elAddBtn.addEventListener('click', (e) => {
    addTodo();
})


elInput.addEventListener('keyup', (e) => {
    if (e.key.toString().toUpperCase() == 'ENTER') {
        addTodo();
    }
})