# Automação de testes de acessibilidade no projeto **{{ project_test_name }}**

## Importante

- Leia a [documentação oficial do Cypress](https://docs.cypress.io/guides/overview/why-cypress).

- Para execução deste projeto é necessário ter o [Cypress instalado na máquina](https://confluence-itau.tecnologia.prod.ops.aws.cloud.ihf/pages/viewpage.action?pageId=556849486).

## Executação do projeto

1) Assim que baixar o projeto, acesse via terminal o diretório raiz do projeto `{{ project_test_name }}` e execute o comando:

```bash
npm install
```

2) Após a instalação das dependências, execute um dos comando no mesmo diretório do item 1 para executar os testes com o modelo proposto:

```bash
npm run cy-open-ch
```

Caso queira executar em outros navegadores, altere as letras `ch` do comando acima pela opção desejada abaixo (necessário tê-los instalados na máquina):

- `ch` para o navegador chrome
- `ed` para o navegador edge
- `fi` para o navegador firefox
- `el` para o noavegador electron

## Tecnologias utilizadas neste framework

- Framework Cypress
- Extensão cypress-axe
- Extensão axe-core
