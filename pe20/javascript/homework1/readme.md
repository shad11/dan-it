1. Обьяснить своими словами разницу между обьявлением переменных через var, let и const.

var и let исапользуются для обьявления переменных, которые могут менять свои значения.
const используется для обьявления констант. Значение переменных изменить нельзя.

Обьявление переменной с помощью var - устаревший способ, лучше не использовать.
Особенности let по сравнению с var:
- Нельзя переинициализировть (заново обьявить переменую с таким же именем);
- Переменная видна только после обьявления в отличие от var (при обращении к переменной до ее обьявления будет ошибка)
- Область видимости переменной, обьявленной с помощью let, в рамках блока { }. Если обратиться к неглобальной переменной за блоком будет ошибка. Если в рамках разных блоков переменные, обьявленые через let, имеют одно и то же имя - это разные переменные

2. Почему объявлять переменную через var считается плохим тоном?

- Для таких переменных не существует области видимости, видна везде
- Видна в скрипте до своего обьявления (значение undefined), в строгом режиме будет ошибка
- Можно переинициализировать (еще раз обьявить)