# todos_react

Client react per a consumir els serveis de la API *todos_django*:

https://github.com/pygrn/todos_django

Projecte que forma part de la xerrada de **Python Girona** del dia 15 de Novembre de 2017.

[![todos_react in Travis](https://travis-ci.org/pygrn/todos_react.svg?branch=master)](https://travis-ci.org/pygrn/todos_react)

## Instal·lació

* Baixar repositori:

  ```git clone https://github.com/pygrn/todos_react.git```
* Entrar dins el projecte:

  ```cd todos_react```
* Instal·lar paquets necessaris:

  ```npm install```
* Arrancar projecte:

  ```npm start```

* Arrancar tests:

  ```npm test```

## Tags

S'han anat creant una sèrie de tags que van marcant el progress del desenvolupament. D'aquesta manera és fàcil anar a cada punt i
veure com ha evolucionat el codi d'un tag a l'altre. A continuació detalle què conté cada tag:

| Tag | Descripció |
|-----|------------|
| 0_inicial | És el projecte tot just acabat de crear amb *create-react-app*, sende cap modificació. |
| 1_materialize | Es restructuren les carpetes, deixan una per a components, una altre per a libs i una altre per a tests. També s'afegeix *materializecss* i es deixa un *h1* a la home. |
| 2_llistat | Aquesta ja és la primrea versió funcional, que mostra el llistat de todos obtenint-los d'un servei *REST*. També s'ha afegit un botó per actualitzar-lo. |

Per a canviar de tags, un cop tenim el projecte baixat i situats dins la carpeta:

```bash
git checkout 0_inicial
```