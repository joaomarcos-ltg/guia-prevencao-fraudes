// Base de dados de Sites & Dicas Úteis - João Marcos • Segurança Digital
const bancoDicas = [
  {
    id: "comprar-mais-barato-internet",
    categoria: "economia",
    categoriaLabel: "Economia & Compras",
    titulo: "Como Comprar Qualquer Coisa Mais Barato na Internet",
    resumo: "Adicione 'achar.promo/' antes do link de qualquer produto na barra do navegador e deixe a IA encontrar o mesmo item muito mais barato em outras lojas.",
    comoFunciona: "Ao inserir o prefixo 'achar.promo/' logo antes do 'https://' na URL de qualquer produto, a ferramenta usa busca visual e inteligência artificial para comparar preços reais do mesmo item em lojas como Mercado Livre, Amazon, Shopee e Magalu.",
    dicaPratica: "Clique na barra de endereços da página do produto, digite achar.promo/ antes de https://... e aperte Enter. Compare as ofertas exibidas e escolha o menor valor com frete.",
    episodioLabel: "Dica 01 • Comparador Inteligente Achar.Promo",
    audioUrl: "audios/dica-comprar-mais-barato.mp3",
    siteUrl: "https://achar.promo/",
    siteLabel: "Acessar Ferramenta Achar.Promo",
    tags: ["compras", "desconto", "economia", "achar.promo", "comparador", "podcast"]
  },
  {
    id: "canais-abertos-mundo-vlc-iptv-org",
    categoria: "produtividade",
    categoriaLabel: "Entretenimento & Código Aberto",
    titulo: "Acesse Todos os Canais Abertos e Públicos do Mundo com Essa Dica",
    resumo: "Use o reprodutor gratuito VLC Media Player junto ao repositório aberto iptv-org para assistir a milhares de canais públicos e gratuitos do Brasil e do mundo.",
    comoFunciona: "O projeto colaborativo iptv-org no GitHub compila links oficiais de transmissões públicas disponibilizadas pelas próprias emissoras. Ao colar a lista M3U no VLC, os canais carregam na hora.",
    dicaPratica: "Abra o VLC, pressione Ctrl + N, cole https://iptv-org.github.io/iptv/countries/br.m3u (Brasil) ou https://iptv-org.github.io/iptv/index.m3u (Mundial) e clique em Reproduzir.",
    episodioLabel: "Dica 02 • TV Aberta Pública no VLC Player",
    audioUrl: "audios/dica-canais-abertos-vlc.mp3",
    siteUrl: "https://github.com/iptv-org/iptv",
    siteLabel: "Acessar Repositório iptv-org no GitHub",
    tags: ["tv aberta", "vlc", "iptv", "streaming gratuito", "podcast"]
  },
  {
    id: "mapa-sombras-sol-shademap",
    categoria: "produtividade",
    categoriaLabel: "Mapas & Engenharia",
    titulo: "Mapa de Sombras: Saiba Onde Bate Sol ou Faz Sombra em Qualquer Lugar do Mundo",
    resumo: "Simule gratuitamente em tempo real a posição do sol e a projeção de sombras de prédios, casas e relevos em qualquer endereço, dia e horário do ano.",
    comoFunciona: "O ShadeMap combina dados topográficos globais e modelos 3D de edificações com cálculos astronômicos precisos da trajetória solar, projetando sobre o mapa exatamente onde haverá sol direto ou sombra em qualquer data e hora escolhida, sem exigir cadastro.",
    dicaPratica: "Clique no botão abaixo para abrir o mapa na sua região, digite qualquer endereço na barra de busca superior esquerda e arraste a linha do tempo na parte inferior da tela para comparar o sol da manhã e da tarde. (Nota: caso o mapa não carregue no Google Chrome devido à aceleração gráfica, ative a aceleração de hardware nas configurações do navegador ou abra pelo Firefox).",
    episodioLabel: "Dica 03 • Simulador Solar ShadeMap",
    audioUrl: "audios/dica-mapa-sombras.mp3",
    siteUrl: "https://shademap.app/",
    siteLabel: "Acessar Ferramenta ShadeMap",
    tags: ["mapa", "sombra", "sol", "imovel", "terreno", "energia solar", "arquitetura", "shademap", "engenharia", "podcast"]
  },
  {
    id: "acervo-gratuito-cursos-livros-drive-de-pobre",
    categoria: "produtividade",
    categoriaLabel: "Educação & Acervo Digital",
    titulo: "Acervo Gratuito de Cursos, Videoaulas e Livros Técnicos Sem Cadastro",
    resumo: "Explore uma biblioteca colaborativa com milhares de videoaulas, livros e apostilas em PDF nas áreas de Tecnologia, Eletrônica, Engenharia e Idiomas, sem anúncios ou login.",
    comoFunciona: "O Drive de Pobre organiza em diretórios abertos na nuvem uma vasta coleção de materiais educacionais, livros digitais (PDF) e aulas completas em vídeo (MP4) divididos por temas como Tecnologia, Idiomas, Livros e Outros Cursos, sem paywall ou exigência de registro.",
    dicaPratica: "Clique no botão abaixo para acessar o acervo, escolha uma das pastas principais (como Tecnologia, Livros ou Idiomas) e navegue pelas subpastas (Eletrônica, Manutenção, Engenharia, etc.) para ler os PDFs ou assistir às aulas diretamente no navegador.",
    episodioLabel: "Dica 04 • Acervo Educacional Drive de Pobre",
    audioUrl: "audios/dica-drive-de-pobre.mp3",
    siteUrl: "https://drivedepobre.com/",
    siteLabel: "Acessar Acervo Drive de Pobre",
    tags: ["cursos gratis", "livros pdf", "apostilas", "eletronica", "engenharia", "idiomas", "tecnologia", "videoaulas", "drive de pobre", "estudo", "podcast"]
  },
  {
    id: "alphaearth-foundations-google-deepmind",
    categoria: "produtividade",
    categoriaLabel: "Inteligência Artificial & Mapas",
    titulo: "AlphaEarth: A IA do Google que Mapeia a Terra em Blocos de 10 Metros",
    resumo: "Conheça o modelo geoespacial do Google DeepMind que combina satélites, radar e dados climáticos para monitorar safras, queimadas, enchentes e o solo em alta precisão.",
    comoFunciona: "O AlphaEarth Foundations divide a superfície terrestre e áreas costeiras em blocos de 10x10 metros, integrando imagens ópticas, radar (capaz de ver através de nuvens), LiDAR 3D e histórico climático desde 2017 no Google Earth Engine.",
    dicaPratica: "Acesse o artigo oficial pelo botão abaixo para conhecer as capacidades da plataforma e abrir os links diretos do Catálogo no Google Earth Engine ou o aplicativo interativo de visualização no navegador.",
    episodioLabel: "Dica 05 • Mapeamento Planetário AlphaEarth",
    audioUrl: "audios/dica-alphaearth-google.mp3",
    siteUrl: "https://deepmind.google/discover/blog/alphaearth-foundations-helps-map-our-planet-in-unprecedented-detail/",
    siteLabel: "Acessar Portal Oficial AlphaEarth (DeepMind)",
    tags: ["alphaearth", "google", "deepmind", "satelite", "mapa", "agricultura", "clima", "inteligencia artificial", "earth engine", "geoprocessamento", "podcast"]
  }
];
