# T4 – Integração Front-End com Back-End RESTful

## 1. Introdução

Este projeto corresponde à atividade 4 da avaliação do professor Gerson da Pinha Neto, e tem como objetivo integrar a interface gráfica de um sistema com um serviço de back-end RESTful, desenvolvido em Java. Essa atividade introduz a comunicação entre front-end e back-end, utilizando requisições HTTP e o formato JSON para trafegar dados, com foco na manipulação da entidade Cliente.

## 2. Funcionalidades

- Listar clientes cadastrados no back-end
- Cadastrar novos clientes
- Editar dados de clientes existentes
- Excluir clientes do sistema

Toda a comunicação entre a interface e o servidor é feita via requisições HTTP (GET, POST, PUT e DELETE) para o micro-serviço Java fornecido.

## 3. Tecnologias utilizadas

### Frontend

- **React 19.1.0** – Biblioteca para construção de interfaces.
- **React DOM 19.1.0** – Responsável por conectar os componentes React à DOM do navegador.
- **TypeScript 4.9.5** – Superset do JavaScript com tipagem estática.
- **React Scripts 5.0.1** – Scripts de build, teste e execução (via Create React App).
- **Web Vitals 2.1.4** – Biblioteca para coleta de métricas de desempenho.
- **Node.js 23.5.0** – Utilizado como ambiente para rodar e compilar o projeto React (via npm).


### Backend

- **Java 17 ou superior** – Necessário para executar o micro-serviço Java `pl.jar`, que oferece a API REST para gerenciamento de clientes.
- **Micro-serviço RESTful (fornecido)** – Disponibiliza os seguintes endpoints:

## 4. Estrutura do projeto

```
T4/
├── executavel/
│   └── pl.jar
├── frontend/
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src/
│   │   ├── paginas/
│   │   │   ├── cadastro.tsx
│   │   │   ├── edicao.tsx
│   │   │   ├── home.tsx
│   │   │   └── listagem.tsx
│   │   ├── servicos/
│   │   │   ├── buscarClientes.ts
│   │   │   ├── cadastrarCliente.ts
│   │   │   ├── editarCliente.ts
│   │   │   └── listagem.tsx
│   │   ├── App.css
│   │   ├── App.test.tsx
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── index.tsx
│   │   ├── logo.svg
│   │   ├── react-app-env.d.ts
│   │   ├── reportWebVitals.ts
│   │   └── setupTests.ts
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── tsconfig.json
├── pl/
│   ├── .mvn/wrapper/
│   │   ├── maven-wrapper.jar
│   │   └── maven-wrapper.properties
│   ├── src/
│   │   ├── main
│   │   │   ├── java/com/fatec/pl/
│   │   │   │   ├── atualizador/
│   │   │   │   │   ├── Atualizador.java
│   │   │   │   │   ├── AtualizadorCliente.java
│   │   │   │   │   └── AtualizadorEndereco.java
│   │   │   │   ├── comparador/
│   │   │   │   │   └── ComparadorTelefone.java
│   │   │   │   ├── controle/
│   │   │   │   │   └── ControleCliente.java
│   │   │   │   ├── hateoas/
│   │   │   │   │   ├── Hateoas.java
│   │   │   │   │   └── HateoasCliente.java
│   │   │   │   ├── modelo/
│   │   │   │   │   ├── Cliente.java
│   │   │   │   │   ├── Endereco.java
│   │   │   │   │   └── Telefone.java
│   │   │   │   ├── repositorio/
│   │   │   │   │   └── RepositorioCliente.java
│   │   │   │   ├── verificador/
│   │   │   │   │   ├── Verificador.java
│   │   │   │   │   ├── VerificadorEnderecoNulo.java
│   │   │   │   │   ├── VerificadorStringNula.java
│   │   │   │   │   └── VerificadorTelefoneNulo.java
│   │   │   │   └── PIApplication.java
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/java/com/fatec/pl
│   │       └── PlApplicationTests.java
│   ├── .gitignore
│   ├── mvnw
│   ├── mvnw.cmd
└── └── pom.xml

```

## 5. Instruções para execução
Siga os passos abaixo para executar o projeto localmente:

**1 -> Clone o repositório:**

```
git clone https://github.com/juliasoares17/T4
```

**ℹ️ Observação:**  Para rodar esta aplicação, você precisará de dois terminais em execução: Um para o backend e outro para o frontend.

**Em ambos os terminais:**

**2 ->  Acesse o repositório:**

```
cd T4
```

**No terminal para o backend:**

**3 -> Acesse a seguinte pasta:**
```
cd executavel
```

**4 -> Execute o arquivo pl.jar:**
```
java -jar pl.jar
```

A aplicação backend será iniciada em:
http://localhost:32831

**No terminal para o frontend:**

**5 -> Abra o diretório dedicado ao frontend:**
```
cd frontend
```

**6 -> Instale as dependências:**

```
npm install
```

ℹ️ **Observação:** Durante a instalação (`npm install`), alguns avisos de dependências desatualizadas podem aparecer. Isso não compromete a execução do projeto.

**7 -> Inicie a aplicação:**

```
npm start
```

Abra o navegador e acesse: http://localhost:3000

A interface gráfica estará disponível, já integrada ao micro-serviço de clientes.

Para encerrar o projeto, pressione CTRL + C no terminal e confirme digitando “s” se solicitado.

## 6. Considerações finais
Esta atividade teve como foco principal aplicar o conceito de integração entre front-end e back-end RESTful, utilizando um micro-serviço Java já disponível. Com isso, foi possível simular uma aplicação real de cadastro e gerenciamento de clientes com base em APIs e requisições HTTP. Além disso, reforçou-se a separação entre camadas da aplicação, o que me preparou para expandir o sistema de gestão pet com novas entidades e funcionalidades.