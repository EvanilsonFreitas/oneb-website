# Ilustrações 3D

Pasta para os ícones/ilustrações 3D do tema espacial da marca (ex: [iconscout.com/3d-icons/space](https://iconscout.com/3d-icons/space)), adicionados manualmente.

O código já está preparado para consumir os arquivos abaixo — basta colocar o arquivo com o nome exato nesta pasta que ele aparece automaticamente na página correspondente, sem precisar mexer em código.

| Arquivo esperado | Onde é usado                            | Formato recomendado                          |
| ---------------- | --------------------------------------- | -------------------------------------------- |
| `astronaut.png`  | Página 404 (Perdido no Espaço de Dados) | PNG/WebP, fundo transparente, mín. 400×400px |
| `planet.png`     | Quem Somos (decorativo no hero)         | PNG/WebP, fundo transparente, mín. 400×400px |
| `rocket.png`     | Carreira (hero)                         | PNG/WebP, fundo transparente, mín. 400×400px |

## Diretrizes

- Fundo **transparente** (o site é Dark Theme; fundo sólido branco/cinza vai destoar).
- Prefira `.png` ou `.webp`. Se só tiver `.svg`, funciona também — só usar o mesmo nome de arquivo trocando a extensão e ajustar a extensão em `src/components/common/Illustration.tsx`.
- Enquanto o arquivo não existir aqui, o espaço reservado na página simplesmente fica vazio (sem quebrar o layout).

## Adicionar uma nova ilustração em outro lugar do site

1. Coloque o arquivo aqui, ex: `data-flow.png`.
2. No componente da página, use:
   ```tsx
   import { Illustration } from '@/components/common/Illustration'

   ;<Illustration
     name="data-flow.png"
     alt="Descrição da ilustração"
     className="h-72 w-72"
   />
   ```
