export const GREETING_TEXT =
  '👋 О, привет\\! ' +
  '\nЯ помогу посчитать счет в баре, что бы не приходилось высчитывать с калькулятором свои позиции из общего чека\\. \n' +
  '\n Главное \\- записывать в меня все, что заказывается, а расчеты я возьму на себя 👌' +
  '\n\n👉 Я умею работать как в однопользовательском, так и в многопользовательском режимах\\.' +
  '\n\n👤 Для работы в однопользовательском режиме просто продолжай общаться со мной напрямую' +
  '\n\n👥 Для работы в многопользовательском режиме нужно создать отдельный чат и добавить в него меня и друзей, с которыми ты собираешься разделить счет\\.' +
  '\n⚠️ Отдельный чат необходим, так как каждое сообщение я воспринимаю как попытку добавить позицию в счет\\. Если добавить меня в чат, в котором вы общаетесь \\- я буду мешать\\.' +
  '\n\n\n1️⃣2️⃣3️⃣ *Порядок действий:*' +
  '\n\n📔 Создать счет командой /new ' +
  '\n\n☕️ Писать в чат позиции, которые нужно добавить в счет: одна позиция \\- одно сообщение\\.' +
  '\nНапример: `Кофе 200` или `Кофе 200\\.20` или `Кофе 200,40`' +
  '\nЯ разберу каждую и добавлю ее в счет\\.' +
  '\n 😏 В многопользовательском режиме я запоминаю, кто сколько должен и вывожу эту информацию при расчетах\\. ' +
  '\n⚠️ Минус перед стоимостью вычтет сумму из счета\\. Так можно убрать из него случайно добавленную позицию\\.' +
  '\nНапример: `Кофе \\(не принесли\\) \\-200`' +
  '\n\n🗒 Вывести информацию о счете: /pre\\_bill ' +
  '\n\n🏁 Когда пришло время расплачиваться \\- вывести информацию о счете и закрыть его: /bill' +
  '\n\n\n☺️ Надеюсь, что буду полезен\\. Но помни: я работаю в пилотном режиме, поэтому что\\-то может пойти не так\\. В случае ошибок или пожеланий по новому функционалу ты можешь написать моему создателю: его контакты указаны в моем описании\\.';

export const NEW_BILL_TEXT = '✍️ Счет открыт';

export const NEW_BILL_ERROR =
  '😅 Счет уже открыт. Для создания нового, сначала нужно его закрыть командой /bill';

export const BILL_NOT_OPENED_ERROR = '❗️ Ошибка: счет не создан.';

export const BILL_CLOSED = '🏁 Счет закрыт. Отправляемся в следующее место?';

export const ADD_POSITION_ERROR =
  '🤌 Для того, что бы добавить в счет позицию - его нужно создать. Воспользуйся командой /new';

export const INCORRECT_POSITION_FORMAT =
  '👀 Некорректный формат\\. \n Нужно вот так: \n `Кофе 200` \n `Кофе 200\\.20` \n `Кофе 200,40`';
