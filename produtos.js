// Base de dados de Equipamentos & Kit Segurança - João Marcos • Segurança Digital
const bancoProdutos = [
  {
    id: "carteira-bloqueio-rfid-nfc",
    categoria: "cartoes",
    categoriaLabel: "Proteção de Cartões",
    titulo: "Carteira / Porta-Cartões com Blindagem RFID e NFC",
    resumo: "Bloqueia ondas eletromagnéticas de maquininhas aproximadas no bolso ou bolsa em transportes e locais cheios.",
    indicacaoTecnica: "Prevenção direta contra o Golpe da Aproximação (NFC) catalogado na aba Prevenção a Fraudes. A malha metálica interna impede a leitura sem contato.",
    ondeUsar: "Ideal para uso diário com cartões de crédito/débito contactless e crachás corporativos.",
    lojaLabel: "Ver Oferta no Mercado Livre",
    linkAfiliado: "https://meli.la/19hCRhH", // <-- SUBSTITUA PELO SEU LINK DE AFILIADO
    tags: ["rfid", "nfc", "carteira", "cartao", "aproximacao", "antifurto"]
  },
  {
    id: "usb-data-blocker-camisinha-usb",
    categoria: "privacidade",
    categoriaLabel: "Privacidade & Viagem",
    titulo: "Bloqueador de Dados USB (USB Data Blocker)",
    resumo: "Adaptador que bloqueia os pinos de transferência de dados e permite apenas a passagem de energia ao carregar o celular.",
    indicacaoTecnica: "Evita ataques de Juice Jacking (roubo de dados ou instalação de malware) ao conectar o cabo em portas USB públicas de aeroportos, hotéis, carros alugados ou totens.",
    ondeUsar: "Indispensável na mochila ou chaveiro para viagens e deslocamentos.",
    lojaLabel: "Ver Oferta no Mercado Livre",
    linkAfiliado: "https://meli.la/2QJBTeP", // <-- SUBSTITUA PELO SEU LINK DE AFILIADO
    tags: ["usb", "data blocker", "carregador", "aeroporto", "hotel", "juice jacking", "privacidade"]
  },
  {
    id: "protetor-webcam-deslizante",
    categoria: "privacidade",
    categoriaLabel: "Privacidade & Notebooks",
    titulo: "Kit Protetor Físico de Webcam Ultrafino (Webcam Cover)",
    resumo: "Tampa deslizante ultrafina que cobre fisicamente a lente da câmera de notebooks, tablets e celulares sem danificar a tela.",
    indicacaoTecnica: "Garantia física absoluta contra espionagem remota caso algum malware ou extensão maliciosa tente ativar a câmera em segundo plano.",
    ondeUsar: "Notebooks corporativos, computadores domésticos e tablets.",
    lojaLabel: "Ver Oferta no Mercado Livre",
    linkAfiliado: "https://meli.la/1VtN6Zx", // <-- SUBSTITUA PELO SEU LINK DE AFILIADO
    tags: ["webcam", "camera", "notebook", "privacidade", "espionagem", "tampa"]
  },
  {
    id: "pelicula-privacidade-anti-espiao",
    categoria: "privacidade",
    categoriaLabel: "Privacidade & Celulares",
    titulo: "Película de Privacidade (Anti-Espião) para Smartphone",
    resumo: "Escurece a tela para quem olha de lado (ângulos acima de 30°), mantendo a visão nítida apenas para quem está de frente.",
    indicacaoTecnica: "Protege senhas bancárias, códigos PIN e conversas confidenciais contra olhares curiosos (Shoulder Surfing) em ônibus, metrôs, filas e restaurantes.",
    ondeUsar: "Compatível com diversos modelos de iPhone, Samsung Galaxy e Motorola.",
    lojaLabel: "Ver Oferta no Mercado Livre",
    linkAfiliado: "https://meli.la/2zkZ9z8", // <-- SUBSTITUA PELO SEU LINK DE AFILIADO
    tags: ["pelicula", "privacidade", "anti espiao", "celular", "senha", "tela"]
  },
  ,
  {
    id: "chave-seguranca-fisica-yubikey-fido2",
    categoria: "autenticacao",
    categoriaLabel: "Autenticação & Contas",
    titulo: "Chave de Segurança Física USB/NFC (YubiKey / FIDO2)",
    resumo: "Token físico criptográfico que substitui códigos SMS e impede invasões mesmo que alguém descubra sua senha.",
    indicacaoTecnica: "Proteção máxima contra Phishing e sequestro de contas (Google, Microsoft, bancos e redes sociais). Sem o toque físico na chave, o invasor não consegue logar.",
    ondeUsar: "Contas de e-mail principais, gerenciadores de senhas, bancos e acesso corporativo.",
    lojaLabel: "Ver Oferta no Mercado Livre",
    linkAfiliado: "COLE_SEU_LINK_MELI_LA_AQUI",
    tags: ["yubikey", "fido2", "2fa", "token", "chave fisica", "phishing", "autenticacao", "senha"]
  },
  {
    id: "hd-ssd-externo-backup-offline",
    categoria: "backup",
    categoriaLabel: "Backup & Anti-Ransomware",
    titulo: "SSD / HD Externo Portátil para Backup Offline (Regra 3-2-1)",
    resumo: "Armazenamento físico desconectado da rede para salvar fotos de família, documentos e arquivos críticos com segurança.",
    indicacaoTecnica: "Única defesa infalível contra ataques de Ransomware (sequestro de dados) e falhas em nuvem, pois permanece fisicamente desconectado após a cópia.",
    ondeUsar: "Backup mensal de computadores domésticos, notebooks de trabalho e acervos pessoais.",
    lojaLabel: "Ver Oferta no Mercado Livre",
    linkAfiliado: "COLE_SEU_LINK_MELI_LA_AQUI",
    tags: ["ssd", "hd externo", "backup", "ransomware", "arquivos", "fotos", "armazenamento"]
  },
  {
    id: "roteador-wifi-6-wpa3-rede-visitantes",
    categoria: "rede",
    categoriaLabel: "Segurança de Rede & Wi-Fi",
    titulo: "Roteador Wi-Fi 6 com Criptografia WPA3 e Rede de Visitantes",
    resumo: "Atualiza a segurança da internet residencial com protocolo moderno WPA3 e isolamento de dispositivos para visitas.",
    indicacaoTecnica: "Permite criar uma rede Wi-Fi separada para visitas e câmeras/Alexa (IoT), impedindo que um celular infectado de terceiros acesse seus computadores na rede principal.",
    ondeUsar: "Residências, home office e pequenos escritórios.",
    lojaLabel: "Ver Oferta no Mercado Livre",
    linkAfiliado: "COLE_SEU_LINK_MELI_LA_AQUI",
    tags: ["roteador", "wifi 6", "wpa3", "rede visitantes", "internet", "seguranca", "home office"]
  },
  {
    id: "filtro-linha-dps-clamper-protecao-eletrica",
    categoria: "hardware",
    categoriaLabel: "Proteção Elétrica & Hardware",
    titulo: "Filtro de Linha com DPS Integrado (iClamper)",
    resumo: "Protege computadores, roteadores e equipamentos eletrônicos contra surtos elétricos e raios na rede.",
    indicacaoTecnica: "Evita a queima de fontes, placas-mãe e perda definitiva de HDs causada por picos de tensão — mantendo a disponibilidade física dos seus equipamentos.",
    ondeUsar: "Estações de trabalho, roteadores/modems, TVs e computadores.",
    lojaLabel: "Ver Oferta no Mercado Livre",
    linkAfiliado: "COLE_SEU_LINK_MELI_LA_AQUI",
    tags: ["clamper", "filtro de linha", "dps", "surto", "raio", "energia", "computador", "roteador"]
  },
  {
    id: "fechadura-eletronica-digital-biometria",
    categoria: "fisica",
    categoriaLabel: "Segurança Física & Residencial",
    titulo: "Fechadura Eletrônica Digital com Senha e Biometria",
    resumo: "Elimina o uso de chaves mecânicas tradicionais, permitindo acesso por biometria, senha numérica ou tag.",
    indicacaoTecnica: "Neutraliza o risco de clonagem de chaves por fotos ou impressão 3D (abordado na aba Prevenção a Fraudes) e impede cópias não autorizadas.",
    ondeUsar: "Portas de entrada de residências, apartamentos e escritórios.",
    lojaLabel: "Ver Oferta no Mercado Livre",
    linkAfiliado: "COLE_SEU_LINK_MELI_LA_AQUI",
    tags: ["fechadura", "eletronica", "digital", "biometria", "chave", "clonagem", "porta", "casa"]
  }
];