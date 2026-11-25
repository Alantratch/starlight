---
title: Deploy estático local
description: Orientação para Proxmox, Coolify e Cloudflare Access.
---

## Build

Execute `pnpm --filter @example/turvo-wiki build`. O resultado estático fica em `dist/`.

## Publicação controlada

Hospede o conteúdo em uma aplicação estática dentro da infraestrutura local autorizada, por exemplo uma VM ou container no Proxmox gerenciado pelo Coolify. O workflow do GitHub Pages deste exemplo só publica após alteração na `main` ou disparo manual, e não substitui a proteção de acesso.

## Proteção

Configure o Cloudflare Access no hostname protegido, com uma regra que cubra o caminho inteiro da aplicação. A proteção deve alcançar também os arquivos estáticos e o índice gerado pelo Pagefind, não apenas a página inicial. Valide isso no ambiente de homologação antes de qualquer uso institucional.

Este documento não contém nomes de host internos, IPs, tokens ou configurações de túnel.
