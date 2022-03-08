# Hefest

![Deployment][deployment-shield]

<p align="center">
  <img src="https://images.vexels.com/media/users/3/189084/isolated/preview/278f4268882ce41fcfd5a95e00cca13a-dios-griego-hefesto.png" width="80" height="100">
</p>

## Description

Manipulates employees information

## Structure
<img src="https://i.imgur.com/O58X96w.png">

- MySQL server 2019
- Dot net 5.0
- Angular 13
- Docker

---

## Development

*Requirements:*

- [Docker](https://docs.docker.com/get-docker/)
- [Visual studio](https://visualstudio.microsoft.com/)
- [Visual studio code](https://code.visualstudio.com/)
  - Install vscode extension:
[ms-vscode-remote.remote-containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)


*Clone repository:*
- Start the database
  ```sh
  docker run -d -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=Ath43539U" -p 1433:1433 --name hefestSql -d mcr.microsoft.com/mssql/server:2019-latest
  ```
- Open hefest-engine with Visual Studio
- Open hefest-ui with Visual studio code

## Roadmap

- [x] Start project
- [x] Create database
- [x] Create backend server
- [x] Create frontend app
- [ ] Complete 100% testing
- [ ] Deploy services
- [ ] Implement CI/CD



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

[deployment-shield]: https://img.shields.io/static/v1?label=CD&message=Incomplete&color=orange&style=flat-square&logo=GitHubActions
