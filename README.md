# Portfólio de exemplo · Curso Desenvolvimento de sites

Este repositório guarda o **site de exemplo do projeto final** do curso *Desenvolvimento de sites* (aulas 7 e 8): o portfólio da **Marina Costa**, uma fotógrafa fictícia.

Ele é o mesmo código de referência das apostilas, todo junto e funcionando. Use para:

- **comparar** com o código que você ou a IA escreveram;
- **descobrir o que deu errado** quando alguma parte do seu site não funcionar;
- **seguir em frente** se o limite da IA acabar no meio da aula.

O site é feito só com **HTML, CSS e JavaScript puros**, sem frameworks e sem bibliotecas. Todos os arquivos têm comentários explicando cada parte.

---

## O que tem aqui

```
site-curso-dev-sites/
├── index.html   ← estrutura (HTML): o "esqueleto" do site
├── style.css    ← visual (CSS): cores, fontes, tamanhos e posições
├── script.js    ← comportamento (JavaScript): menu, formulário e ano do rodapé
├── README.md    ← este arquivo
└── img/
    ├── foto.jpg         ← foto do início (provisória)
    ├── trabalho-1.jpg   ← capas dos projetos (provisórias)
    ├── trabalho-2.jpg
    └── trabalho-3.jpg
```

As seções do site são: **topo**, **início**, **sobre**, **serviços**, **projetos**, **processo**, **contato** e **rodapé**.

---

## Como baixar (clonar) o repositório

**Clonar** é fazer uma cópia do repositório do GitHub no seu computador, com todo o histórico do Git.

### Opção 1 · Pelo terminal do VS Code (recomendado)

1. Abra o **VS Code**.
2. Abra o terminal: menu **Terminal → New Terminal** (ou `Ctrl` + `'`).
3. Vá até a pasta onde quer guardar o projeto. Por exemplo, a Área de Trabalho:

   ```bash
   cd Desktop
   ```

4. No GitHub, abra a página deste repositório, clique no botão verde **Code** e copie o endereço que aparece em **HTTPS**.
5. No terminal, digite `git clone` e cole o endereço:

   ```bash
   git clone https://github.com/USUARIO/site-curso-dev-sites.git
   ```

   > Troque o endereço acima pelo que você copiou no passo 4.

6. Abra a pasta que foi criada:

   ```bash
   code site-curso-dev-sites
   ```

   Ou, no VS Code, use **File → Open Folder** e escolha a pasta `site-curso-dev-sites`.

### Opção 2 · Sem usar o terminal

1. Na página do repositório no GitHub, clique no botão verde **Code**.
2. Clique em **Download ZIP**.
3. Descompacte o arquivo e abra a pasta no VS Code (**File → Open Folder**).

> Baixando o ZIP você recebe os arquivos, mas **sem** o Git. Para o projeto do curso, prefira a opção 1.

---

## Como ver o site funcionando

1. Com a pasta aberta no VS Code, clique com o botão direito no `index.html`.
2. Escolha **Open with Live Server**.
3. O site abre no navegador. A cada vez que você salvar um arquivo, a página atualiza sozinha.

Para ver a versão de celular: no Chrome, aperte `F12` e depois `Ctrl` + `Shift` + `M`.

---

## Quer usar como base para o seu portfólio?

Pode usar! Lembre de trocar:

- [ ] **Textos**: nome, frases, serviços, projetos e etapas (no `index.html`).
- [ ] **Imagens**: coloque as suas na pasta `img` com os **mesmos nomes** (`foto.jpg`, `trabalho-1.jpg`...), sem acentos, sem espaços e em minúsculas.
- [ ] **Cores e fontes**: mude as variáveis no começo do `style.css` (bloco `:root`).
- [ ] **WhatsApp**: troque o número `5511999999999` em **dois lugares**: na constante `meuWhatsApp` do `script.js` e no link do contato no `index.html`.
- [ ] **Inicial do logo** (`M`) e o **nome** no topo e no rodapé.
- [ ] **Head**: título, `description`, favicon e as linhas `og:`.

> ⚠️ Se este repositório for público, não coloque nele nada que você não queira que outras pessoas leiam, como telefone pessoal ou endereço.

---

## Deu algum problema?

| O que aconteceu | O que conferir |
| --- | --- |
| A página aparece sem estilo | O `style.css` está na mesma pasta do `index.html` e com esse nome exato? |
| Uma imagem não aparece | O nome do arquivo e a extensão (`.jpg` ou `.jpeg`?) batem letra por letra com o `src`? |
| O botão ☰ não abre o menu | O `script.js` está ligado no final do `body`? Veja erros em vermelho no `F12` → aba **Console**. |
| O link do menu não acompanha a seção | O `id` da seção e o `href` do link são iguais, sem acento? |
| `git` não é reconhecido no terminal | O Git não está instalado. Baixe em [git-scm.com](https://git-scm.com) e reabra o VS Code. |

---

*Lima & Magalhães · Escola de Criatividade · Mogi das Cruzes (SP) · Material do curso Desenvolvimento de sites*
