Почему для работы с input не рекомендуется использовать события клавиатуры?

Одних клавиатурных событий недостаточно, т.к. мы можем вставить значения используя клавиши мыши (Копировать/Вставить) либо распознователь речь.
А событие input наверняка отслеживает изменения в поле, поэтому рекумендуется использовать именно его.