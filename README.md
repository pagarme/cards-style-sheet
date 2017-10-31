<p align="center">
	<img src="card-flip.gif" width="300">
</p>

# 💳 Card Style Sheet

Uma lista de cartões feitos completamente em CSS.

### Navegação
- [Instalação](#instalacao)
- [Estrutura](#esturtura)
- [Contribuindo](#contribuindo)

## Instalação
Nosso projeto é completamente feito em CSS, sem uso de pre-processadores ou javascript.

Porém, usamos webpack para compactar todo nosso CSS e criar um bundle, e as respectivas versões em React, Angular e Vue *(WIP)*

1. Clone o projeto
```
git clone https://github.com/pagarme/cards-style-sheet.git
```
2. Instale as dependências
```
npm install
```
3. Rode a versão de desenvolvimento
```
npm run dev
```
4. Acesse o servidor local
```
http://localhost:8000
```

## Estrutura
A estrutura dos arquivos é bem simples, por se tratar apenas de HTML e CSS.

```
./assets
 | logos
./cards
 | emissor
```

Dentro de `./assets` teremos todos as imagens (geralmente logos) necessárias pros cartões.

Já dentro de `./cards` separamos por emissores. Assim todos os arquivos necessários para aquele emissor (style e html para testes) se concentra em um único lugar.


## Contribuindo
Issues e PRs são muito bem vindos.
Antes de enviar seu cartão tenha certeza que ele já não tenha sido criado por outro contribuidor. Você pode ver a lista de cartões em [aqui](./cards)

Caso queira enviar seu cartão, mantenha a seguinte estrutura HTML:
```html
<div class="card {classe-do-emissor}">
    <figure class="card__figure">
        <img src="../../assets/logos/logo-do-emissor.png" class="card__figure--logo"></img>
    </figure>
    <div class="card__reader">
        <div class="card__reader--risk card__reader--risk-one"></div>
        <div class="card__reader--risk card__reader--risk-two"></div>
        <div class="card__reader--risk card__reader--risk-three"></div>
        <div class="card__reader--risk card__reader--risk-four"></div>
    </div>
    <p class="card__number">4111 1111 1111 1111</p>
    <div class="card__dates">
        <span class="card__dates--expiration">09/19</span>
    </div>
    <p class="card__name">FULANO DE TAL<p>
    <div class="card__flag">
        <div class="card__flag--globe"></div>
        <div class="card__flag--red"></div>
        <div class="card__flag--yellow"></div>
    </div>
</div>
```