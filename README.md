# api-epg :jigsaw:
Aplicação web desenvolvida em Node.js.

Com o propósito de fornecer a grade de programação da RPC para os telespectadores, com funcionalidade de evidênciar qual programação está ao vivo no momento de acesso, nome, titulo e seu horário tanto de início quanto fim.
Utilizando o pacote Axios para consumo da API fornecida, realizando requisições HTTP.

# Hospedagem :gear:
Inicialmete utilizado o Amazon Elastic Compute Cloud (Amazon EC2), o qual fornece um servidor virtual em nuvem. Criado e configurado essa instância para ter seu Ipv4 acessível externamente.

Como orientado a uilização da plataforma Heroku, foi também criado um acesso em nuvem a partir dessa plataforma.

Lembrando que o acesso AWS não tem um dominio estabelecido e sim um acesso direto por ip.
Já no Heroku, a criação de um acesso já é disponibilizado um domínio próprio provendo do mesmo nome da aplicação.
# Acessos 	:outbox_tray:
AWS :point_right: http://34.201.36.236:3333/ ||
Heroku :point_right: https://api-epg.herokuapp.com/
# Observações 	:warning:
Como a maquina virtual criada através do serviço da AWS, temos a possibilidade de configuração personalizada. Sendo a porta em que é liberada para acesso externo como a configuração de formato e fuso horaio do servidor. Então para a visualização dos horários de início e fim dos programas estão semelhantes à nossa região.

Na plataforma Heroku, é disponibilizado somente as regiões americanas e europeias. Então o horário acaba sendo distindo da nossa região 

Logo aconcelho o acesso *AWS* que é o mesmo conteúdo porem configurado com os horários corretos.
