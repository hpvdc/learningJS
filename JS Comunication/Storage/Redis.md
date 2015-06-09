# Redis

Redis ( REmote DIctionary Server) é um servidor de estrutura de dados. É open-source
(software aberto), em memória e guarda 'valores' durante o tempo que necessitarmos.
A diferença do Redis para as outras 'Bases de dados em memória', é o armazenamento
de dados. Suporta tipos de dados abstractos: listas, sets, tabelas hash ...

Existe uma ***master*** e dessa master é possivel replicar-se em slaves. Cada
slave pode ter slaves. Um user se subscrever um canal e esse canal estiver na
master, tem acesso a todas as publicações.
