### Проблема потери значения в callback функции дочерних элементов

Имеются 2 компонента:\
[Component1](https://github.com/DmitryKRTV/react-state-problem/blob/master/src/components/Component1/Component1.tsx) -
Родительский компонент. Его задача сохранять и изменять значение value, а так же показывать и скрывать
Component2.\
[Component2](https://github.com/DmitryKRTV/react-state-problem/blob/master/src/components/Component2/Component2.tsx) -
Дочерний компонент. Должен закрываться вызывая `closeCallback` из props, который передаётся из
Component1.\
`closeCallback` - Закрывает Component2, а так же имеет ссылку на value в области видимости Component1.\

Способы отображения Component2:

1) Отображать Component2 с помощью сохранения его в state, и отображения state-значение в методе render в Component1;
2) Отображать Component2 в зависимости от флага, который сохраняется в state, а Component2 в методе render
   отображается в зависимости от флага;

При отображении способом 1, выполнив следующие действия описанные ниже, возникнет неявная проблема:

- Открыть Component2;
- Изменить state в Component1 (в нашем случае это изменение value в Component1);
- Закрыть Component2, используя `closeCallback`;

Описание проблемы:\
Значение value (ссылка на value в Component1), которое отображается в `closeCallback` **не будет** соответствовать
актуальному значению value в Component1. Это связано с тем, что при вызове render в Component1, Component2 не
пересоздаётся, так как он сохранён в state, соответственно и все ссылки на value в Component1 будут ссылаться на
значение value которое было актуально на состояние value при открытии Component2 и записи его в state.

Способ 2 решает проблему способа 1. При вызове метода render в Component1, Component2 будет перерисовываться и
соответственно обновлять `closeCallback`, поэтому значения value в методе `closeCallback` всегда будут актуальны.

*Данную проблему легко заметить, если обратить внимание на console.log Component1 и Component2* 