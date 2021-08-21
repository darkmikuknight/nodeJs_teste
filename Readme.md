# Teste Back End - NodeJS

## Objetivo

Fazer uma requisição da API de search da VTEX e, utilizando conceitos de processamento em fila, enviar um email (via Mailtrap ou qualquer outra plataforma de envio de emails de sua preferência) com a quantidade de produtos disponíveis na loja.

## Requisitos:

- Necessário utilizar uma biblioteca de processamento em fila
- Necessário enviar email
- Necessário utilizar a API de Search da VTEX
- Necessário mostrar a quantidade de produtos disponíveis na loja pelo email

## Loja

[https://vtexstore.codeby.com.br/](https://vtexstore.codeby.com.br/)


## API

[https://developers.vtex.com/vtex-rest-api/reference/search-3#productsearchfilteredandordered](https://developers.vtex.com/vtex-rest-api/reference/search-3#productsearchfilteredandordered)

## Como usar?

**Ex**: [https://vtexstore.codeby.com.br/api/catalog_system/pub/products/search](https://vtexstore.codeby.com.br/api/catalog_system/pub/products/search)

Enviar os headers também, da mesma forma que consta na documentação.


## --- --- --- ---

Ultilizado o Express, Mailtrap, Fastq (para processamento em fila)