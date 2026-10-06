const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");
const selectIdioma = document.querySelector("#idioma");
const selectTema = document.querySelector("#tema");
const tituloPrincipal = document.querySelector("#titulo-principal");
const tituloPesquisa = document.querySelector("#titulo-pesquisa");
const telaInicial = document.querySelector("#tela-inicial");
const telaPesquisa = document.querySelector("#tela-pesquisa");
const formularioNome = document.querySelector("#form-nome");
const campoNome = document.querySelector("#nome-participante");
const mensagemInicial = document.querySelector("#mensagem-inicial");
const rotuloNome = document.querySelector("#rotulo-nome");
const botaoIniciar = document.querySelector("#botao-iniciar");
const alternarJogos = document.querySelector("#alternar-jogos");
const painelJogos = document.querySelector("#painel-jogos");
const fecharJogos = document.querySelector("#fechar-jogos");
const tabuleiroVelha = document.querySelector("#tabuleiro-velha");
const statusVelha = document.querySelector("#status-velha");
const tabuleiroMemoria = document.querySelector("#tabuleiro-memoria");
const statusMemoria = document.querySelector("#status-memoria");
const horaAtual = document.querySelector("#hora-atual");

const textos = {
  pt: {
    titulo: "Você decide o futuro da IA",
    introducao: "Em 2049...",
    resumo: " Em resumo, a IA será mais útil quando for usada com ética, pensamento crítico e criatividade humana.",
    padrao: "Você ainda está começando a refletir sobre o papel da IA no futuro.",
    perguntas: [
      { enunciado: "Você acaba de conhecer uma ferramenta que responde perguntas, cria imagens e produz textos em segundos. Qual é o seu primeiro pensamento?", alternativas: [{ texto: "É fascinante, mas preciso entender como usar isso de forma responsável.", resultado: "Você reagiu com curiosidade e responsabilidade diante da tecnologia." }, { texto: "Isso parece incrível e pode transformar a vida das pessoas.", resultado: "Você viu o potencial positivo da IA e a imaginou como aliada do conhecimento." }] },
      { enunciado: "Na aula de tecnologia, a professora pede que você produza um trabalho sobre o uso da IA na educação. O que você faz?", alternativas: [{ texto: "Uso IA para encontrar informações relevantes e reformular o conteúdo em uma linguagem mais clara, sempre conferindo as fontes.", resultado: "Você decidiu usar a IA como apoio para aprender e compreender melhor o tema." }, { texto: "Escrevo o trabalho com base em pesquisas e no meu próprio conhecimento, sem depender muito de ferramentas automatizadas.", resultado: "Você valoriza o pensamento crítico e a autoria pessoal na construção do conhecimento." }] },
      { enunciado: "Durante a discussão, a turma debate como a IA pode mudar o mercado de trabalho. Como você se posiciona?", alternativas: [{ texto: "A IA pode gerar novas oportunidades, mas precisa ser usada com proteção para os trabalhadores e respeito às pessoas.", resultado: "Você entende que tecnologia e justiça social precisam caminhar juntas." }, { texto: "A IA pode criar novos empregos e ajudar as pessoas a desenvolverem novas habilidades.", resultado: "Você acredita que a inovação pode ampliar oportunidades quando bem orientada." }] },
      { enunciado: "Você precisa criar uma imagem representando o que pensa sobre a IA. Qual caminho você escolhe?", alternativas: [{ texto: "Uso uma ferramenta de design tradicional para criar algo manualmente e com visão própria.", resultado: "Você valoriza a expressão criativa humana e o controle do processo criativo." }, { texto: "Uso um gerador de imagens com IA para explorar ideias novas e diferentes formas de expressão.", resultado: "Você aceita a IA como ferramenta criativa, desde que tenha intenção e cuidado." }] },
      { enunciado: "Seu grupo de biologia precisa entregar um trabalho, e uma pessoa decidiu usar IA para produzir grande parte do texto. O problema é que o conteúdo está muito parecido com um chat e sem revisão. O que você faz?", alternativas: [{ texto: "Revisa tudo com atenção, corrige erros e adiciona ideias próprias para manter a qualidade e a originalidade.", resultado: "Você percebe que a tecnologia é útil, mas a revisão crítica e a autoria humana continuam essenciais." }, { texto: "Aceita o texto do chat como se fosse a conclusão final, porque a IA já resolveu a parte difícil.", resultado: "Você ainda precisa desenvolver mais consciência sobre a importância de validar e personalizar o conteúdo gerado." }] },
      { enunciado: "Você recebe uma notícia muito polêmica sobre a IA e percebe que ela pode ser falsa ou exagerada. Como você reage?", alternativas: [{ texto: "Verifico outras fontes, questiono os dados e procuro entender o contexto antes de compartilhar qualquer informação.", resultado: "Você reconhece que a informação precisa ser analisada criticamente, mesmo quando vem em alta velocidade." }, { texto: "Compartilha a notícia porque ela parece interessante e pode chamar atenção das pessoas.", resultado: "Você precisa reforçar a importância de checar fatos antes de divulgar conteúdos na internet." }] },
      { enunciado: "Uma IA apresenta uma resposta convincente, mas não mostra de onde vieram as informações. O que você faz?", alternativas: [{ texto: "Pesquiso em fontes confiáveis e comparo as informações antes de usar a resposta.", resultado: "Você entende que uma resposta convincente também precisa ser verificada." }, { texto: "Uso a resposta sem conferir, porque ela parece bem explicada.", resultado: "Você pode fortalecer o hábito de verificar informações antes de confiar nelas." }] },
      { enunciado: "Uma ferramenta de IA pede dados pessoais para oferecer uma resposta mais personalizada. Como você age?", alternativas: [{ texto: "Leio as condições de privacidade e evito compartilhar dados sensíveis sem necessidade.", resultado: "Você considera a privacidade parte importante do uso responsável da tecnologia." }, { texto: "Envio os dados solicitados sem verificar como serão armazenados ou usados.", resultado: "Você pode ter mais cuidado com seus dados pessoais ao usar ferramentas digitais." }] },
      { enunciado: "Um sistema automatizado toma uma decisão que parece injusta com alguém. Qual seria sua atitude?", alternativas: [{ texto: "Questiono os critérios e procuro uma revisão humana da decisão.", resultado: "Você reconhece que sistemas automatizados também podem reproduzir erros e injustiças." }, { texto: "Aceito a decisão porque imagino que um sistema computadorizado seja sempre imparcial.", resultado: "Você pode lembrar que decisões automatizadas precisam de transparência e supervisão." }] },
      { enunciado: "Ao longo de uma semana, você percebe que a IA está presente em tarefas simples do dia a dia, como estudo, trabalho e entretenimento. Como você pretende usá-la?", alternativas: [{ texto: "Como apoio para aprender, criar e organizar ideias, sempre com senso crítico e responsabilidade.", resultado: "Você escolhe um uso consciente da IA, combinando criatividade, ética e reflexão humana." }, { texto: "Como solução mágica para tudo, sem questionar limitações, erros ou impactos sociais.", resultado: "Você ainda precisa desenvolver uma visão mais equilibrada sobre os limites da tecnologia." }] }
    ]
  },
  en: {
    titulo: "You decide the future of AI",
    introducao: "In 2049...",
    resumo: " In short, AI will be most useful when used with ethics, critical thinking and human creativity.",
    padrao: "You are still beginning to reflect on the role of AI in the future.",
    perguntas: [
      { enunciado: "You just discovered a tool that answers questions, creates images and produces texts in seconds. What is your first thought?", alternativas: [{ texto: "It is fascinating, but I need to understand how to use it responsibly.", resultado: "You reacted with curiosity and responsibility toward technology." }, { texto: "This seems amazing and could transform people's lives.", resultado: "You saw the positive potential of AI and imagined it as an ally of knowledge." }] },
      { enunciado: "In technology class, the teacher asks you to write a paper on the use of AI in education. What do you do?", alternativas: [{ texto: "I use AI to find relevant information and rewrite the content in clearer language while still checking the sources.", resultado: "You decided to use AI as support to learn and better understand the topic." }, { texto: "I write the paper based on research and my own knowledge, without depending too much on automated tools.", resultado: "You value critical thinking and personal authorship in building knowledge." }] },
      { enunciado: "During the discussion, the class debates how AI can change the job market. Where do you stand?", alternativas: [{ texto: "AI can create new opportunities, but it must be used with protection for workers and respect for people.", resultado: "You understand that technology and social justice must move forward together." }, { texto: "AI can create new jobs and help people develop new skills.", resultado: "You believe innovation can expand opportunities when well guided." }] },
      { enunciado: "You need to create an image representing your opinion about AI. Which path do you choose?", alternativas: [{ texto: "I use a traditional design tool to create something manually and with my own vision.", resultado: "You value human creativity and control over the creative process." }, { texto: "I use an AI image generator to explore new ideas and different forms of expression.", resultado: "You accept AI as a creative tool, as long as it is used with intention and care." }] },
      { enunciado: "Your biology group needs to deliver a project, and one person decided to use AI to produce most of the text. The problem is that the content is very similar to a chatbot and has not been reviewed. What do you do?", alternativas: [{ texto: "I review everything carefully, correct mistakes, and add my own ideas to maintain quality and originality.", resultado: "You realize that technology is useful, but critical review and human authorship remain essential." }, { texto: "I accept the chatbot text as if it were the final conclusion, because AI already solved the hard part.", resultado: "You still need to develop more awareness about the importance of validating and personalizing generated content." }] },
      { enunciado: "You receive a highly controversial news article about AI and realize it may be false or exaggerated. How do you react?", alternativas: [{ texto: "I check other sources, question the data, and look for context before sharing any information.", resultado: "You recognize that information must be analyzed critically, even when it arrives at high speed." }, { texto: "I share the news because it seems interesting and may catch people's attention.", resultado: "You still need to strengthen the importance of verifying facts before posting content online." }] },
      { enunciado: "Over the course of a week, you realize AI is present in everyday tasks such as studying, work and entertainment. How do you plan to use it?", alternativas: [{ texto: "As support for learning, creating and organizing ideas, always with critical thinking and responsibility.", resultado: "You choose a conscious use of AI, combining creativity, ethics and human reflection." }, { texto: "As a magic solution for everything, without questioning limitations, errors or social impacts.", resultado: "You still need to develop a more balanced view of the limits of technology." }] }
    ]
  },
  mandarin: {
    titulo: "你决定 AI 的未来",
    introducao: "2049 年...",
    resumo: " 简单来说，AI 在符合伦理、批判性思维和人类创造力的前提下会更有用。",
    padrao: "你还在开始思考 AI 在未来中的角色。",
    perguntas: [
      { enunciado: "你刚刚发现了一种能回答问题、生成图片和快速写作的工具。你的第一反应是什么？", alternativas: [{ texto: "它很神奇，但我需要理解如何负责任地使用它。", resultado: "你带着好奇心和责任感面对技术。" }, { texto: "这看起来很棒，能改变人们的生活。", resultado: "你看到了 AI 的积极潜力，并把它想象成知识的伙伴。" }] },
      { enunciado: "在科技课上，老师要求你写一篇关于 AI 在教育中的应用的论文。你会怎么做？", alternativas: [{ texto: "我使用 AI 查找相关信息，并用更清晰的语言重写内容，同时核对来源。", resultado: "你决定把 AI 当作学习和理解主题的辅助工具。" }, { texto: "我根据研究和自己的知识来写论文，不太依赖自动化工具。", resultado: "你重视批判性思维和个人创作。" }] },
      { enunciado: "在讨论中，同学们辩论 AI 会如何改变就业市场。你会怎么站队？", alternativas: [{ texto: "AI 能创造新机会，但必须保护工人并尊重人。", resultado: "你理解技术与社会正义需要共同前进。" }, { texto: "AI 可以创造新工作，并帮助人们发展新技能。", resultado: "你相信创新在被正确引导时能扩大机会。" }] },
      { enunciado: "你需要创作一张代表你对 AI 看法的图片。你会怎么做？", alternativas: [{ texto: "我用传统设计工具手工创作，保留自己的视角。", resultado: "你重视人类创造力和创作过程的控制。" }, { texto: "我用 AI 图片生成器探索新想法和不同表达方式。", resultado: "你接受 AI 作为创意工具，但前提是带着目的和谨慎。" }] },
      { enunciado: "你的生物小组要交作业，其中一人决定用 AI 生成大部分文本。问题是内容和聊天机器人太像，而且没有复核。你会怎么做？", alternativas: [{ texto: "我仔细检查每一处，修正错误并加入自己的想法，确保质量和原创性。", resultado: "你意识到技术有用，但批判性复核和人类作者身份依然至关重要。" }, { texto: "我接受聊天机器人生成的文本，就当它是最终结论，因为 AI 已经解决了困难部分。", resultado: "你还需要提高对验证和个性化生成内容重要性的认识。" }] },
      { enunciado: "你收到一篇关于 AI 的争议性新闻，你意识到它可能是虚假或夸大的。你会怎么反应？", alternativas: [{ texto: "我核对其他来源，质疑数据，并先理解背景后再分享信息。", resultado: "你意识到信息即使传播很快，也必须被批判性地分析。" }, { texto: "我分享它，因为看起来很有趣，能吸引人们的注意。", resultado: "你需要更重视在网络上传播内容前核实事实。" }] },
      { enunciado: "在一周里，你发现 AI 已经出现在学习、工作和娱乐等日常任务中。你打算如何使用它？", alternativas: [{ texto: "作为学习、创作和整理想法的辅助工具，同时保持批判性思维和责任感。", resultado: "你选择有意识地使用 AI，融合创造力、伦理和人类反思。" }, { texto: "把它当作万能解决方案，不质疑局限、错误或社会影响。", resultado: "你还需要更平衡地看待技术的边界。" }] }
    ]
  },
  hindi: {
    titulo: "आप AI के भविष्य का फैसला करते हैं",
    introducao: "2049 में...",
    resumo: " संक्षेप में, AI तब सबसे उपयोगी होगी जब इसका उपयोग नैतिकता, आलोचनात्मक सोच और मानव रचनात्मकता के साथ किया जाए।",
    padrao: "आप अभी भी AI की भूमिका पर विचार करना शुरू कर रहे हैं।",
    perguntas: [
      { enunciado: "आपने एक ऐसी टूल को देखा है जो सवालों के जवाब देती है, चित्र बनाती है और कुछ ही सेकंड में लेख तैयार करती है। आपकी पहली प्रतिक्रिया क्या है?", alternativas: [{ texto: "यह बहुत रोचक है, लेकिन मुझे इसे जिम्मेदारी से उपयोग करना समझना होगा।", resultado: "आप तकनीक के सामने जिज्ञासा और जिम्मेदारी के साथ प्रतिक्रिया दे रहे हैं।" }, { texto: "यह शानदार लगता है और यह लोगों की जिंदगी बदल सकता है।", resultado: "आपने AI की सकारात्मक क्षमता देखी और उसे ज्ञान का सहयोगी समझा।" }] },
      { enunciado: "टेक्नोलॉजी की कक्षा में, शिक्षक आपसे AI के शिक्षा में उपयोग पर एक पेपर लिखने के लिए कहते हैं। आप क्या करेंगे?", alternativas: [{ texto: "मैं AI का उपयोग प्रासंगिक जानकारी खोजने और सामग्री को सरल भाषा में फिर से लिखने के लिए करता हूँ, जबकि स्रोत भी जाँचता हूँ।", resultado: "आपने AI को सीखने और विषय को बेहतर समझने के सहायक के रूप में अपनाया।" }, { texto: "मैं अपने शोध और अपने ज्ञान के आधार पर पेपर लिखता हूँ, बिना स्वचालित टूल पर बहुत अधिक निर्भर हुए।", resultado: "आप आलोचनात्मक सोच और व्यक्तिगत लेखन को महत्व देते हैं।" }] },
      { enunciado: "चर्चा के दौरान, कक्षा में AI रोजगार बाजार को कैसे बदल सकता है, इस पर बहस होती है। आप किस पक्ष में हैं?", alternativas: [{ texto: "AI नए अवसर पैदा कर सकता है, लेकिन इसका उपयोग श्रमिकों की सुरक्षा और लोगों के सम्मान के साथ होना चाहिए।", resultado: "आप समझते हैं कि तकनीक और सामाजिक न्याय साथ-साथ चलना चाहिए।" }, { texto: "AI नए रोजगार बना सकता है और लोगों को नई कौशल विकसित करने में मदद कर सकता है।", resultado: "आप मानते हैं कि सही मार्गदर्शन में नवाचार अवसरों का विस्तार कर सकता है।" }] },
      { enunciado: "आपको AI के बारे में अपने विचार को दर्शाने वाली एक तस्वीर बनानी है। आप कौन-सा रास्ता चुनते हैं?", alternativas: [{ texto: "मैं पारंपरिक डिज़ाइन टूल का उपयोग करके вруч से कुछ बनाता हूँ, अपनी दृष्टि के साथ।", resultado: "आप मानव रचनात्मकता और रचनात्मक प्रक्रिया पर नियंत्रण को महत्व देते हैं।" }, { texto: "मैं AI इमेज जनरेटर का उपयोग करके नई विचारधाराएँ और अलग अभिव्यक्तियाँ खोजता हूँ।", resultado: "आप AI को रचनात्मक उपकरण के रूप में स्वीकार करते हैं, बशर्ते इसका उद्देश्य और सावधानी के साथ उपयोग किया जाए।" }] },
      { enunciado: "आपके बायोलॉजी ग्रुप को प्रोजेक्ट जमा करना है, और एक व्यक्ति ने AI का उपयोग करके अधिकांश लेख तैयार कर लिया है। समस्या यह है कि सामग्री चैटबॉट जैसी दिखाई देती है और समीक्षा नहीं हुई है। आप क्या करेंगे?", alternativas: [{ texto: "मैं सब कुछ ध्यान से रिव्यू करता हूँ, गलतियाँ सुधारता हूँ और अपनी विचारधारा जोड़ता हूँ ताकि गुणवत्ता और मौलिकता बनी रहे।", resultado: "आप समझते हैं कि तकनीक उपयोगी है, लेकिन आलोचनात्मक समीक्षा और मानव लेखकत्व अभी भी आवश्यक है।" }, { texto: "मैं चैटबॉट का टेक्स्ट स्वीकार कर लेता हूँ मानो यह अंतिम निष्कर्ष हो, क्योंकि AI ने कठिन हिस्सा हल कर दिया है।", resultado: "आपको उत्पन्न सामग्री की सत्यापन और व्यक्तिगतकरण की अहमियत के बारे में अधिक जागरूकता विकसित करने की जरूरत है।" }] },
      { enunciado: "आपको AI के बारे में बहुत विवादास्पद खबर मिलती है और आपको लगता है कि यह झूठी या अतिरंजित हो सकती है। आप कैसे प्रतिक्रिया देंगे?", alternativas: [{ texto: "मैं अन्य स्रोतों की जांच करता हूँ, डेटा को सवाल में डालता हूँ, और साझा करने से पहले संदर्भ समझता हूँ।", resultado: "आप समझते हैं कि जानकारी का आलोचनात्मक रूप से विश्लेषण करना आवश्यक है, भले ही वह तेजी से आ रही हो।" }, { texto: "मैं खबर साझा कर देता हूँ, क्योंकि यह रोचक लगती है और लोगों का ध्यान आकर्षित कर सकती है।", resultado: "आपको ऑनलाइन सामग्री साझा करने से पहले तथ्य सत्यापित करने का महत्व समझना चाहिए।" }] },
      { enunciado: "एक सप्ताह के दौरान, आपको पता चलता है कि AI रोजमर्रा की गतिविधियों जैसे पढ़ाई, काम और मनोरंजन में मौजूद है। आप इसका उपयोग कैसे करना चाहते हैं?", alternativas: [{ texto: "सीखने, रचनात्मकता और विचारों के संगठन के लिए सहायक के रूप में, हमेशा आलोचनात्मक सोच और जिम्मेदारी के साथ।", resultado: "आप AI का विवेकपूर्ण उपयोग चुनते हैं, जिसमें रचनात्मकता, नैतिकता और मानव चिंतन एक साथ हो।" }, { texto: "सब कुछ का जादुई समाधान मानकर, सीमाओं, गलतियों और सामाजिक प्रभावों पर सवाल किए बिना।", resultado: "आपको तकनीक की सीमाओं के बारे में अधिक संतुलित दृष्टिकोण विकसित करना होगा।" }] }
    ]
  },
  espanhol: {
    titulo: "Tú decides el futuro de la IA",
    introducao: "En 2049...",
    resumo: " En resumen, la IA será más útil cuando se use con ética, pensamiento crítico y creatividad humana.",
    padrao: "Todavía estás empezando a reflexionar sobre el papel de la IA en el futuro.",
    perguntas: [
      { enunciado: "Acabas de descubrir una herramienta que responde preguntas, crea imágenes y produce textos en segundos. ¿Cuál es tu primer pensamiento?", alternativas: [{ texto: "Es fascinante, pero necesito entender cómo usarlo de forma responsable.", resultado: "Respondiste con curiosidad y responsabilidad ante la tecnología." }, { texto: "Parece increíble y puede transformar la vida de las personas.", resultado: "Viste el potencial positivo de la IA y la imaginaste como aliada del conocimiento." }] },
      { enunciado: "En la clase de tecnología, la profesora te pide que realices un trabajo sobre el uso de la IA en la educación. ¿Qué haces?", alternativas: [{ texto: "Uso IA para encontrar información relevante y reformular el contenido en un lenguaje más claro, siempre verificando las fuentes.", resultado: "Decidiste usar la IA como apoyo para aprender y comprender mejor el tema." }, { texto: "Escribo el trabajo con base en investigaciones y mi propio conocimiento, sin depender demasiado de herramientas automatizadas.", resultado: "Valoras el pensamiento crítico y la autoría personal en la construcción del conocimiento." }] },
      { enunciado: "Durante la discusión, el grupo debate cómo la IA puede cambiar el mercado laboral. ¿Cómo te posicionas?", alternativas: [{ texto: "La IA puede generar nuevas oportunidades, pero debe usarse con protección para los trabajadores y respeto por las personas.", resultado: "Entiendes que la tecnología y la justicia social deben avanzar juntas." }, { texto: "La IA puede crear nuevos empleos y ayudar a las personas a desarrollar nuevas habilidades.", resultado: "Crees que la innovación puede ampliar oportunidades cuando está bien orientada." }] },
      { enunciado: "Necesitas crear una imagen que represente lo que piensas sobre la IA. ¿Qué camino eliges?", alternativas: [{ texto: "Uso una herramienta de diseño tradicional para crear algo manualmente y con mi propia visión.", resultado: "Valoras la expresión creativa humana y el control del proceso creativo." }, { texto: "Uso un generador de imágenes con IA para explorar ideas nuevas y diferentes formas de expresión.", resultado: "Aceptas la IA como herramienta creativa, siempre que se use con intención y cuidado." }] },
      { enunciado: "Tu grupo de biología debe entregar un trabajo y una persona decidió usar IA para producir gran parte del texto. El problema es que el contenido se parece mucho a un chatbot y no está revisado. ¿Qué haces?", alternativas: [{ texto: "Reviso todo con atención, corrijo errores y agrego ideas propias para mantener la calidad y la originalidad.", resultado: "Comprendes que la tecnología es útil, pero la revisión crítica y la autoría humana siguen siendo esenciales." }, { texto: "Acepto el texto del chatbot como si fuera la conclusión final, porque la IA ya resolvió la parte difícil.", resultado: "Todavía necesitas desarrollar más conciencia sobre la importancia de validar y personalizar el contenido generado." }] },
      { enunciado: "Recibes una noticia muy polémica sobre la IA y te das cuenta de que puede ser falsa o exagerada. ¿Cómo reaccionas?", alternativas: [{ texto: "Verifico otras fuentes, cuestiono los datos y busco entender el contexto antes de compartir cualquier información.", resultado: "Reconoces que la información necesita analizarse críticamente, aunque llegue a gran velocidad." }, { texto: "Compartes la noticia porque parece interesante y puede captar la atención de la gente.", resultado: "Necesitas reforzar la importancia de verificar hechos antes de divulgar contenidos en internet." }] },
      { enunciado: "A lo largo de una semana, te das cuenta de que la IA está presente en tareas cotidianas como estudiar, trabajar y entretenerse. ¿Cómo piensas usarla?", alternativas: [{ texto: "Como apoyo para aprender, crear y organizar ideas, siempre con sentido crítico y responsabilidad.", resultado: "Eliges un uso consciente de la IA, combinando creatividad, ética y reflexión humana." }, { texto: "Como solución mágica para todo, sin cuestionar limitaciones, errores o impactos sociales.", resultado: "Todavía necesitas desarrollar una visión más equilibrada sobre los límites de la tecnología." }] }
    ]
  },
  frances: {
    titulo: "Tu décides de l'avenir de l'IA",
    introducao: "En 2049...",
    resumo: " En résumé, l'IA sera plus utile si elle est utilisée avec éthique, esprit critique et créativité humaine.",
    padrao: "Tu commences encore à réfléchir au rôle de l'IA dans le futur.",
    perguntas: [
      { enunciado: "Tu viens de découvrir un outil qui répond aux questions, crée des images et produit des textes en quelques secondes. Quelle est ta première pensée ?", alternativas: [{ texto: "C'est fascinant, mais j'ai besoin de comprendre comment l'utiliser de manière responsable.", resultado: "Tu as réagi avec curiosité et responsabilité face à la technologie." }, { texto: "C'est incroyable et peut transformer la vie des gens.", resultado: "Tu as vu le potentiel positif de l'IA et l'as imaginée comme une alliée du savoir." }] },
      { enunciado: "En cours de technologie, le professeur te demande de rédiger un travail sur l'utilisation de l'IA dans l'éducation. Que fais-tu ?", alternativas: [{ texto: "J'utilise l'IA pour trouver des informations pertinentes et reformuler le contenu dans un langage plus clair, tout en vérifiant les sources.", resultado: "Tu as choisi d'utiliser l'IA comme outil d'apprentissage et de compréhension du sujet." }, { texto: "Je rédige le travail à partir de mes recherches et de ma propre connaissance, sans dépendre trop des outils automatisés.", resultado: "Tu accordes de l'importance à la pensée critique et à l'authenticité personnelle." }] },
      { enunciado: "Pendant la discussion, la classe débat de la manière dont l'IA peut changer le marché du travail. Où te situes-tu ?", alternativas: [{ texto: "L'IA peut créer de nouvelles opportunités, mais elle doit être utilisée avec protection des travailleurs et respect des personnes.", resultado: "Tu comprends que la technologie et la justice sociale doivent avancer ensemble." }, { texto: "L'IA peut créer de nouveaux emplois et aider les gens à développer de nouvelles compétences.", resultado: "Tu crois que l'innovation peut élargir les opportunités lorsqu'elle est bien orientée." }] },
      { enunciado: "Tu dois créer une image qui représente ce que tu penses de l'IA. Quel chemin choisis-tu ?", alternativas: [{ texto: "J'utilise un outil de design traditionnel pour créer quelque chose manuellement et avec ma propre vision.", resultado: "Tu valorises la créativité humaine et le contrôle du processus créatif." }, { texto: "J'utilise un générateur d'images IA pour explorer de nouvelles idées et différentes formes d'expression.", resultado: "Tu acceptes l'IA comme outil créatif, tant qu'elle est utilisée avec intention et précaution." }] },
      { enunciado: "Ton groupe de biologie doit rendre un travail et une personne a décidé d'utiliser l'IA pour produire la majeure partie du texte. Le problème est que le contenu ressemble beaucoup à un chatbot et n'a pas été relu. Que fais-tu ?", alternativas: [{ texto: "Je relis tout avec attention, corrige les erreurs et ajoute mes propres idées pour garder la qualité et l'originalité.", resultado: "Tu réalises que la technologie est utile, mais la relecture critique et l'auteur humain restent essentiels." }, { texto: "J'accepte le texte du chatbot comme s'il s'agissait de la conclusion finale, parce que l'IA a déjà résolu la partie difficile.", resultado: "Tu dois encore développer une meilleure conscience de l'importance de valider et de personnaliser le contenu généré." }] },
      { enunciado: "Tu reçois une news très controversée sur l'IA et tu réalises qu'elle peut être fausse ou exagérée. Comment réagis-tu ?", alternativas: [{ texto: "Je vérifie d'autres sources, je questionne les données et je cherche le contexte avant de partager des informations.", resultado: "Tu reconnais que l'information doit être analysée de manière critique, même si elle arrive très vite." }, { texto: "Je partage la news parce qu'elle semble intéressante et peut attirer l'attention.", resultado: "Tu dois renforcer l'importance de vérifier les faits avant de diffuser du contenu en ligne." }] },
      { enunciado: "Au fil d'une semaine, tu réalises que l'IA est présente dans des tâches quotidiennes comme l'étude, le travail et le divertissement. Comment envisages-tu de l'utiliser ?", alternativas: [{ texto: "Comme aide pour apprendre, créer et organiser des idées, toujours avec esprit critique et responsabilité.", resultado: "Tu choisis une utilisation consciente de l'IA, combinant créativité, éthique et réflexion humaine." }, { texto: "Comme solution miracle pour tout, sans remettre en question les limites, les erreurs ou les impacts sociaux.", resultado: "Tu dois encore développer une vision plus équilibrée des limites de la technologie." }] }
    ]
  },
  arabe: {
    titulo: "أنت تقرر مستقبل الذكاء الاصطناعي",
    introducao: "في عام 2049...",
    resumo: " باختصار، سيكون الذكاء الاصطناعي أكثر فائدة عندما يُستخدم مع الأخلاق والتفكير النقدي والإبداع البشري.",
    padrao: "لا تزال في بداية التفكير في دور الذكاء الاصطناعي في المستقبل.",
    perguntas: [
      { enunciado: "أنت vừa اكتشفت أداة تجيب على الأسئلة وتولد الصور وتنتج نصوصًا في ثوانٍ. ما أول فكرة تطرأ على ذهنك؟", alternativas: [{ texto: "هذا مثير للإعجاب، لكني أحتاج إلى فهم كيفية استخدامه بشكل مسؤول.", resultado: "استجبت بح curiosity والاستجابة والمسؤولية تجاه التكنولوجيا." }, { texto: "يبدو هذا رائعًا ويمكن أن يغيّر حياة الناس.", resultado: "رأيت الإمكانات الإيجابية للذكاء الاصطناعي وتخيلته كحليف للمعرفة." }] },
      { enunciado: "في درس التكنولوجيا، يطلب منك المعلم كتابة ورقة عن استخدام الذكاء الاصطناعي في التعليم. ماذا تفعل؟", alternativas: [{ texto: "أستخدم الذكاء الاصطناعي للعثور على معلومات ذات صلة وإعادة صياغة المحتوى بلغة أوضح مع التحقق من المصادر.", resultado: "قررت استخدام الذكاء الاصطناعي كأداة لدعم التعلم وفهم الموضوع بشكل أفضل." }, { texto: "أكتب الورقة بناءً على الأبحاث ومعرفتي الخاصة، دون الاعتماد كثيرًا على الأدوات الآلية.", resultado: "أنت تقدّر التفكير النقدي والأصالة الشخصية في بناء المعرفة." }] },
      { enunciado: "خلال النقاش، تناقش الصف كيف يمكن للذكاء الاصطناعي تغيير سوق العمل. ما موقفك؟", alternativas: [{ texto: "يمكن للذكاء الاصطناعي خلق فرص جديدة، لكنه يجب استخدامه مع حماية العمال واحترام الناس.", resultado: "تدرك أن التكنولوجيا والعدالة الاجتماعية يجب أن تسيران معًا." }, { texto: "يمكن للذكاء الاصطناعي خلق وظائف جديدة ومساعدة الناس على تطوير مهارات جديدة.", resultado: "تؤمن بأن الابتكار يمكن أن يوسع الفرص عندما يكون موجّهًا بشكل صحيح." }] },
      { enunciado: "تحتاج إلى إنشاء صورة تمثل رأيك في الذكاء الاصطناعي. أي مسار تختار؟", alternativas: [{ texto: "أستخدم أداة تصميم تقليدية لإنشاء شيء يدويًا وبرؤيتي الخاصة.", resultado: "تقدّر الإبداع البشري والتحكم في العملية الإبداعية." }, { texto: "أستخدم مولد صور بالذكاء الاصطناعي لاستكشاف أفكار جديدة وأشكال مختلفة للتعبير.", resultado: "تقبل الذكاء الاصطناعي كأداة إبداعية، بشرط استخدامه بوعي وحرص." }] },
      { enunciado: "يحتاج فريقك في البيولوجيا إلى تسليم مشروع، وقرر أحد الأعضاء استخدام الذكاء الاصطناعي لإنتاج معظم النص. المشكلة أن المحتوى يشبه كثيرًا الروبوت الدردشة ولا تم مراجعته. ماذا تفعل؟", alternativas: [{ texto: "أراجع كل شيء بعناية، أصحح الأخطاء وأضيف أفكاري الشخصية للحفاظ على الجودة والأصالة.", resultado: "تدرك أن التكنولوجيا مفيدة، لكن المراجعة النقدية والكتابة البشرية ما زالتا ضرورية." }, { texto: "أقبل نص الروبوت الدردشة كما لو كان النتيجة النهائية، لأن الذكاء الاصطناعي قد حل الجزء الصعب بالفعل.", resultado: "ما زلت بحاجة إلى تطوير وعي أكبر بأهمية التحقق من المحتوى المُنتج وتخصيصه." }] },
      { enunciado: "تتلقى خبرًا مثيرًا للجدل عن الذكاء الاصطناعي وتدرك أنه قد يكون كاذبًا أو مبالغًا فيه. كيف تتصرف؟", alternativas: [{ texto: "أتحقق من مصادر أخرى، وأستفسر عن البيانات، وأبحث عن السياق قبل مشاركة أي معلومة.", resultado: "تدرك أن المعلومات يجب تحليلها بشكل نقدي حتى عندما تصل بسرعة." }, { texto: "أشارك الخبر لأنّه يبدو مثيرًا للاهتمام وقد يلفت انتباه الناس.", resultado: "تحتاج إلى تعزيز أهمية التحقق من الحقائق قبل نشر المحتوى عبر الإنترنت." }] },
      { enunciado: "على مدار أسبوع، تدرك أن الذكاء الاصطناعي موجود في المهام اليومية مثل الدراسة والعمل والترفيه. كيف تنوي استخدامه؟", alternativas: [{ texto: "كأداة لدعم التعلم والإبداع وتنظيم الأفكار، دائمًا مع التفكير النقدي والمسؤولية.", resultado: "تختار استخدامًا واعيًا للذكاء الاصطناعي يجمع بين الإبداع والأخلاق والتفكير البشري." }, { texto: "كحل سحري لكل شيء، دون طرح أسئلة حول القيود والأخطاء والتأثيرات الاجتماعية.", resultado: "ما زلت بحاجة إلى تطوير رؤية أكثر توازنًا حول حدود التكنولوجيا." }] }
    ]
  },
  bengali: {
    titulo: "আপনি AI-র ভবিষ্যত ঠিক করেন",
    introducao: "2049 সালে...",
    resumo: " সংক্ষেপে, AI তখনই সবচেয়ে উপযোগী হবে যখন এটি নৈতিকতা, সমালোচনামূলক চিন্তাভাবনা এবং মানব সৃজনশীলতার সাথে ব্যবহৃত হয়।",
    padrao: "আপনি এখনও AI-এর ভবিষ্যতে ভূমিকার ওপর চিন্তা শুরু করেছেন।",
    perguntas: [
      { enunciado: "আপনি একটি টুল খুঁজে পেলেন যা প্রশ্নের উত্তর দেয়, ছবি তৈরি করে এবং কয়েক সেকেন্ডে লেখা তৈরি করে। আপনার প্রথম চিন্তা কী?", alternativas: [{ texto: "এটি খুব আকর্ষণীয়, কিন্তু আমি এটি দায়িত্বশীলভাবে কীভাবে ব্যবহার করব তা বুঝতে চাই।", resultado: "আপনি প্রযুক্তির সামনে কৌতূহল ও দায়িত্ব নিয়ে প্রতিক্রিয়া জানিয়েছেন।" }, { texto: "এটি বেশ চমৎকার এবং মানুষদের জীবন বদলে দিতে পারে।", resultado: "আপনি AI-এর ইতিবাচক সম্ভাবনা দেখেছেন এবং এটিকে জ্ঞানের সহচর হিসেবে কল্পনা করেছেন।" }] },
      { enunciado: "টেকনোলজি ক্লাসে, শিক্ষক আপনাকে শিক্ষা ব্যবস্থায় AI-এর ব্যবহার নিয়ে একটি প্রবন্ধ লিখতে বলেন। আপনি কী করেন?", alternativas: [{ texto: "আমি AI ব্যবহার করে প্রাসঙ্গিক তথ্য খুঁজে বের করি এবং বিষয়টিকে সহজ ভাষায় পুনর্গঠন করি, তবে উৎসগুলো যাচাই করে থাকি।", resultado: "আপনি AI-কে শিখতে এবং বিষয়টি ভালোভাবে বুঝতে সহায়ক হিসেবে ব্যবহার করার সিদ্ধান্ত নিয়েছেন।" }, { texto: "আমি নিজের গবেষণা ও জ্ঞানের ওপর ভিত্তি করে প্রবন্ধ লিখি, স্বয়ংক্রিয় সরঞ্জামের ওপর খুব বেশি নির্ভর করি না।", resultado: "আপনি সমালোচনামূলক চিন্তাভাবনা ও ব্যক্তিগত লেখনীকে গুরুত্ব দেন।" }] },
      { enunciado: "আলোচনায়, শ্রেণি AI কীভাবে কাজের বাজারকে বদলে দিতে পারে তা নিয়ে আলোচনা করে। আপনি কিসের পক্ষে থাকেন?", alternativas: [{ texto: "AI নতুন সুযোগ সৃষ্টি করতে পারে, তবে শ্রমিকদের সুরক্ষা ও মানুষের সম্মান বজায় রেখে ব্যবহার করতে হবে।", resultado: "আপনি বুঝতে পেরেছেন প্রযুক্তি ও সামাজিক ন্যায় একইসাথে এগোতে হবে।" }, { texto: "AI নতুন কাজ সৃষ্টি করতে পারে এবং মানুষকে নতুন দক্ষতা বিকাশে সাহায্য করতে পারে।", resultado: "আপনি বিশ্বাস করেন সঠিক নির্দেশনা দিলে উদ্ভাবন নতুন সুযোগ সৃষ্টি করতে পারে।" }] },
      { enunciado: "আপনাকে AI সম্পর্কে নিজের ভাবনার ছবি তৈরি করতে হবে। আপনি কোন পথ বেছে নেন?", alternativas: [{ texto: "আমি ঐতিহ্যবাহী ডিজাইন টুল ব্যবহার করে নিজের দৃষ্টিতে নিজে হাতে কিছু তৈরি করি।", resultado: "আপনি মানব সৃজনশীলতা ও সৃষ্টিকর্মের নিয়ন্ত্রণকে গুরুত্ব দেন।" }, { texto: "আমি AI ইমেজ জেনারেটর ব্যবহার করে নতুন ধারণা ও বিভিন্ন প্রকাশের রূপ অন্বেষণ করি।", resultado: "আপনি AI-কে সৃজনশীল টুল হিসেবে গ্রহণ করেন, যদি তা পরিকল্পিত ও সতর্কতার সাথে ব্যবহার করা হয়।" }] },
      { enunciado: "আপনার জীববিজ্ঞান দলের কাজ জমা দিতে হবে, আর একজন সদস্য AI ব্যবহার করে বেশিরভাগ লেখা তৈরি করেছে। সমস্যা হলো লেখা চ্যাটবটের মতো খুব মিলিয়ে গেছে এবং তা পর্যালোচনা করা হয়নি। আপনি কী করেন?", alternativas: [{ texto: "আমি সবকিছু মনোযোগ দিয়ে পর্যালোচনা করি, ভুল ঠিক করি এবং নিজস্ব ধারণা যোগ করি যাতে মান ও মৌলিকতা বজায় থাকে।", resultado: "আপনি বুঝতে পেরেছেন প্রযুক্তি উপকারী, কিন্তু সমালোচনামূলক পর্যালোচনা ও মানব লেখনী এখনও জরুরি।" }, { texto: "আমি চ্যাটবটের লেখা গ্রহণ করি, যেন এটি চূড়ান্ত সিদ্ধান্ত, কারণ AI কঠিন অংশটা সমাধান করে ফেলেছে।", resultado: "আপনি আরও সচেতন হতে হবে যে উৎপন্ন কনটেন্ট যাচাই ও ব্যক্তিগতকরণ কতটা গুরুত্বপূর্ণ।" }] },
      { enunciado: "আপনার কাছে AI সম্পর্কে এক বিতর্কিত খবর আসে, এবং আপনি বুঝতে পারেন এটি ভুল বা অতিরঞ্জিত হতে পারে। আপনি কী করবেন?", alternativas: [{ texto: "আমি অন্য উৎস যাচাই করি, তথ্য নিয়ে প্রশ্ন তুলি, এবং শেয়ার করার আগে বিষয়ের প্রেক্ষাপট বুঝি।", resultado: "আপনি বুঝতে পেরেছেন তথ্যকে যত দ্রুতই আসুক, তা সমালোচনামূলকভাবে বিচার করতে হবে।" }, { texto: "আমি খবরটি শেয়ার করি, কারণ এটি আকর্ষণীয় মনে হয় এবং মানুষের মনোযোগ আকর্ষণ করতে পারে।", resultado: "আপনাকে অনলাইনে কনটেন্ট শেয়ার করার আগে সত্য যাচাই করার গুরুত্ব আরও জোরে অনুভব করতে হবে।" }] },
      { enunciado: "এক সপ্তাহের মধ্যে আপনি বুঝতে পারেন AI প্রতিদিনের কাজ—শিক্ষা, কাজ এবং বিনোদন—এ ছড়িয়ে পড়েছে। আপনি কীভাবে ব্যবহার করতে চান?", alternativas: [{ texto: "শেখা, সৃষ্টি ও ধারণা সংগঠনের জন্য সহায়ক হিসেবে, সব সময় সমালোচনামূলক চিন্তাভাবনা ও দায়িত্বের সাথে।", resultado: "আপনি সচেতনভাবে AI ব্যবহার করতে বেছে নিয়েছেন, যেখানে সৃজনশীলতা, নীতি ও মানব চিন্তাভাবনা একত্রিত হয়।" }, { texto: "সবকিছুর অলৌকিক সমাধান হিসেবে, সীমা, ভুল ও সামাজিক প্রভাব নিয়ে প্রশ্ন না করে।", resultado: "আপনাকে প্রযুক্তির সীমা নিয়ে আরও ভারসাম্যপূর্ণ দৃষ্টিভঙ্গি গড়ে তুলতে হবে।" }] }
    ]
  },
  russo: {
    titulo: "Вы решаете будущее ИИ",
    introducao: "В 2049 году...",
    resumo: " В итоге ИИ будет наиболее полезен, когда он используется с этикой, критическим мышлением и человеческой креативностью.",
    padrao: "Вы только начинаете задумываться о роли ИИ в будущем.",
    perguntas: [
      { enunciado: "Вы только что узнали о инструменте, который отвечает на вопросы, создаёт изображения и генерирует тексты за секунды. Что вы думаете в первую очередь?", alternativas: [{ texto: "Это впечатляет, но мне нужно понять, как использовать это ответственно.", resultado: "Вы отреагировали с любопытством и ответственностью перед технологией." }, { texto: "Это кажется невероятным и может изменить жизнь людей.", resultado: "Вы увидели положительный потенциал ИИ и представили его как союзника знаний." }] },
      { enunciado: "На уроке технологии учитель просит вас написать работу о применении ИИ в образовании. Что вы делаете?", alternativas: [{ texto: "Я использую ИИ, чтобы найти релевантную информацию и пересказать её понятным языком, при этом проверяя источники.", resultado: "Вы решили использовать ИИ как поддержку для обучения и лучшего понимания темы." }, { texto: "Я пишу работу по исследованиям и собственным знаниям, не полагаясь слишком сильно на автоматизированные инструменты.", resultado: "Вы цените критическое мышление и личное авторство в построении знаний." }] },
      { enunciado: "Во время обсуждения класс спорит о том, как ИИ может изменить рынок труда. Как вы позиционируете себя?", alternativas: [{ texto: "ИИ может создавать новые возможности, но должен использоваться с защитой работников и уважением к людям.", resultado: "Вы понимаете, что технология и социальная справедливость должны идти вместе." }, { texto: "ИИ может создавать новые рабочие места и помогать людям развивать новые навыки.", resultado: "Вы верите, что инновации могут расширять возможности при правильном направлении." }] },
      { enunciado: "Вам нужно создать изображение, отражающее ваше мнение об ИИ. Какой путь вы выбираете?", alternativas: [{ texto: "Я использую традиционный графический редактор и создаю что-то руками, с собственной идеей.", resultado: "Вы цените человеческую креативность и контроль над творческим процессом." }, { texto: "Я использую генератор изображений на ИИ, чтобы исследовать новые идеи и формы выражения.", resultado: "Вы принимаете ИИ как творческий инструмент, если используете его осознанно и аккуратно." }] },
      { enunciado: "В вашей группе по биологии нужно сдать работу, и один из участников решил использовать ИИ для написания большей части текста. Проблема в том, что текст слишком похож на чат-бота и не проверен. Что вы делаете?", alternativas: [{ texto: "Я внимательно проверяю всё, исправляю ошибки и добавляю собственные идеи, чтобы сохранить качество и оригинальность.", resultado: "Вы понимаете, что технология полезна, но критическая проверка и человеческое авторство остаются необходимыми." }, { texto: "Я принимаю текст чат-бота как финальный вариант, потому что ИИ уже решил трудную часть.", resultado: "Вам нужно развивать больше осознанности в важности проверки и персонализации созданного контента." }] },
      { enunciado: "Вы получаете спорную новость об ИИ и понимаете, что она может быть ложной или преувеличенной. Как вы реагируете?", alternativas: [{ texto: "Я проверяю другие источники, задаю вопросы данным и выясняю контекст до того, как делиться информацией.", resultado: "Вы понимаете, что информация должна анализироваться критически, даже если она приходит быстро." }, { texto: "Я делюсь новостью, потому что она кажется интересной и может привлечь внимание людей.", resultado: "Вам нужно подчеркнуть важность проверки фактов перед публикацией контента в интернете." }] },
      { enunciado: "В течение недели вы замечаете, что ИИ присутствует в повседневных задачах, таких как учёба, работа и развлечения. Как вы собираетесь его использовать?", alternativas: [{ texto: "Как поддержку для обучения, создания и организации идей, всегда с критическим мышлением и ответственностью.", resultado: "Вы выбираете осознанное использование ИИ, сочетая креативность, этику и человеческую рефлексию." }, { texto: "Как волшебное решение для всего, не задавая вопросов об ограничениях, ошибках и социальных последствиях.", resultado: "Вам нужно развить более сбалансированное представление о границах технологий." }] }
    ]
  },
  portugues: {
    titulo: "Você decide o futuro da IA",
    introducao: "Em 2049...",
    resumo: " Em resumo, a IA será mais útil quando for usada com ética, pensamento crítico e criatividade humana.",
    padrao: "Você ainda está começando a refletir sobre o papel da IA no futuro.",
    perguntas: [
      { enunciado: "Você acaba de conhecer uma ferramenta que responde perguntas, cria imagens e produz textos em segundos. Qual é o seu primeiro pensamento?", alternativas: [{ texto: "É fascinante, mas preciso entender como usar isso de forma responsável.", resultado: "Você reagiu com curiosidade e responsabilidade diante da tecnologia." }, { texto: "Isso parece incrível e pode transformar a vida das pessoas.", resultado: "Você viu o potencial positivo da IA e a imaginou como aliada do conhecimento." }] }
    ]
  },
  indonesio: {
    titulo: "Kamu menentukan masa depan AI",
    introducao: "Pada 2049...",
    resumo: " Singkatnya, AI akan paling bermanfaat jika digunakan dengan etika, berpikir kritis, dan kreativitas manusia.",
    padrao: "Kamu masih mulai merenungkan peran AI di masa depan.",
    perguntas: [
      { enunciado: "Kamu baru saja menemukan alat yang menjawab pertanyaan, membuat gambar, dan menghasilkan teks dalam hitungan detik. Apa pikiran pertama kamu?", alternativas: [{ texto: "Ini menakjubkan, tapi saya perlu memahami cara menggunakannya secara bertanggung jawab.", resultado: "Kamu bereaksi dengan rasa ingin tahu dan tanggung jawab terhadap teknologi." }, { texto: "Ini tampak luar biasa dan bisa mengubah kehidupan orang.", resultado: "Kamu melihat potensi positif AI dan membayangkannya sebagai sekutu pengetahuan." }] },
      { enunciado: "Di kelas teknologi, guru meminta kamu menulis tugas tentang penggunaan AI dalam pendidikan. Apa yang kamu lakukan?", alternativas: [{ texto: "Saya menggunakan AI untuk mencari informasi yang relevan dan menyusun ulang konten dengan bahasa yang lebih jelas sambil tetap mengecek sumbernya.", resultado: "Kamu memutuskan menggunakan AI sebagai pendukung untuk belajar dan memahami topik dengan lebih baik." }, { texto: "Saya menulis tugas berdasarkan riset dan pengetahuan saya sendiri, tanpa terlalu bergantung pada alat otomatis.", resultado: "Kamu menghargai berpikir kritis dan kepenulisan pribadi dalam membangun pengetahuan." }] },
      { enunciado: "Saat diskusi, kelas membahas bagaimana AI bisa mengubah pasar kerja. Bagaimana posisi kamu?", alternativas: [{ texto: "AI bisa menciptakan peluang baru, tapi harus digunakan dengan perlindungan bagi pekerja dan penghormatan terhadap manusia.", resultado: "Kamu memahami bahwa teknologi dan keadilan sosial harus bergerak bersama." }, { texto: "AI bisa menciptakan pekerjaan baru dan membantu orang mengembangkan keterampilan baru.", resultado: "Kamu percaya inovasi dapat memperluas peluang ketika diarahkan dengan baik." }] },
      { enunciado: "Kamu perlu membuat gambar yang menggambarkan pendapatmu tentang AI. Pilihan apa yang kamu ambil?", alternativas: [{ texto: "Saya menggunakan alat desain tradisional untuk membuat sesuatu secara manual dengan visi saya sendiri.", resultado: "Kamu menghargai kreativitas manusia dan kontrol atas proses kreatif." }, { texto: "Saya menggunakan generator gambar AI untuk mengeksplorasi ide baru dan bentuk ekspresi yang berbeda.", resultado: "Kamu menerima AI sebagai alat kreatif, asalkan digunakan dengan niat dan hati-hati." }] },
      { enunciado: "Kelompok biologi kamu harus menyerahkan tugas, dan salah satu teman memutuskan untuk memakai AI untuk menghasilkan sebagian besar teks. Masalahnya, kontennya sangat mirip dengan chatbot dan belum ditinjau. Apa yang kamu lakukan?", alternativas: [{ texto: "Saya meninjau semuanya dengan teliti, memperbaiki kesalahan, dan menambahkan ide saya sendiri agar kualitas dan orisinalitas tetap terjaga.", resultado: "Kamu menyadari bahwa teknologi berguna, tetapi tinjauan kritis dan kepenulisan manusia tetap penting." }, { texto: "Saya menerima teks chatbot seolah-olah itu adalah kesimpulan akhir, karena AI sudah menyelesaikan bagian sulitnya.", resultado: "Kamu masih perlu mengembangkan lebih banyak kesadaran tentang pentingnya memvalidasi dan mempersonalisasi konten yang dihasilkan." }] },
      { enunciado: "Kamu menerima berita yang sangat kontroversial tentang AI dan sadar bahwa berita itu mungkin salah atau dilebih-lebihkan. Bagaimana kamu bereaksi?", alternativas: [{ texto: "Saya memeriksa sumber lain, mempertanyakan data, dan mencari konteks sebelum membagikan informasi apa pun.", resultado: "Kamu menyadari bahwa informasi harus dianalisis secara kritis, bahkan ketika datang dengan cepat." }, { texto: "Saya membagikan berita itu karena tampak menarik dan bisa menarik perhatian orang.", resultado: "Kamu perlu menegaskan pentingnya memeriksa fakta sebelum menyebarkan konten online." }] },
      { enunciado: "Selama seminggu, kamu sadar AI hadir dalam tugas sehari-hari seperti belajar, kerja, dan hiburan. Bagaimana kamu berencana menggunakannya?", alternativas: [{ texto: "Sebagai pendukung untuk belajar, mencipta, dan mengatur ide, selalu dengan pemikiran kritis dan tanggung jawab.", resultado: "Kamu memilih penggunaan AI yang sadar, menggabungkan kreativitas, etika, dan refleksi manusia." }, { texto: "Sebagai solusi ajaib untuk segala hal, tanpa mempertanyakan keterbatasan, kesalahan, atau dampak sosial.", resultado: "Kamu masih perlu mengembangkan pandangan yang lebih seimbang tentang batas teknologi." }] }
    ]
  }
};

textos.portugues.perguntas = textos.pt.perguntas;

const textosInicio = {
  pt: { mensagem: "Antes de começar, informe como prefere ser chamado(a). Seu nome será usado no lugar de “você” durante a pesquisa.", rotulo: "Como podemos chamar você?", iniciar: "Começar pesquisa", placeholder: "Seu nome" },
  portugues: { mensagem: "Antes de começar, informe como prefere ser chamado(a). Seu nome será usado no lugar de “você” durante a pesquisa.", rotulo: "Como podemos chamar você?", iniciar: "Começar pesquisa", placeholder: "Seu nome" },
  en: { mensagem: "Before starting, tell us what to call you. Your name will be used in place of “you” throughout the survey.", rotulo: "What should we call you?", iniciar: "Start survey", placeholder: "Your name" },
  mandarim: { mensagem: "开始前，请告诉我们如何称呼你。问卷中会用你的名字代替“你”。", rotulo: "我们该如何称呼你？", iniciar: "开始问卷", placeholder: "你的名字" },
  hindi: { mensagem: "शुरू करने से पहले बताएं कि आपको किस नाम से बुलाया जाए। सर्वे में “आप” की जगह आपका नाम इस्तेमाल होगा।", rotulo: "हम आपको किस नाम से बुलाएं?", iniciar: "सर्वे शुरू करें", placeholder: "आपका नाम" },
  espanhol: { mensagem: "Antes de empezar, dinos cómo prefieres que te llamemos. Tu nombre sustituirá a “tú” durante la encuesta.", rotulo: "¿Cómo te llamamos?", iniciar: "Empezar encuesta", placeholder: "Tu nombre" },
  frances: { mensagem: "Avant de commencer, indique comment tu souhaites être appelé. Ton prénom remplacera « tu » dans le questionnaire.", rotulo: "Comment devons-nous t'appeler ?", iniciar: "Commencer le questionnaire", placeholder: "Ton prénom" },
  arabe: { mensagem: "قبل البدء، أخبرنا بالاسم الذي تفضّل أن نناديك به. سيحل اسمك محل «أنت» في الاستبيان.", rotulo: "بأي اسم نناديك؟", iniciar: "ابدأ الاستبيان", placeholder: "اسمك" },
  bengali: { mensagem: "শুরু করার আগে, আপনাকে কী নামে ডাকব তা জানান। জরিপে “আপনি”-এর বদলে আপনার নাম ব্যবহার করা হবে।", rotulo: "আপনাকে কী নামে ডাকব?", iniciar: "জরিপ শুরু করুন", placeholder: "আপনার নাম" },
  russo: { mensagem: "Перед началом укажите, как к вам обращаться. В опросе ваше имя заменит слово «вы».", rotulo: "Как к вам обращаться?", iniciar: "Начать опрос", placeholder: "Ваше имя" },
  indonesio: { mensagem: "Sebelum mulai, beri tahu kami ingin dipanggil apa. Nama kamu akan menggantikan kata “kamu” selama survei.", rotulo: "Kami boleh memanggil kamu siapa?", iniciar: "Mulai survei", placeholder: "Nama kamu" }
};

const pronomesPorIdioma = {
  pt: "você",
  portugues: "você",
  en: "you",
  mandarim: "你",
  hindi: "आप",
  espanhol: "tú",
  frances: "tu",
  arabe: "أنت",
  bengali: "আপনি",
  russo: "вы",
  indonesio: "kamu"
};

let idiomaAtual = "portugues";
let atual = 0;
let perguntaAtual;
let escolhas = [];
let nomeParticipante = "";

function obterIdiomaTexto(chave) {
  const chaveTexto = chave === "mandarim" ? "mandarin" : chave;
  return textos[chaveTexto] || textos.portugues || textos.pt;
}

function getPerguntas() {
  return obterIdiomaTexto(idiomaAtual).perguntas || textos.portugues.perguntas || textos.pt.perguntas;
}

function personalizar(texto) {
  const pronome = pronomesPorIdioma[idiomaAtual];
  if (!nomeParticipante || !pronome) return texto;
  if (idiomaAtual === "mandarim") return texto.split(pronome).join(nomeParticipante);
  return texto.replace(new RegExp(`(?<![\\p{L}])${pronome}(?![\\p{L}])`, "giu"), nomeParticipante);
}

function atualizarTelaInicial() {
  const texto = textosInicio[idiomaAtual] || textosInicio.portugues;
  mensagemInicial.textContent = texto.mensagem;
  rotuloNome.textContent = texto.rotulo;
  botaoIniciar.textContent = texto.iniciar;
  campoNome.placeholder = texto.placeholder;
}

function mostraPergunta() {
  const perguntas = getPerguntas();

  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }

  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = personalizar(perguntaAtual.enunciado);
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  escolhas.push(opcaoSelecionada.resultado);
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  const textoAtual = obterIdiomaTexto(idiomaAtual);
  caixaPerguntas.textContent = personalizar(textoAtual.introducao);

  const resultadoFinal = escolhas.length
    ? escolhas.map(personalizar).join(" ") + personalizar(textoAtual.resumo)
    : personalizar(textoAtual.padrao);

  textoResultado.textContent = resultadoFinal;
  caixaAlternativas.textContent = "";
}

function aplicarIdioma(novoIdioma) {
  idiomaAtual = novoIdioma;
  const textoAtual = obterIdiomaTexto(idiomaAtual);
  tituloPrincipal.textContent = personalizar(textoAtual.titulo);
  tituloPesquisa.textContent = personalizar(textoAtual.titulo);
  atualizarTelaInicial();
  atual = 0;
  escolhas = [];
  textoResultado.textContent = "";
  if (!telaPesquisa.hidden) mostraPergunta();
}

formularioNome.addEventListener("submit", (event) => {
  event.preventDefault();
  nomeParticipante = campoNome.value.trim();
  if (!nomeParticipante) {
    campoNome.focus();
    return;
  }

  const titulo = personalizar(obterIdiomaTexto(idiomaAtual).titulo);
  tituloPrincipal.textContent = titulo;
  tituloPesquisa.textContent = titulo;
  telaInicial.hidden = true;
  telaPesquisa.hidden = false;
  mostraPergunta();
});

selectIdioma.addEventListener("change", (event) => {
  aplicarIdioma(event.target.value);
});

selectTema.addEventListener("change", (event) => {
  document.body.dataset.tema = event.target.value;
});

const combinacoesVencedoras = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];
let casasVelha = Array(9).fill("");
let fimVelha = false;
let cartasMemoria = [];
let cartasReveladas = [];
let paresEncontrados = new Set();
let jogadasMemoria = 0;
let memoriaBloqueada = false;
let memoriaIniciada = false;

function vencedorVelha() {
  const combinacao = combinacoesVencedoras.find(([a, b, c]) => casasVelha[a] && casasVelha[a] === casasVelha[b] && casasVelha[a] === casasVelha[c]);
  return combinacao ? casasVelha[combinacao[0]] : "";
}

function atualizarTabuleiroVelha() {
  for (const casa of tabuleiroVelha.children) {
    const indice = Number(casa.dataset.indice);
    casa.textContent = casasVelha[indice];
    casa.disabled = Boolean(casasVelha[indice]) || fimVelha;
    casa.setAttribute("aria-label", `Casa ${indice + 1}${casasVelha[indice] ? `: ${casasVelha[indice]}` : ": vazia"}`);
  }
}

function terminarVelha(marca) {
  if (marca) {
    statusVelha.textContent = marca === "X" ? "Você venceu!" : "O computador venceu.";
    fimVelha = true;
  } else if (casasVelha.every(Boolean)) {
    statusVelha.textContent = "Empate!";
    fimVelha = true;
  }
}

function escolherJogadaComputador() {
  const encontrarJogada = (marca) => {
    for (let indice = 0; indice < casasVelha.length; indice++) {
      if (casasVelha[indice]) continue;
      casasVelha[indice] = marca;
      const ganhou = combinacoesVencedoras.some(([a, b, c]) => casasVelha[a] && casasVelha[a] === casasVelha[b] && casasVelha[a] === casasVelha[c]);
      casasVelha[indice] = "";
      if (ganhou) return indice;
    }
    return -1;
  };

  let jogada = encontrarJogada("O");
  if (jogada < 0) jogada = encontrarJogada("X");
  if (jogada < 0 && !casasVelha[4]) jogada = 4;
  if (jogada < 0) {
    const vazias = [0, 2, 6, 8].filter((indice) => !casasVelha[indice]);
    if (vazias.length) jogada = vazias[Math.floor(Math.random() * vazias.length)];
  }
  if (jogada < 0) {
    const vazias = casasVelha.map((casa, indice) => casa ? -1 : indice).filter((indice) => indice >= 0);
    jogada = vazias[Math.floor(Math.random() * vazias.length)];
  }
  if (jogada >= 0) casasVelha[jogada] = "O";
}

function jogarVelha(indice) {
  if (fimVelha || casasVelha[indice]) return;
  casasVelha[indice] = "X";
  let marca = vencedorVelha();
  terminarVelha(marca);
  if (!fimVelha) {
    escolherJogadaComputador();
    marca = vencedorVelha();
    terminarVelha(marca);
  }
  if (!fimVelha) statusVelha.textContent = "Sua vez: X";
  atualizarTabuleiroVelha();
}

function reiniciarVelha() {
  casasVelha = Array(9).fill("");
  fimVelha = false;
  statusVelha.textContent = "Sua vez: X";
  atualizarTabuleiroVelha();
}

function iniciarTabuleiroVelha() {
  for (let indice = 0; indice < 9; indice++) {
    const casa = document.createElement("button");
    casa.type = "button";
    casa.className = "casa-velha";
    casa.dataset.indice = String(indice);
    casa.addEventListener("click", () => jogarVelha(indice));
    tabuleiroVelha.appendChild(casa);
  }
  atualizarTabuleiroVelha();
}

function renderizarMemoria() {
  tabuleiroMemoria.textContent = "";
  cartasMemoria.forEach((simbolo, indice) => {
    const carta = document.createElement("button");
    const revelada = cartasReveladas.includes(indice);
    const encontrada = paresEncontrados.has(indice);
    carta.type = "button";
    carta.className = `carta-memoria${revelada ? " revelada" : ""}${encontrada ? " encontrada" : ""}`;
    carta.textContent = revelada || encontrada ? simbolo : "?";
    carta.disabled = encontrada || memoriaBloqueada;
    carta.setAttribute("aria-label", revelada || encontrada ? `Carta ${simbolo}` : "Carta fechada");
    carta.addEventListener("click", () => revelarCarta(indice));
    tabuleiroMemoria.appendChild(carta);
  });
}

function embaralharMemoria() {
  cartasMemoria = ["●", "●", "▲", "▲", "■", "■", "★", "★"];
  for (let indice = cartasMemoria.length - 1; indice > 0; indice--) {
    const aleatorio = Math.floor(Math.random() * (indice + 1));
    [cartasMemoria[indice], cartasMemoria[aleatorio]] = [cartasMemoria[aleatorio], cartasMemoria[indice]];
  }
  cartasReveladas = [];
  paresEncontrados = new Set();
  jogadasMemoria = 0;
  memoriaBloqueada = false;
  memoriaIniciada = true;
  statusMemoria.textContent = "Encontre os pares. Jogadas: 0";
  renderizarMemoria();
}

function revelarCarta(indice) {
  if (memoriaBloqueada || cartasReveladas.includes(indice) || paresEncontrados.has(indice)) return;
  cartasReveladas.push(indice);
  renderizarMemoria();
  if (cartasReveladas.length < 2) return;

  jogadasMemoria++;
  const [primeira, segunda] = cartasReveladas;
  if (cartasMemoria[primeira] === cartasMemoria[segunda]) {
    paresEncontrados.add(primeira);
    paresEncontrados.add(segunda);
    cartasReveladas = [];
    if (paresEncontrados.size === cartasMemoria.length) {
      statusMemoria.textContent = `Você encontrou todos os pares em ${jogadasMemoria} jogadas!`;
    } else {
      statusMemoria.textContent = `Par encontrado. Jogadas: ${jogadasMemoria}`;
    }
    renderizarMemoria();
    return;
  }

  statusMemoria.textContent = `Não formou um par. Jogadas: ${jogadasMemoria}`;
  memoriaBloqueada = true;
  setTimeout(() => {
    cartasReveladas = [];
    memoriaBloqueada = false;
    renderizarMemoria();
  }, 700);
}

function alternarJogo(nomeJogo) {
  const abas = document.querySelectorAll(".aba-jogo");
  for (const aba of abas) {
    const ativa = aba.dataset.jogo === nomeJogo;
    aba.classList.toggle("ativa", ativa);
    aba.setAttribute("aria-selected", String(ativa));
  }
  document.querySelector("#jogo-velha").hidden = nomeJogo !== "velha";
  document.querySelector("#jogo-memoria").hidden = nomeJogo !== "memoria";
  if (nomeJogo === "memoria" && !memoriaIniciada) embaralharMemoria();
}

alternarJogos.addEventListener("click", () => {
  painelJogos.hidden = !painelJogos.hidden;
  alternarJogos.setAttribute("aria-expanded", String(!painelJogos.hidden));
});

fecharJogos.addEventListener("click", () => {
  painelJogos.hidden = true;
  alternarJogos.setAttribute("aria-expanded", "false");
  alternarJogos.focus();
});

document.querySelectorAll(".aba-jogo").forEach((aba) => {
  aba.addEventListener("click", () => alternarJogo(aba.dataset.jogo));
});

document.querySelector("#reiniciar-velha").addEventListener("click", reiniciarVelha);
document.querySelector("#reiniciar-memoria").addEventListener("click", embaralharMemoria);
iniciarTabuleiroVelha();

function atualizarRelogio() {
  horaAtual.textContent = new Intl.DateTimeFormat("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).format(new Date());
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);

tituloPrincipal.textContent = obterIdiomaTexto(idiomaAtual).titulo;
atualizarTelaInicial();

const sequenciasDeCliques = new WeakMap();

function registrarCliqueSecreto(titulo) {
  const agora = Date.now();
  const sequencia = sequenciasDeCliques.get(titulo);
  const cliques = sequencia && agora - sequencia.ultimoClique <= 700
    ? sequencia.cliques + 1
    : 1;

  if (cliques === 3) {
    sequenciasDeCliques.delete(titulo);
    titulo.classList.remove("giro-secreto");
    void titulo.offsetWidth;
    titulo.classList.add("giro-secreto");
    return;
  }

  sequenciasDeCliques.set(titulo, { cliques, ultimoClique: agora });
}

tituloPrincipal.addEventListener("click", () => registrarCliqueSecreto(tituloPrincipal));
tituloPesquisa.addEventListener("click", () => registrarCliqueSecreto(tituloPesquisa));
