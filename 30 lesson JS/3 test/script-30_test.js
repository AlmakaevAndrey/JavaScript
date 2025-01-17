// Создайте таблицу в HTML `(пример ниже)` с `data-*` атрибутами.
// В скрипте нужно:
// - получить элемент `table` в переменную по data- атрибуту;
// - получить все строки у `table` в переменную по data- атрибутам;
// - добавить стили `border` и `borderCollapse` таблице
// - пробежаться по всем строкам взять колонки (ячейки) по data- атрибутам;
// - пробежаться по всем ячейкам по data- атрибутам;
// - вытащить значения для ячеек из их же data- атрибутов и распарсить;
// - присвоить каждой ячейке контент `row-1; col-1;`, `row-1; col-2;` ... исходя из значения в `data-cell`
// в `data-cell` массив где первый элемент номер строки, а второй номер ячейки
// - добавить стили `border` и `padding` каждой ячейке

// P.S Вы можете потом добавлять сколько угодно много строк и столбцов в html в таблицу и все динамически
// должно отрабатывать и отрисовываться

const table = document.querySelector("[data-skills-table]");
const tableRows = table.querySelectorAll("[data-row]");

table.style.border = "1px solid black";
table.style.borderCollapse = "collapse";

tableRows.forEach(row => {
    const cell = row.querySelectorAll("[data-cell]");

    cell.forEach(cell => {
        cell.style.border ="1px solid black";
        cell.style.padding = "1em";
        const sellData = JSON.parse(cell.dataset.cell);

        cell.textContent = `row-${sellData[0]}; col-${sellData[1]};`;
    })
})