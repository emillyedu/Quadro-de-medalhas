//linhas informativas do quadro de medalhas

const  urlSite = "https://kenzie-olimpiadas.herokuapp.com/paises" 

fetch(urlSite)
.then(response => response.json())
.then(data => tratarDadosMedalhas(data))


let quadroMedalhas = document.querySelector(".quadro-medalhas")
function criarTemplateLinha(colocacao,country,flag_url,medal_gold,medal_silver,medal_bronze){
    
    // criando linha do quadro
    let linha = document.createElement("div")
    //adicionando classe na linha
    linha.classList.add("linha")

    //colunas
    let coluna_rank = criaColuna_rank(`${colocacao}º`)
    let coluna_country = criaColuna_country(country,flag_url)
    let gold   = criaMedal_gold(medal_gold)
    let silver = criaMedal_silver(medal_silver)
    let bronze = criaMedal_bronze(medal_bronze)
    let totalMedalhas = (medal_gold + medal_silver + medal_bronze)
    let total  = criaMedalTotal(totalMedalhas)
   
    linha.appendChild(coluna_rank)
    linha.appendChild(coluna_country)
    linha.appendChild(gold)
    linha.appendChild(silver)
    linha.appendChild(bronze)
    linha.appendChild(total)

    quadroMedalhas.appendChild(linha)
   
}

function tratarDadosMedalhas(arrayPaises){
    let paisesOrdenados  =  ordenarPaises(arrayPaises)
    for(let i = 0; i<paisesOrdenados.length; i++){
        let pais  = paisesOrdenados[i]
   
        criarTemplateLinha(
            i+1,
            pais.country,
            pais.flag_url,
            pais.medal_gold,
            pais.medal_silver,
            pais.medal_bronze,
        )
    }
   
}

function ordenarPaises(arrayPaises){
    let newArrayPaises = arrayPaises.map((pais)=> pais).sort((a,b) =>  b.medal_gold - a.medal_gold)
    return newArrayPaises
}


//Função rank   
function criaColuna_rank(rank){

    // coluna rank
    let coluna_rank = document.createElement("div")
    coluna_rank.classList.add("coluna" ,"coluna-rank")

    //span titulo rank
    let coluna_rank_titulo = document.createElement("span")
    coluna_rank_titulo.innerText = rank
    coluna_rank.appendChild(coluna_rank_titulo)

    return coluna_rank

}

//funcao country   
function criaColuna_country(country,urlimagem){

    // coluna country
    let coluna_country = document.createElement("div")
    coluna_country.classList.add("coluna" ,"country")

    //span titulo contry
    let coluna_country_titulo = document.createElement("span")
    coluna_country_titulo.innerText = country


    //img country
    let coluna_country_imagem = document.createElement("img")
    coluna_country_imagem.src = urlimagem
    coluna_country_imagem.alt = country
    coluna_country.appendChild(coluna_country_imagem)
    coluna_country.appendChild(coluna_country_titulo)

    return coluna_country

}

//Ffunção medal_gold    
function criaMedal_gold(gold){

    // coluna gold
    let coluna = document.createElement("div")
    coluna.classList.add("coluna" ,"medal_gold")

    //span titulo gold
    let coluna_titulo = document.createElement("span")
    coluna_titulo.innerText = gold
    coluna.appendChild(coluna_titulo)

    return coluna

}

//função  medal_silver    
function criaMedal_silver(silver){

    // coluna silver
    let coluna = document.createElement("div")
    coluna.classList.add("coluna" ,"medal_silver")

    //span titulo silver
    let coluna_titulo = document.createElement("span")
    coluna_titulo.innerText = silver
    coluna.appendChild(coluna_titulo)

    return coluna

}

//função  medal_bronze    
function criaMedal_bronze(bronze){

    // função bronze
    let coluna = document.createElement("div")
    coluna.classList.add("coluna" ,"medal_bronze")

    //span titulo bronze
    let coluna_titulo = document.createElement("span")
    coluna_titulo.innerText = bronze
    coluna.appendChild(coluna_titulo)

    return coluna

}

//função total    
function criaMedalTotal(total){

    // coluna total
    let coluna_total = document.createElement("div")
    coluna_total.classList.add("coluna" ,"total")

    //span titulo total
    let coluna_total_titulo = document.createElement("span")
    coluna_total_titulo.innerText = total
    coluna_total.appendChild(coluna_total_titulo)

    return coluna_total

}
