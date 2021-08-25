![LICENSE](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)
![Security Status](https://img.shields.io/security-headers?label=Security&url=https%3A%2F%2Fgithub.com&style=flat-square)
![Gluten Status](https://img.shields.io/badge/Gluten-Free-green.svg)
![Eco Status](https://img.shields.io/badge/ECO-Friendly-green.svg)

# Coming soon

_28 group project_

This project is for educational porpuses only. Pull request are welcome, but priority for my real-life students! Thank you for your cooperation!

## Project features

- repetitive content is generated/rendered
- NodeJS
- file system for data storage

## Project pages structure

LOGIN LOGIKA:

1. Gaunam užklausą su "header.cookie"
2. Išsiparsiname tuos cookies
2a. Turim cookies objektą
3. Pagal cookies esantį "login-token" išsiaiškiname:
3a. jei toks token .json failas neegzistuoja - vartotojas neprisijungęs
3b. jei failas egzistuoja, bet jame nėra expire reikšmės - vartotojas neprisijungęs
3c. gražiname vartotojo token objektą
4. iš vartotojo token objekto išsitraukiame "email"
5. perskaitome vartotojo .json failą:
5a. jei toks failas neegzistuoja - vartotojo neegzistuoja
5b. jei yra - perskaitom ten esantį objektą
6. visą info perduodame į "data" konstantą (kintamąjį)
7. data keliauja į tinkamą puslapio handler'į
8. handler'is perduoda dalį (data.user) info į header funkciją
9. header funkcija atitinkamai sugeneruoja savo turinį
9a. jei vartotojas neprisijungęs - logo + nav (home, about) + nav (login, regiter)
9a. jei vartotojas prisijungęs - logo + nav (home, about, services) + nav (user dashboard)

### Public pages

- home
- about
- 404
- login
- register
- logout

### Protected pages

- admin/services
- admin/add-service
- admin/edit-service
- admin/service-deleted

## Authors

