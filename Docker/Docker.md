# Docker

É uma plataforma para programadores e administadores de sistemas, desenvolverem,
transferirem e executarem aplicações. Possibilita ainda testar o código e enviar
para a produção o mais rapidamente possivel.

O Docker é perfeito para ajudar no ciclo de vida do desenvolvimento de uma
aplicação. Os programadores podem desenvolver o software em dockers locais.
Por exemplo, eu crio código localmente e partilho com os meus colegas via Docker.
Quando eles tiverem terminado, eles enviam o código deles e a stack que estão a
desenvolver para um ambiente de testes, e executam os testes que acharem necessários.


Existem 3 componentes no *interior* do Docker.

#### Docker Containers
Os contentores são similares a diretórios. Um contentor tem tudo o que precisa
para uma aplicação correr. Cada contentor é criado apartir de uma **Docker image**.
Cada um destes, é uma plataforma de aplicações segura e isolada.

#### Docker images
As imagens são usadas para criar contentores no Docker. Por exemplo se tiver uma
imagem do ubuntu com aplicações instaladas é possivel criar um contentor com
esta imagem.

#### Docker Registries
O registo é onde é guardado as imagens do Docker. Podem ser *repositórios* públicos
ou privados. Existe um registo público do [Docker](https://hub.docker.com/account/signup/),
onde existe uma coleção enorme de imagens para uso.

Para executar um contentor:
```bin/bash

sudo docker run -i -t ubuntu /bin/bash

```
