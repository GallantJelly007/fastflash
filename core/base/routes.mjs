const dynamicRoutes = new Map([
    [/^\/index$/, 'post/get:ExampleController/view'],
    [/^\/main$/, 'post/get:ExampleController/view'],
    [/^\/$/, 'post/get:ExampleController/view'],
])

const staticRoutes = new Map([
    [/^\/public\//, 'public/'],
    [/^\/jaxfis\//,'../node_modules/jaxfis/']
])

export {dynamicRoutes,staticRoutes}

/*
Коллекция роутов обрабатывается приложением автоматически,
- Ключ является RegExp выражением которое сопоставляется с запрашиваемым url
- Значение состоит из двух частей, в первой перечисляются методы доступа через слеш напр. post/get/use,
  далее через двоеточие записана пара состоящая из названия контроллера в нижнем регистре и названия метода который будет вызван в контроллере
  при этом в котроллере метод полностью должен повторять наименование из коллекции роутов,
  То есть путь exampleController/view, будет искать файл exampleController.js и метод view в нем

Для разных условий работы и разного типа протоколов возможно использовать несколько коллекций роутов
*/ 