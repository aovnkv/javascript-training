//import './styles.css';
// import data from "./data";

const getNextArr = curItemText => {
  const MAX_DEPTH = 3;
  const curDepth = curItemText.split('.').length;

  if (curDepth >= MAX_DEPTH) {
    return null;
  }

  const nextArr = [];

  for (let i = 0; i < 10; i++) {
    const nextItemText = `${curItemText}.${i + 1}`;

    nextArr.push({
      text: nextItemText,
      click: 0,
      next: getNextArr(nextItemText)
    });
  }

  return nextArr;
};

const createBackButton = (prevList, curList) => {
  const backButton = document.createElement('li');
  backButton.textContent = '<- Back';

  backButton.onclick = () => {
    curList.replaceWith(prevList);
  };

  return backButton;
};

const createList = dataArr => {
  const curList = document.createElement('ul');

  dataArr.forEach(item => {
    const listItem = document.createElement('li');

    // Текст при создании элемента
    listItem.textContent = `[(${item.click}) ${item.text} ->]`;

    if (item.next) {
      listItem.onclick = () => {
        item.click++;
        // Меняем текст на кликнутом элементе
        listItem.textContent = `[(${item.click}) ${item.text} ->]`;

        const nextList = createList(item.next);
        // Добавляем в новый список кнопку "Назад", которая при клике
        // на неё сможет отобразить старый список
        const backButton = createBackButton(curList, nextList);

        nextList.prepend(backButton);

        // Рисуем новый список вместо текущего
        curList.replaceWith(nextList);
      };
    }

    curList.append(listItem);
  });

  return curList;
};

// Генерим данные
const data = [];

for (let i = 0; i < 10; i++) {
  data.push({
    text: `${i + 1}`,
    click: 0,
    next: getNextArr(`${i + 1}`)
  });
}

// Рисуем список
const list = createList(data);
document.body.append(list);
