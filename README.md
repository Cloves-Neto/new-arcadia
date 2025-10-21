# New Arcadia - Arquitetura Web Moderna

Este projeto é uma aplicação web estática desenvolvida seguindo os padrões de arquitetura **ASTRA**, focando em modularidade, performance e boas práticas de desenvolvimento com HTML, CSS e JavaScript puros.

## 🚀 Começando

Para visualizar o projeto corretamente, é necessário servi-lo através de um servidor local. O sistema de componentes dinâmicos utiliza a API `fetch`, que não funciona corretamente ao abrir os arquivos diretamente no navegador (protocolo `file:///`).

1.  **Pré-requisito:** Ter Python instalado em sua máquina.
2.  **Inicie o servidor:** Na raiz do projeto, execute o seguinte comando:

    ```bash
    python -m http.server
    ```

3.  **Acesse o projeto:** Abra seu navegador e acesse [http://localhost:8000/src/pages/](http://localhost:8000/src/pages/).

---

## 🧱 Estrutura do Projeto

O projeto utiliza uma arquitetura organizada para separar responsabilidades e facilitar a manutenção.

```
new-arcadia/
├── src/
│   ├── components/
│   │   ├── header/
│   │   │   ├── header.html
│   │   │   └── header.css
│   │   └── footer/
│   │       ├── footer.html
│   │       └── footer.css
│   ├── pages/
│   │   ├── index.html
│   │   └── ... (outras páginas)
│   ├── scripts/
│   │   ├── componentLoader.js  (Lógica de carregamento de componentes)
│   │   └── ... (outros scripts)
│   └── styles/
│       ├── base.css
│       └── ... (outros estilos globais)
├── assets/
│   └── images/
│       └── ... (imagens e ícones)
└── README.md
```

-   **`src/`**: Contém todo o código-fonte da aplicação.
    -   **`components/`**: Módulos reutilizáveis (ex: cabeçalho, rodapé). Cada componente tem seu próprio HTML e CSS.
    -   **`pages/`**: As páginas principais do site.
    -   **`scripts/`**: Arquivos JavaScript globais e de funcionalidades específicas.
    -   **`styles/`**: Arquivos CSS globais, variáveis e estilos base.
-   **`assets/`**: Contém todos os recursos estáticos, como imagens, fontes e ícones.

---

## 🧩 Desenvolvimento Baseado em Componentes

O projeto carrega componentes reutilizáveis dinamicamente usando o script `src/scripts/componentLoader.js`.

### Como Criar um Novo Componente

1.  **Crie a Pasta:** Adicione uma nova pasta para seu componente em `src/components/`.
    ```
    src/components/meu-componente/
    ```
2.  **Crie os Arquivos:** Dentro da pasta, crie os arquivos `<nome>.html` e `<nome>.css`.
    -   `src/components/meu-componente/meu-componente.html`
    -   `src/components/meu-componente/meu-componente.css`
3.  **Adicione o Placeholder:** No arquivo de página (ex: `src/pages/index.html`), adicione um elemento "placeholder" onde o componente deve ser inserido. O `id` deve seguir o padrão `<nome>-placeholder`.
    ```html
    <div id="meu-componente-placeholder"></div>
    ```
4.  **Carregue o Componente:** No final do arquivo `src/scripts/componentLoader.js`, adicione a chamada para carregar seu novo componente.
    ```javascript
    document.addEventListener('DOMContentLoaded', () => {
        // ... outras chamadas
        loadComponent('meu-componente');
    });
    ```

O script se encarregará de injetar o HTML e carregar o CSS automaticamente.