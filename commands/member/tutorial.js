import fs from 'node:fs';

export default {
     commands: ['tutorial', 'virtualbox', 'menu'],
     category: 'member',
     description: 'Muestra el guión de locución para el videotutorial',

     async execute(socket, message, args) {
         const chat = message.chat;

         const roteiroTexto = `╔════════════════════════╗
║  🎙️ *ROTEIRO PARA SEU VÍDEO* 🎙️  ║
╚════════════════════════╝

Jefferson, use este roteiro para narrar seu vídeo enquanto grava a tela do seu PC!

🔴 *PARTE 1: INTRODUÇÃO*
"Fala galera, aqui é o Jefferson dos Anjos! Hoje vou te mostrar o passo a passo direto ao ponto para criar sua própria máquina virtual Linux usando o VirtualBox. Vamos nessa?"

🔵 *PARTE 2: CRIANDO A MÁQUINA*
"Primeiro, abra o VirtualBox e clique no botão 'Nova'. No nome, digite 'Ubuntu Linux'. Na 'Imagem ISO', clique na seta, selecione 'Outro' e busque o arquivo ISO do Linux que você baixou. Clique em Próximo."

🟢 *PARTE 3: MEMÓRIA E CPU*
"Aqui definimos o hardware. Para o Linux rodar liso, mude a Memória Base para pelo menos 2048 MB (2 Gigas). Nos Processadores, coloque 2 CPUs. Clique em Próximo."

🟡 *PARTE 4: DISCO VIRTUAL E INSTALAÇÃO*
"Deixe marcada a opção 'Criar um Novo Disco Rígido Virtual' e mude o tamanho para 25 GB. Clique em Próximo e em Finalizar. Depois clique na seta verde 'Iniciar', escolha 'Try or Install Ubuntu' e configure seu usuário!"

💡 _Dica: Você pode ler esse texto no Clipchamp e usar a voz de IA para narrar por você!_`;

         try {
             await socket.sendMessage(chat, { text: roteiroTexto }, { quoted: message.rawMessage });
         } catch (error) {
             console.error('Erro ao enviar o roteiro:', error);
         }
     }
};
