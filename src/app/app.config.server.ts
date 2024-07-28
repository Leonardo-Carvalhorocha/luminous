import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering() // Adiciona suporte para Server-Side Rendering
  ]
};

// Mescla a configuração do cliente com a configuração do servidor
export const config = mergeApplicationConfig(appConfig, serverConfig);
