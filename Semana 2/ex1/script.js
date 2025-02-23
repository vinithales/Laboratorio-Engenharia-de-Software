const data = new Date();

const diasSemana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
const mesesAno = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

const diaSemana = diasSemana[data.getDay()];
const dia = data.getDate();
const mes = mesesAno[data.getMonth()];
const ano = data.getFullYear();

alert( `${diaSemana}, ${dia} de ${mes} de ${ano}`);