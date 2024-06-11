function continuar() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você tem duas escolas para se mudar e aprimorar suas habilidades: </h3>';
  formation += ' <img src="imagens1/escola.jpg" class="imagens">';
  formation += '<br>';
  formation += '<button onclick="Escolha1()">Vnc</button>';
  formation += '<button onclick="Escolha2()">Marinete</button>';
  $(".principal").append(formation);
}


function Escolha1() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você vai para vnc mas lá é uma escola bem difícil de ser aceito nos testes do time. Oque você vai fazer? </h3>';
  formation += ' <img src="imagens1/escolad.jpg" class="imagens1">';
  formation += '<br>';
  formation += '<button onclick="Escolha11()">Treinar mais para ter mais chance de ser aceito.</button>';
  formation += '<button onclick="Escolha12()">Tentar e confiar nas suas habilidades</button>';
  $(".principal").append(formation);
}

function Escolha11() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você treinou muito e agora está muito bom. Vai tentar fazer o teste agora?. </h3>'
  formation += ' <img src="imagens1/treinou.jpe" class="imagens2">';
  formation += '<br>'
  formation += '<button onclick="Escolha111()">Sim</button>';
  formation += '<button onclick="Escolha112()">Não</button>';
  $(".principal").append(formation);
}

function Escolha112() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você não faz o teste e o tempo pra fazer o teste acabada. Reinicie o jogo e tente novamente.</h3>';
  formation += '<br>';
  $(".principal").append(formation);
}

function Escolha111() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você tentou fazer e conseguiu ser aceito, todos te trataram muito bem, só que tinha um campeonato bem próximo. </h3>'
  formation += ' <img src="imagens1/Haikyuu.webp" class="imagens3">';
  formation += '<br>'
  formation += '<button onclick="Escolha1111()">Participar do campeonato.</button>';
  formation += '<button onclick="Escolha1112()">Não tentar pois sou beta demais.</button>';
  $(".principal").append(formation);
}

function Escolha1111() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você participou e lá tinha um cara de olho em alguns jogadores, pois queria convocar alguns para seu time, você se destacou entre os demais e ele te chamou para o time dele. </h3>'
  formation += ' <img src="imagens1/conversando.webp" class="imagens4">';
  formation += '<br>'
  formation += '<button onclick="Escolha11111()">Vai aceitar e entrar no time dele.</button>';
  formation += '<button onclick="Escolha11112()">Nega o pedido dele.</button>';
  $(".principal").append(formation);
}

function Escolha1112() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você não tenta e vive sua vida só naquele time ali mesmo. </h3>'
  $(".principal").append(formation);
}

var formation = ''
function Escolha11111() {
  formation += '<br>';
  formation += '<h3> Você entrou no time dele e logo após descobriu que na verdade foi convocado para o sub16 do Japão, mas você precisa ir para outro País.</h3>'
  formation += ' <img src="imagens1/time.jpg" class="imagens5">';
  formation += '<br>'
  formation += '<button onclick="Escolha111111()">Ir para outro País e tentar.</button>';
  formation += '<button onclick="Escolha111112()">Voltar para o seu time antigo.</button>';
  $(".principal").append(formation);
}
var formation = ''
function Escolha11112() {
  formation += '<br>';
  formation += '<h3> Você nega e só fica no time da sua escola, jogando lá até os 18 anos e desistindo do  vôlei. </h3>'
  formation += '<br>'
  $(".principal").append(formation);
}

function Escolha111111() {
  var formation = ''
  formation += '<br>';
  formation += '<h3> Você vai para outro País, treina no sub16 do Japão até os 18 anos e é convocado pro time titular. </h3>'
  formation += '<br>'
  formation += ' <img src="imagens1/japa.webp" class="imagens6">';
  formation += '<button onclick="Escolha1111111()">Aceitar.</button>';
  formation += '<button onclick="Escolha1111112()">Negar.</button>';
  $(".principal").append(formation);
}

function Escolha111112() {
  var formation = ''
  formation += '<br>';
  formation += '<h3> Vocês volta e lá não consegue seguir sua carreira no vôlei. Tente novamente. </h3>'
  formation += '<br>'
  $(".principal").append(formation);
}

function Escolha12() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você tentou e falhou, pois é um time muito forte. Tente novamente. </h3>'
  formation += '<br>'
  $(".principal").append(formation);
}

function Escolha1111111() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você aceita e consegue sua carreira como jogador de vôlei, PARÁBENS VOCÊ CONSEGUIU ACABAR O JOGO!!!. </h3>'
  formation += '<br>'
  formation += ' <img src="imagens1/japao.jpg" class="imagens7">';
  $(".principal").append(formation);
}

function Escolha1111112() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você nega e vive em outro Estado, sendo CLT. Jogue novamente.</h3>'
  formation += '<br>'
  $(".principal").append(formation);
}

function Escolha2() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você foi pro marinete, mas lá é um time muito fraco. Você não conseguiu seguir sua vida como jogador de vôlei. Tente novamente.</h3>';
  formation += '<br>';
  $(".principal").append(formation);
}
