# NewsFeedApp

Este projeto é um aplicativo de feed de notícias desenvolvido em React Native. Ele permite que os usuários se registrem, façam login e visualizem as notícias mais recentes.

## Visão Geral

O principal objetivo deste projeto é fornecer uma experiência de usuário fluida para visualizar as notícias mais recentes. Ele também integra funcionalidades de autenticação, permitindo que os usuários se registrem e façam login.

### Arquivos Principais:

- **App.tsx**: Este é o ponto de entrada principal da aplicação React Native.
- **components**: Esta pasta contém vários componentes reutilizáveis, como `CustomButton`, `EmailInput`, `NewsCard`, `PasswordInput`, entre outros.
- **navigation/AppNavigator.tsx**: Define a navegação principal do aplicativo.
- **screens**: Esta pasta contém as telas principais do aplicativo, como `LoginScreen`, `NewsDetailsScreen`, `NewsFeedScreen` e `RegistrationScreen`.
- **services**: Aqui estão os serviços que lidam com a API e autenticação.
- **store**: Esta pasta contém a lógica relacionada ao gerenciamento de estado usando Redux. Inclui ações, redutores e thunks.
- **styles/theme.ts**: Define o tema principal e estilos globais para o aplicativo.

## Configuração

Para configurar e executar o projeto:

1. Certifique-se de ter o ambiente React Native configurado em sua máquina.
2. Clone o repositório.
3. Navegue até o diretório do projeto e execute `npm install` ou `yarn install` para buscar as dependências.
4. Execute `npx react-native run-android` ou `npx react-native run-ios` para iniciar a aplicação.

## Dependências

- **react-native**: Framework para construir aplicações móveis nativas usando React.
- **@expo/vector-icons**, **@firebase/app-types**, **@firebase/auth-types**, **@react-native-async-storage/async-storage**, **@react-navigation/native**, **@react-navigation/stack**, **@reduxjs/toolkit**, **axios**, **expo**, **firebase**, **native-base**, **react-redux**, **redux**, **redux-thunk**, **styled-components** e outras dependências específicas do projeto podem ser encontradas no arquivo `package.json` do repositório.

## Linting

O projeto pode utilizar ferramentas de linting para incentivar boas práticas de codificação no React Native.
## Aprendizados

Durante o desenvolvimento deste projeto, você pode aprender profundamente sobre o desenvolvimento de aplicativos móveis usando React Native, integração com APIs, gerenciamento de estado com Redux, e práticas de autenticação e registro. A prática de escrever componentes reutilizáveis e gerenciar a navegação em um aplicativo móvel também é um aprendizado valioso.

## Licença

Licença MIT

Copyright (c) 2023 Joao Paulo Uba F.
