# Получаем и выводим весь список контактов в виде таблицы (console.table)
node index.js --action list
[https://monosnap.com/file/FNEjeYjJDTU6kUz5mD98jkEVNLWcXd]:Screenshot.jpg

# Получаем контакт по id
node index.js --action get --id 05olLMgyVQdWRwgKfg5J6
[https://monosnap.com/file/Cj7ojWiBKLf2rpcp9idE4uB5Jue93y]:Screenshot.jpg
# Добавялем контакт
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
[https://monosnap.com/file/1IYX8gZEX85vTerbJgXqpJ6z9clacb]:Screenshot.jpg
# Удаляем контакт
node index.js --action remove --id qdggE76Jtbfd9eWJHrssH
[https://monosnap.com/file/DfHsZQQ8noWQwB3mWHBAI8Wl58tqF0]:Screenshot.jpg