# Imersão Dev Back-End - Alura 🌐

Este repositório contém o projeto desenvolvido durante a **Imersão Dev Back-End** da [Alura](https://www.alura.com.br/), realizada em parceria com o **Google Gemini**. O curso teve como objetivo ensinar os fundamentos do desenvolvimento back-end, abordando desde a criação de APIs até a publicação de um projeto na **Google Cloud**. 🚀

---

## 🛠️ **Tecnologias Utilizadas**
- **Node.js**: Plataforma para desenvolvimento back-end.
- **Express**: Framework minimalista para criação de APIs.
- **MongoDB**: Banco de dados NoSQL.
- **Multer**: Biblioteca para manipulação de uploads de arquivos.
- **Google Gemini API**: Serviço utilizado para gerar descrições automáticas a partir de imagens.
- **Google Cloud Run**: Plataforma para deploy de aplicações em containers.

---

## 📚 **Conteúdo do Curso**

### **Aula 1**: Fundamentos do Back-End
- Introdução ao Node.js e Express.
- Estruturação de um servidor básico.
- Criação das primeiras rotas.

### **Aula 2**: Banco de Dados
- Conexão com o banco de dados MongoDB.
- Criação de modelos e manipulação de dados.

### **Aula 3**: Upload de Imagens
- Configuração do Multer para receber arquivos.
- Estruturação de diretórios para armazenamento.

### **Aula 4**: Integração com o Google Gemini
- Utilização da API do Google Gemini para geração de descrições automáticas a partir de imagens.
- Configuração de variáveis de ambiente para autenticação segura.

### **Aula 5**: Deploy na Google Cloud
- Preparação do projeto para produção.
- Configuração e deploy utilizando o **Google Cloud Run**.
- Integração com um front-end pré-configurado para testes.

---

## ⚙️ **Como Executar o Projeto**

### **Pré-requisitos**
1. **Node.js** instalado ([Download](https://nodejs.org/)).
2. **MongoDB** configurado ([MongoDB Atlas](https://www.mongodb.com/cloud/atlas) ou local).
3. Uma conta no **Google Cloud** para utilizar o serviço Cloud Run.

### **Passo a Passo**
1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/imersao-Backend.git
   cd imersao-Backend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie um arquivo `.env` com as seguintes variáveis de ambiente:
   ```plaintext
   MONGO_URI=<sua-string-de-conexao-do-MongoDB>
   GOOGLE_API_KEY=<sua-chave-da-API-do-Google-Gemini>
   PORT=3000
   ```

4. Execute o servidor em modo de desenvolvimento:
   ```bash
   npm start
   ```

5. Acesse a API em: `http://localhost:3000`.

---

## 🚀 **Funcionalidades**
- Listar publicações.
- Criar novas publicações com ou sem upload de imagens.
- Gerar descrições automáticas para imagens enviadas.
- Preparação para deploy em produção.

---

## 🖼️ **Endpoints Principais**

### **GET /posts**
Lista todas as publicações.

### **POST /upload**
Faz o upload de uma imagem e cria uma publicação com descrição automática.  
**Form-Data:**
- `imagem`: Arquivo da imagem.

---

### **PUT /update/idimagem**
Cria um update encima da imagem publicada.  
**Body (JSON):**
```json
{
  "alt": "Minha Publicação",
}
```

## 🌩️ **Deploy**
O deploy foi realizado utilizando o **Google Cloud Run**. O serviço permite a execução de aplicações em contêineres com escalabilidade automática, ideal para projetos de APIs.

---

## 📋 **Aprendizados**
- Estruturação de um back-end com boas práticas.
- Integração com serviços externos (MongoDB e Google Gemini).
- Automação de tarefas com APIs.
- Publicação de aplicações na nuvem.

---

## 🧑‍💻 **Sobre o Curso**
A **Imersão Dev Back-End** foi um projeto educacional incrível para entender o fluxo de desenvolvimento back-end moderno, desde a construção até a publicação de um projeto funcional. Amei a experiência e o contato inicial com a cloud da google e todo esse desenvolvimento backend em node.

Dúvidas? Entre em contato ou acesse a [Alura](https://www.alura.com.br/).