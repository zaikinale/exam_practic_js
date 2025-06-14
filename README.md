<!-- # Утилита анализа CSV-файлов

## Описание
Это консольная утилита, которая анализирует CSV-файлы с данными о существах и выводит статистику.

## Установка

```bash
npm install

```bash
npm start __fixtures__/creatures1.csv


```bash
npm test -->
Конечно! Ниже — готовый файл `README.md`, который ты можешь использовать как официальное техническое задание и руководство к твоему экзаменационному проекту.

---

# 🧪 Экзаменационный проект: Консольная утилита анализа CSV

## 📌 Описание

Этот проект представляет собой **экзаменационное задание**, в котором тебе нужно реализовать консольную утилиту для анализа данных из CSV-файла. Утилита должна выводить 5 строк с определённой статистикой по данным о существах.

---

## 🧩 Задача

Написать функцию `analyze(data)`, которая принимает на вход строку — содержимое CSV-файла, и выводит в консоль следующие строки:

```
Count: 8
Castles: Город, Лес
Largest hp: вампир
Average damage: гоблин: 3, тролль: 4.5, эльф: 2.5, гном: 2, дракон: 20, орк: 3.5, ведьма: 7, вампир: 10
Strongest creature: вампир
```

Каждая строка содержит результаты вычисления одного шага (всего 5 шагов).

---

## 🔧 Формат CSV

Файл содержит следующие колонки:

| name      | level | castle     | min_damage | max_damage | hp  |
|-----------|-------|------------|------------|------------|-----|
| гоблин    | 1     | Лес        | 2          | 4          | 10  |

---

## 🛠️ Шаги реализации

### 1. Count
Посчитайте количество записей в таблице (не считая заголовка).

Пример:
```
Count: 8
```

### 2. Castles
Соберите уникальные названия замков, каждое должно начинаться с большой буквы, остальные буквы — строчные. Отсортируйте список по алфавиту.

Пример:
```
Castles: Город, Лес
```

### 3. Largest hp
Найдите имя существа с наибольшим значением HP.

Пример:
```
Largest hp: вампир
```

### 4. Average damage
Для каждого существа вычислите среднее значение между `min_damage` и `max_damage`. Если число целое — выводите как целое, если дробное — до .5.

Пример:
```
Average damage: гоблин: 3, тролль: 4.5, эльф: 2.5, ...
```

### 5. Strongest creature
Из всех существ уровня 7 определите то, которое быстрее уничтожит врага с 100 HP.

Формула:
- Атака = `(min_damage + max_damage) / 2`
- Ударов = `Math.ceil(100 / attack)`
- Чем меньше ударов — тем сильнее существо

> Всегда будет ровно два существа уровня 7.

Пример:
```
Strongest creature: вампир
```

---

## 📁 Структура проекта

```
exam-csv-analyzer/
├── bin/
│   └── analyze.js         # Точка входа (не менять)
├── __fixtures__/
│   ├── creatures1.csv     # Основной тестовый файл
│   └── creatures2.csv     # Дополнительный файл для проверки
├── index.js               # Место, где нужно написать код
├── __tests__/
│   └── analyze.test.js    # Юнит-тесты (Jest)
├── package.json
└── README.md              # Это описание
```

---

## 📋 Правила выполнения

1. ❌ **НЕЛЬЗЯ изменять уже написанный код**:
   - `bin/analyze.js`
   - Все файлы в `__fixtures__`
   - Тесты в `__tests__/analyze.test.js`

2. ✅ Можно использовать любые встроенные методы JavaScript, кроме не импортированных.

3. 💾 Выполняйте коммиты и пуши как можно чаще, чтобы видеть, какие тесты проходят, а какие нет.

4. 🧪 Не забывайте запускать утилиту и тесты вручную, чтобы проверить работу программы:
   ```bash
   npm start __fixtures__/creatures1.csv
   npm test
   ```

5. 📦 Все данные передаются в виде строки в функцию `analyze(data)`.

6. 🧹 Вывод должен содержать **ровно 5 строк**, в точном порядке:
   - `Count: ...`
   - `Castles: ...`
   - `Largest hp: ...`
   - `Average damage: ...`
   - `Strongest creature: ...`

---

## 🚀 Как запустить

1. Установите зависимости:
   ```bash
   npm install
   ```

2. Запустите утилиту:
   ```bash
   npm start __fixtures__/creatures1.csv
   ```

3. Запустите тесты:
   ```bash
   npm test
   ```

---

## ✅ Цель

Реализуйте все 5 шагов в функции `analyze(data)` так, чтобы все тесты прошли успешно и вывод соответствовал примерам.

Удачи на экзамене! 💪  
Если хочешь, я могу дать **похожее задание без решения**, чтобы ты мог протестировать себя самостоятельно. Хочешь?