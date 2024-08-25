// Генераторы
// [[Prototype]]
// Символ итераторы
// super в классе, расширение класса

///////////////////////////////////////////////////////
//                  Документ, DOM                   //
/////////////////////////////////////////////////////
// DOM - Document Object Model - объектная модель документа, которая представляет все содержимое страницы в виде ОБ, которые можно менять.
// ОБ document - основная "входная точка". С его помощью мы можем что-то создавать или менять на странице.
document.body.style.background = 'red' ///  '#a0d435'
setTimeout(() => document.body.style.background = '', 2000)

$0.style.background = 'midnightblue' - изменение фона эл-та

// BOM - Browser Object Model - объектная модель браузера - это доп. ОБ, предоставлемая браузером (окружением):
// 1. ОБ navigator - инфо о самом браузере и ОС.
navigator.userAgent // информация о тек. браузере
navigator.platform  // информация о платформе
// 2. ОБ location - позволяет получить текущий URL и перенаправить браузер по новому адресу
location.href

// Всё, что есть в HTML, даже комментарии, является частью DOM.
// Теги являются узлами-элементами и образуют структуру дерева тегов.
// В мире DOM null означает "не существует".
// Дети (дочерние узлы) DOM. Коллекция childNodes - содержит список всех "детей", включая текстовые узлы. Св-ва firstChild и lastChild дают бытрый доступ к 1-му и последнему дочернему эл-ту.
for (let node of document.body.childNodes) {
  console.log(node)
}

// Поиск эл-та 
// 1. document.getElementById(id) - если у эл-та есть атрибут id, то мы можеи этот эл-т получить
let elem = document.getElementById('elem')
// Примечание: id всегда должно быть уникальным

// 2. elem.querySelectorAll(css) - универсальный метод поиска, возвращает все эл-ты внутри elem, которые удовлетворяют требованию данного css-селектора.
// Т.е., можно выполнить поиск как по имени тега, так и по всем другим атрибутам (класс, id, имя, псевдоклас и т.д.)
let elems = document.querySelectorAll('div')
let elems = document.querySelectorAll('.class-name')
let elems = document.querySelectorAll('#id')
let elems = document.querySelectorAll(':hover')
let elems = document.querySelectorAll('input[name="somename"]')
let elems = document.querySelectorAll('ul > li:last-child')     // получить все эл-ты <li>, которые явлются последними потомками <ul>

// 3. elem.querySelector(css) - универсальный метод поиска, возвращает 1-й эл-т внутри elem, которыq удовлетворяет требованию данного css-селектора.
// Т.е., можно выполнить поиск как по имени тега, так и по всем другим атрибутам (класс, id, имя, псевдоклас и т.д.)
let elem = document.querySelector('div')
let elem = document.querySelector('.class-name')
let elem = document.querySelector('#id')
let elem = document.querySelector(':hover')
let elem = document.querySelector('input[name="somename"]')
let elem = document.querySelector('ul > li:last-child')     // получить 1 эл-т <li>, которые явлются последними потомками <ul>

// 4. elem.matches(css) - ничего не ищет, а проверяет, удовлетворяет ли elem требованию данного css-селектора. Возвращает true/false - удобен для проверок

// 5. elem.clothest(css) - ищет ближайшего предка (родителя, родителя родителей и т.д.), которые  соответсвуют css-селектору.
// Сам эл-т elem также включается в поиск. 

// 6. Самый важный пункт: elem.getElementsBy*/document.getElementsBy*
//    6.1 elem.getElementsByTagName(tag)         - ищет эл-ты с данным тегом и возвращает их коллекцию. Передав "*", можно получить всех потомков
//    6.2 elem.getElementsByClassName(className) - возвращает эл-ты, кот. имеют данный css-класс.
//    6.3 elem.getElementsByName(name)           - возвращает эл-ты с заданным атрибутом name. Исп-ся очень редко, т.к. сам атрибут name редко ставится.

// Каждый DOM-узел принадлежит соотв. встроенному классу.
// Корнем иерархии явл-ся EventTarget (цель), от него наследуется Node (узел)

// EventTarget -> Node -> Document -> HTMLDocument(весь документ в целом)
// EventTarget -> Node -> CharacterData -> Text ("какой-то текст в документе")
// EventTarget -> Node -> CharacterData -> Comment (<!-- коммент  -->)
// EventTarget -> Node -> Element (<div>...</div>) -> HTMLElement -> HTMLInputElement(<input type="..."/>) 
// EventTarget -> Node -> Element (<div>...</div>) -> HTMLElement -> HTMLBodyElement(<body> ... </body>)
// EventTarget -> Node -> Element (<div>...</div>) -> HTMLElement -> HTMLAnchorElement(<a href="..."></a>)
// 1. EventTarget - корневой "абстрактный" класс для всего. ОБ этого класса никогда не создаются. 
// Служит основой, блогодаря которой все DOM-узлы поддtрживают т.н. "события".
// 2. Node        - также явл-ся "абстрактным" классом, обеспечивающим базовую функциональность: parentNode, nextSibling, childNodes и т.д. 
// ОБ этого класса никогда не создаются.
// 3. Document    - по историческим причинам часто наследуется HTMLDocument (последняя спецификация не навязывает) - это док в целом. 
// Глобальный ОБ document принадлежит именно этому классу. Служит точкой входа в DOM.
// 4. CharacterData - "абстрактный" класс.
//    4.1 Text      - класс, соответствующий тексту внутри эл-в, т.е., "какой-то текст" в <p>какой-то текст</p> 
//    4.2 Comment   - класс для комментариев. Не отображается, но явл-ся DOM-элементом.
// 5. Element       - базовый клвсс для DOM-узлов. Обеспечивает навигацию на ур-не эл-тов: nextElementSibling, children. 
// Обеспечивает методы поиска эл-тов: querySelector, ...
// Явл-ся основой для более специфичных классов: SVGElement (поддержка SVG - чертежных/линейных рисунков), XmlElement (поддержка xml)
// 6. HTMLElement   - явл-ся базовым классом для всех остальных HTML-элементов
//    6.1 HTMLInputElement  - класс для тега input
//    6.2 HTMLBodyElement   - класс для тега body
//    6.3 HTMLAnchorElement - класс для тега a
//    6.4 и т.д. ...

// Пример. Рассмотрим DOM-ОБ для тега <input> :
// 1. HTMLInputElement – этот класс предоставляет специфичные для элементов формы свойства,
// 2. HTMLElement – предоставляет общие для HTML-элементов методы (и геттеры/сеттеры),
// 3. Element – предоставляет типовые методы элемента,
// 4. Node – предоставляет общие свойства DOM-узлов,
// 5. EventTarget – обеспечивает поддержку событий (поговорим о них дальше),
// 6. …и, наконец, он наследует от Object, поэтому доступны также методы «обычного объекта», такие как hasOwnProperty.
console.dir(elem) // выводит эл-т в виде DOM-ОБ
console.log(elem) // выводит эл-т в виде DOM-дерева

elem.nodeType   // старомодный способ узнать тип DOM-узла
elem.nodeName   // имя тега; для эл-тов равно tagName, для остальных - тип узла
elem.tagName    // имя тега; есть только у эл-тов
elem.innerHTML  // получить HTML-содержимое эл-та в виде строки. Можем изменять.
elem.innerHTML += '<div> text </div>' // происходит ПЕРЕЗАПИСЬ содержимого эл-та
elem.outerHTML  //HTMLElement целиком (innerHTML + сам эл-т)
// В отличие от innerHTML запись в outerHTML не изменяет эл-т. Вместо этого эл-т заменяется целиком во внешнем контексте.
// (Вместо существующего тега создается новый html эл-т на его месте)

// Атрибуты и DOM-свойства
// 1. hidden - убирает эл-т; работает как style="display:none" (уничтожает эл-т, его не существует)
// 2. value  - значение для <input>, <select>, <textarea>
// 3. href   - адрес для тега <a>
// 4. id     - идентификатор д/эл-та
// 5. name   - имя эл-та
// 6. class / className - присвоение определенных css-классов эл-ту
// 7. type   - тип эл-та; чаще всего задается для <input>
// 8. alt    - отображает текст в случае непрогрузки картинки в теге <img>
// 9. src    - source - источник побитовых данных, н-р, любой файл, для <img>
// 10. style - внедрение стилей напрямую, НЕ приветствуется! Имеет высший приоритет.
// 11. и т.д.

elem.hasAttribute(name) // проверет наличие атрибута
elem.getAttribute(name) // получает значение атрибута
elem.setAttribute(name, value) // устанавливает значения атрибута
elem.removeAttribute(name)     // удаляет атрибут
elem.attributes         // коллекция атрибутов

document.createElement("div") // создает новый эл-т с заданным тегом
document.createTextNode(text) // создает новый текстовый узел с заданным текстом
node.append(nodes or string)  // добавляет узлы/строки в конец node
node.prepend(nodes or string) // вставляет узлы/строки в начале node
node.before(nodes or string)  // вставляет узлы/строки до node
node.after(nodes or string)   // вставляет узлы/строки после node
node.replaceWith(nodes or string) // заменяет node заданными узлами/строками

<ol id="ol">
  <li>0</li>
  <li>1</li>
  <li>2</li>
</ol>
<script>
  ol.before('before')
  ol.after('after')
  let liFirst = document.createElement('li')
  liFirst.innerHTML = 'prepend'
  ol.prepend(liFirst)
  let liLast = document.createElement('li')
  liLast.innerHTML = 'append'
  ol.append(liLast)
</script>
// before
//   1. prepend
//   2. 0
//   3. 1
//   4. 2
//   5. append
// after 
elem.insertAdjacentHTML(where, html) // вставляет html со всеми тегами и атрибутами
// where: 
// 1. "beforebegin" - вставляет html непосредственно перед elem
// 2. "afterbegin"  - вставляет html в начало elem
// 3. "beforeend"   - вставляет html в конец elem 
// 4. "afterend"    - вставляет html непосредственно после elem
elem.insertAdjacentText(where, text)    // вставляет text
elem.insertAdjacentElement(where, elem) // вставляет elemen

node.remove()           // удаляет узел
// все методы вставки автоматчески удаляют узлы со старых мест
elem.cloneNode(boolean) // если true, то создает "глубокий" клон эл-та - со всеми 
// атрибутами и дочерними эл-тами; иначе - клонирует эл-т без дочерних
document.write(html)    // устар., записывает html на страницу прямо здесь и сейчас;
// ограничение - работает только во время загрузки страницы

// JS может менять и классы, и св-ва style
// !!! КЛАССЫ - ВСЕГДА ПРЕДПОЧТИТЕЛЬНЫЙ ВАРИАНТ В СРАВНЕНИИ СО style.
// Мы можем манипулировать св-вом style только если классов не достаточно.
elem.style                        // ОБ - набор всех возможных стилей
elem.style.background = '#327b8h' // меняет фон эл-та
elem.style.background = ''        // сбрасывет фон эл-та
elem.style.cssText += `            
top: ${(17*2)**(1/2)};
color: #${Math.floor(Math.random() * 9) + 1}364ab` // дополняет css текст стилей
elem.className = 'class-1 class-2 class-3' // меняет класс в эл-те
elem.classList.add('class')      // добавляет класс к эл-ту
elem.classList.remove('class')   // удавляет класс
elem.classList.toggle('class')   // добавляет класс если его нет, иначе - удаляет
elem.classList.contains('class') // проверяет наличие класса - true/false
elem.classList                   // содержит перебираемый массив классов





// event, emitter, window.event, element.eventwindow.onerror
// Fetch
