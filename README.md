# Spis treści

1. [Otwarcie projektu](#otwarcie-projektu)
2. [Zmiana obsługi maila na własny](#zmiana-obsługi-maila-na-własny)
3. [Zmiana treści strony](#zmiana-treści-strony)
4. [Dodawanie postów do bloga](#dodawanie-postów-do-bloga)
5. [Dodawanie showcases](#dodawanie-showcases)
6. [Strona na Githubie](#strona-na-githubie)

## Otwarcie projektu

Aby otworzyć projekt, należy mieć zainstalowany Node.js w wersji LTS [tutaj](https://nodejs.org/en).
Sklonuj repozytorium.
W folderze z repozytorium wykonaj z terminala polecenie `npm install`, które zainstaluje wszystkie potrzebne pakiety.
Po udanej instalacji można uruchomić serwer lokalny, dzięki któremu będzie można na bieżąco sprawdzać zmiany poleceniem `npm start`.
Każda zmiana w kodzie będzie na bieżąco widoczna na stronie lokalnej.

## Zmiana obsługi maila na własny

- Załóż konto na [emailjs.com](https://www.emailjs.com/).
- Dodaj nową usługę -> Gmail.
- ![image](https://github.com/KamilMarshal/docwire/assets/108593228/04d0a06a-e65d-4be0-9555-f8aab334703f)

- Dodaj szablon e-maila:

Przykładowo:
```
Subject: {{name}} send us a message via the contact form on our website!
Content:
Hello DocWire Support,
You got a new message from {{name}}
Reason: {{Reason}}
Email: {{email}}
Message:
"{{message}}"

Reply as soon as possible.
```
`To email`: wasz mail (docwire)

![image](https://github.com/KamilMarshal/docwire/assets/108593228/ebc3e8bc-b054-48e3-9ef2-313f7fe1fc2b)

Teraz w kodzie należy zaktualizować 3 klucze:
- Klucz Service ID
 ![image](https://github.com/KamilMarshal/docwire/assets/108593228/71e140f0-94db-4004-9b8f-bcc28581514c)

- Klucz Template ID  
![image](https://github.com/KamilMarshal/docwire/assets/108593228/1dd6dc3b-2a70-4178-97a3-29352ebcc5ce)

- Oraz Public Api Key  
![image](https://github.com/KamilMarshal/docwire/assets/108593228/8d1c720d-ed64-4013-9fd2-5a7f7f7c85f0)

Wstawiamy do funkcji `handleOnSubmit` (linia 21) w pliku `src/containers/components/contactUs/Form.jsx`.

## Zmiana treści strony

Najłatwiejszym sposobem znalezienia odpowiedniej sekcji, aby zmienić tekst, będzie przejście do `src/App.js` i nawigacja w głąb po elementach strony.
Przykładowo, aby dostać się do sekcji "Tech suport" na głównej stronie:

![image](https://github.com/KamilMarshal/docwire/assets/108593228/e54231ae-524f-4f48-85ee-054167942fe8)

1. Zaczynamy z `App.js`.

![image](https://github.com/KamilMarshal/docwire/assets/108593228/6ae0034c-3366-4882-a500-692949bb443f)

4. Przechodzimy do `Home` przez `Ctrl` + `LMouse`

![image](https://github.com/KamilMarshal/docwire/assets/108593228/da877872-42e2-4894-993d-d8e4a5462c86)

5. Teraz wystarczy znaleźć tekst i go podmienić na nowy.

![image](https://github.com/KamilMarshal/docwire/assets/108593228/238c45ba-e6cb-4dde-a538-241cb39ed81e)

Po zapisaniu zmiany są widoczne na serwerze lokalnym.

## Dodawanie postów do bloga

W folderze `src/pages` są 4 przykładowe posty. Każdy post jest napisany w Markdown.

![image](https://github.com/KamilMarshal/docwire/assets/108593228/f866f266-b772-454b-8f46-8ae330a858ea)


```markdown
---
title: Introduction to the 4th Industrial Revolution    // tytuł postu
author: Ferid Obeidat                                   // imię i nazwisko Autora
authorImage: Ferid-headshot.png                         // nazwa pliku z miniaturą autora
preview: preview.jpg                                    // nazwa pliku z grafiką postu
date: March 22, 2023                                    // data wstawienia postu
introduction: "..."                                     // krótki opis postu znajdujący się wyłącznie na liście postów
---
```

Pliki z `authorImage` i `preview` muszą być wstawione do `src/assets`, skąd są automatycznie pobierane. Data musi być w dokładnie powyższym formacie po angielsku. Według niej są porządkowane posty w kolejności od najnowszego do najstarszego.

Po dodaniu posta, w celu pokazania go na stronie, należy w terminalu wykonać polecenie 
```bash
npm run server
```
Nadaje ono id każdemu postowi wg czasu dodania, oraz konwertuje na json, który już automatycznie jest wrzucany na stronę. Każdy post jest już generowany dynamicznie, więc nie ma potrzeby dodawania osobnej strony.

**WAŻNE**: zdarza się, że po wykonaniu polecenia `npm run server` nie wszystkie posty zostają przez ten skrypt przeanalizowane i nie wszystkie znajdują się w pliku `src/posts.json`. Dlatego też proszę każdorazowo sprawdzić, czy wszystkie posty zostały dodane i widnieją w pliku `src/posts.json`. **W przypadku, gdy jakiegoś brakuje, należy wywołać skrypt jeszcze raz.**

## Dodawanie showcases

System dodawania showcases opiera się na pliku `src/pages/Showcases/data.js`. Znajduje się w nim tablica z przykładowymi użyciami.

`"id": ,` // Należy dodać kolejne id

`"linkName": "",` // Pod tą nazwą będzie ukryty dynamicznie generowany link, np.:

![image](https://github.com/KamilMarshal/docwire/assets/108593228/847a8514-7252-4676-a0f8-391021191178)


`"image": '',`  Nazwa pliku znajdującego się w src/assets

`"companyName": "",`  Nazwa firmy

`"showcasesShortInfo": "",`  Krótki opis na stronie zbiorczej, np.:

![image](https://github.com/KamilMarshal/docwire/assets/108593228/20f850c8-87f3-4c4e-bb37-ea1aeb73d0a1)

`"subtitle": "",`  Fraza pod nazwą firmy

![image](https://github.com/KamilMarshal/docwire/assets/108593228/ce6596e5-4289-4778-b00a-3b75479820ea)

`"website": "",`  Pełny link do strony zewnętrznej zlinkowany pod przyciskiem "Website"

![image](https://github.com/KamilMarshal/docwire/assets/108593228/4c926b27-5a61-482e-b88f-d016b1b9a70d)

`"whoWeAre": "",`  Tekst po lewej stronie pod logiem

![image](https://github.com/KamilMarshal/docwire/assets/108593228/cfc49f77-7fc6-432b-9f3a-26320772de9f)

`"whatIs": "",`

![image](https://github.com/KamilMarshal/docwire/assets/108593228/2dc18780-4e4c-489f-b44d-547592f0dc9b)

`"WhyWereDocwireApproached": "",`

![image](https://github.com/KamilMarshal/docwire/assets/108593228/e6b7f137-d60a-4a72-9f41-70e071481eae)

`"WhatDidWeDo": "",`

![image](https://github.com/KamilMarshal/docwire/assets/108593228/c7cbcfed-0df2-4b17-80e3-fc623571d1a7)

`"WhatWereTheResults": ""`

![image](https://github.com/KamilMarshal/docwire/assets/108593228/d6e02d53-fb94-4606-a89c-91e0ec541ad9)

}

Po dodaniu wpisu należy plik zapisać i od razu widoczny jest nowy wpis.

## Strona na Githubie

Instrukcja dotycząca hostowania strony na GitHub Pages znajduje się [tutaj](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

Każde zmiany należy najpierw skomitować i wypchnąć na repozytorium, a następnie wykonać polecenie:

```bash
npm run deploy
```
