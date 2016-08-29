//_______________________________DEPENDÊNCIAS E CONSTANTES DE INICIALIZAÇÃO_________________________________//

var that = this;
var http = require('http');
var https = require('https');
var express = require('express');
var bodyParser = require('body-parser'); // PARA FAZER O PARSE DE CHAMADAS POST RECEBIDAS EM Application/Json
var servidor = express();
var colors = require('colors');
var session = require('client-sessions');
servidor.use(bodyParser.json());
servidor.use(express.static('public')); // PASTA PARA RESOURCES
servidor.set('views', 'views');
servidor.engine('html', require('ejs').renderFile);

const header = {  'Accept' : 'application/json', 
                'X-DreamFactory-Api-Key' : '341274c71662f48c0923149a7b2a59bf022b1e6be220d19d21a504c1ce4350ac',
              };
const sendJsonHeader = {  //'Accept' : 'application/json', 
                'X-DreamFactory-Api-Key' : '341274c71662f48c0923149a7b2a59bf022b1e6be220d19d21a504c1ce4350ac',
                'Content-type' : 'Application/json'
              };
			  
const dreamFac = {
    path: '/api/v2/peker/_table',
    port: 80,
    host: 'localhost'
};

var markers = [];

var updateProcess = function () {
    //setTimeout(updateMarkers(), 10000);
};

var updateMarkers = function () {
    
    var data;
    
    var options = {
        host: dreamFac.host,
        port: dreamFac.port,
        path: dreamFac.path+'/corridas?filter=status%3Daberto',
        method : 'GET',
        headers : header
    };
    
    http.get(options, function(resp) {
        
        resp.on('data', (chunk) => {
            if(JSON.parse(chunk).error){
                console.log(JSON.parse(chunk));
            }else{
                data += chunk;
            }
        });
        
        resp.on('end', () => {
            markers = JSON.parse(data).resource;
        });
    
    });
    
};


servidor.use(session({
  cookieName: 'session',
  secret: 'eIdaj@*&iosj9J0su8AA!#!$%0adaduADUajD',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
  httpOnly: true,
  secure: true,
  ephemeral: true
}));
              
//________________________________________________________________________________________________________//
              
              
              
                           
//-------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------SERVIÇOS---------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------------------//



//servidor.use(express.static('adminPanelSystem/www'));



//_______________________________REQUEST SEM PATH CAI AQUI________________________________________________//

/*servidor.get('/', function (req, res) {
    res.sendFile("/Users/marcoaurelio/Documents/WEB SERVERS/expressApp/public/index.html");
});*/

//________________________________________________________________________________________________________//

/*
servidor.use(function (req, res, next) {
    if (req.path == '/loggedas/' || req.path == '/logoutapp/' || req.path == '/img/cebola.jgp' || req.path == '/google/' || req.path == '/estabs/' || req.path == '/estacs/1' || req.path == '/estacs/' || req.path == '/cadastro/' || req.path == '/islogged/' || req.path == '/favicon.ico' || req.path == '/loginapp/' || req.path == '/login' || req.path == '#/login' || req.path == '/adminpanel#/login') {
        aviso("avisoReq", req, { code : 0});
        next();
    }else{
        if (req.session && (req.session.user || req.session.email)) {
            aviso("avisoReq", req, { code: 1});
            next();
        } else {
            aviso("avisoReq", req, { code: 2 });
            if (req.path == '/estabelecimentos') {
                res.render(session.html);
            } else {
                res.redirect('/login');
                //res.send("PERMISSION DENIED");
                res.end();
            }
        }   
    }
});
*/

servidor.use(express.static('files'));

servidor.use(function (req, res, next) {
    aviso('avisoReq', req, { code: 0 });
    next();
});

servidor.get('/distancia', function (req, res) {
    
    var endo = JSON.stringify(req.query.endo);
    var endd = JSON.stringify(req.query.endd);

    console.log("QUERIES: " + JSON.stringify(req.query));

    //endo = "Rua Brigadeiro Franco - Mercês, Curitiba - PR, Brasil";
    //endd = "Rua Mateus Leme - São Francisco, Curitiba - PR, Brasil";
    
    console.log("ENDO: " + endo);
    console.log("ENDD: " + endd);
    
    var data = "";
    
    var url = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=" + endo + "&destinations=" + endd + "&mode=driving&language=pt-BR&key=AIzaSyCUrkdtuS3vpwQDNZB_A0OEk9VqSqbRFas";
    var URL = encodeURI(url);
    
    https.get(URL, function (resp) {
               
        resp.on('data', (chunk) => {
            if(JSON.parse(chunk).error){
                console.log(JSON.parse(chunk));
            } else {
                data += chunk;
            }
        });
        
        resp.on('end', () => {
            console.log("RESPOSTA DO GOOGLE: " + data);
            //console.log('No more data in response from Google Distance Matrix API.');
            
            var resp = JSON.parse(data);
            console.log("Obj: " + resp);
            if (resp.status == "OK") {
                var resposta = {
                    distancia: ""+resp.rows[0].elements[0].distance.text,
                    valor: Math.ceil((resp.rows[0].elements[0].distance.value / 1000)).toFixed(2),
                    status: 'OK'
                };
                res.send(JSON.stringify(resposta));
            } else {
                var erro = {
                    status: 'erro'
                };
                res.send(erro);
            }
            
        });
    
    }); 

    
});

servidor.post('/aceitar', function (req, res) {
    
});

servidor.get('/markers', function (req, res) {
    res.send(markers);
});

servidor.get('/teste', function (req, res) {
    res.send("DEU CERTO !");
});

servidor.post('/login', function (req, res) {
    console.log(""+req.body);
    userOk(req.body.email, req.body.password, function (ok, user) {
        if (ok) {
            req.session.email = req.body.email;
            req.session.name = user.name;
            req.session.lastname = user.lastname;
            res.redirect('/estafacil');
        } else {
            res.sendStatus(404);
        }
    });
});

servidor.post('/loginapp', function (req, res) {
    console.log(""+JSON.stringify(req.body));
    userOk(req.body.email, req.body.password, function (ok, user) {
        if (ok) {
            req.session.userEmail = user.email;
            req.session.userName = user.name;
            req.session.userId = user.id;
            req.session.userSaldo = user.saldo;
            req.session.userUrlAvatar = user.urlAvatar;
            user.password = null;
            res.send(user);
            console.log(user);
        } else {
            res.sendStatus(404);
        }
    });
});

servidor.get('/logoutapp', function (req, res) {
    req.session = {};
    console.log(req.session);
    res.sendStatus(200);
});


servidor.get('/islogged', function (req, res) {
    console.log("CHAMOU IS LOGGED");
    console.log(req.session);
    if (req.session.userName != undefined && req.session.userEmail != undefined) {
        res.send("yes");
        res.end();
    } else {
        console.log("NO");
        res.send("no");
        res.end();
    }
});


servidor.post('/cadastro', function (req, res) {
    var fakeReq = new Object();
    fakeReq.body = req.body;
    fakeReq.path = '/users';
    fakeReq.params = {
        id: req.params.id
    };
    setDados(fakeReq, res);

});

servidor.get('/login', function (req, res) {
	//res.send("NÃO ESTÁ LOGADO");
    res.render('index.html');
});

servidor.get('/loggedas', function (req, res) {
    res.send({ name: req.session.userName, email: req.session.userEmail, id: req.session.userId, saldo: req.session.userSaldo, urlAvatar: req.session.userUrlAvatar });
});

servidor.get('/favicon.ico', function (req, res) {
    res.sendStatus(200);
    res.end();
});



servidor.get('/*', function (req, res) {
    getDados(req, res);
    console.log(req.path);
});

servidor.post('/*', function (req, res) {
    setDados(req, res);
});

servidor.put('/*', function (req, res) {
    delOrAlterDados(req, res);
});

servidor.delete('/*', function (req, res) {
    delOrAlterDados(req, res);
});




//________________________________________LISTENER_________________________________________________________//

servidor.listen(3000, function () {
  console.log('Peker WebServer listening on port 3000!');
});

//_________________________________________________________________________________________________________//



//--------------------------------------SERVIÇOS---------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------------------//









//-------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------------------//
//----------------------------------------FUNCTIONS------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------------------//



function userOk(email, password, callback) {
    console.log("EMAILLL " + email + "  PASSSSWORD : " + password);
    
    var options = {
        host:  'localhost',
        port:  80,
        //path: "/api/v2/estafacilsql/_table/users?filter=(name='" + user + "') AND (password='" + password + "')",
        path: "/api/v2/estafacilsql/_table/users?filter=(email%3D'"+email+"')%20AND%20(password%3D'"+password+"')",
        method : 'GET',
        headers : header
    };
    
    //console.log("path request " + options.path);
    //console.log("header request "+options.headers);
    
    http.get(options, function(resp) {
        
        //console.log('RESPONSE STATUS: ' + resp.statusCode);
        //console.log('RESPONSE HEADERS: ' + JSON.stringify(resp.headers));
        
        resp.on('data', (chunk) => {
            if(JSON.parse(chunk).error){
                console.log(JSON.parse(chunk));
                callback(false);
            } else if (JSON.stringify(JSON.parse(chunk)).length > 15) {
                console.log(JSON.parse(chunk));
                callback(true, JSON.parse(chunk).resource[0]);
            } else {
                callback(false);
            }
        });
        
        resp.on('end', () => {
            console.log('No more data in response.');
        });
    
    });
    
    
    
}


function pegarLinha(params){
    
    // PARAMETROS => OBRIGATÓRIO : tabela, response  |  OPICIONAL : id, host, porta, header //
    
    if (params.path == '/tables'){
        params.path = '';
    }    
    
    var options = {
        host: (params.host)? params.host : dreamFac.host,
        port: (params.port)? params.port : dreamFac.port,
        path: dreamFac.path+params.path,
        method : 'GET',
        headers : (params.header)? params.header : header
    };
    
    //console.log("path request " + options.path);
    //console.log("header request "+JSON.stringify(options.headers));
    
    http.get(options, function(resp) {
        
        //console.log('RESPONSE STATUS: ' + resp.statusCode);
        //console.log('RESPONSE HEADERS: ' + JSON.stringify(resp.headers));
        
        resp.on('data', (chunk) => {
            if(JSON.parse(chunk).error){
                console.log(JSON.parse(chunk));
                params.res.send({});
            }else{
            params.res.send(JSON.parse(chunk).resource);
            }
        });
        
        resp.on('end', () => {
            //console.log('No more data in response.');
        });
    
    });
    
}






function setarLinha(params){
    
    // PARAMETROS => OBRIGATÓRIO : tabela, response  |  OPICIONAL : id, host, porta, header //
    var options = {
        host: (params.host)? params.host : dreamFac.host,
        port: (params.port)? params.port : dreamFac.port,
        path: dreamFac.path+params.path,
        method : 'POST',
        headers : (params.header)? params.header : header,
        'Content-Type' : 'application/json',
    };
    
    //console.log("path request: " + options.path);
    //console.log("header request : " + JSON.stringify(params.data));
    
    var request = http.request(options, function(resp) {
        
        //console.log('RESPONSE STATUS: ' + resp.statusCode);
        //console.log('RESPONSE HEADERS: ' + JSON.stringify(resp.headers));
        
        resp.on('data', (chunk) => {
            if(JSON.parse(chunk).error){
                console.log(JSON.parse(chunk));
                if (params.res) {
                    params.res.send("Error");
                    params.res.sendStatus(500);
                }
            }else{
                //console.log(JSON.parse(chunk));
                //ESSA LÓGICA ABAIXO É PARA AJUDAR A FAZER A INSERÇÃO DO FORMULÁRIO DO ADMINPANEL 
                //E PARA RESPONDER SE HOUVE ERRO OU NÃO
                //LEMBRANDO QUE ELE SÓ PODE RESPONDER 200 QUANDO AMBOS : ESTAB E ESTAB_INFO DEREM CERTO
                //E DEVE RESPONDER 500 SE QUALQUER UM DER ERRADO, MAS PELA LÓGICA APLICADA,
                //SE O ESTAB DER ERRADO O ESTAB_INFO NÃO SERÁ ENVIADO PARA PERSISTÊNCIA
                if (params.path2 && params.path2.length > 0) {
                    var key = "" + JSON.stringify(JSON.parse(chunk).resource[0].id);
                    setDadosCustom(params.data2, params.path2, {}, "", key, params.response, {});
                }
                if (params.res && params.res.send) {
                    params.res.send(JSON.parse(chunk).resource[0]);
                }
            }
        });
        
        resp.on('end', () => {
            //console.log('No more data in response.');
        });
           
    });
    request.write(JSON.stringify(params.data));
    request.end();
    
}



function alterarLinha(params){
    
    var options = {
        host: (params.host)? params.host : dreamFac.host,
        port: (params.port)? params.port : dreamFac.port,
        path: dreamFac.path+params.path,
        method : 'PUT',
        headers : (params.header)? params.header : sendJsonHeader,
    };
    //console.log("QUERIES LENGTH : "+params.queries.length);
    //console.log("METHOD --------------",options.method);
    //console.log("QUERIESS -----------------", params.queries);
    //console.log("request path" + options.path);
    //console.log("request headers" + JSON.stringify(options.headers));
    
    var request = http.request(options, function(resp) {
        
        //console.log('RESPONSE STATUS: ' + resp.statusCode);
        //console.log('RESPONSE HEADERS: ' + JSON.stringify(resp.headers));
        
        resp.on('data', (chunk) => {
            if(JSON.parse(chunk).error){
                console.log(JSON.parse(chunk));
                params.res.send({});
            }else{
            //console.log(JSON.parse(chunk));
            }
        });
        
        resp.on('end', () => {
            //console.log('No more data in response.');
        });
           
    });
    request.write(""+params.queries);
    request.end();
    
    params.res.sendStatus(200);
    
}



function excluirLinha(params){
    
    var options = {
        host: (params.host)? params.host : dreamFac.host,
        port: (params.port)? params.port : dreamFac.port,
        path: dreamFac.path+params.path,
        method : params.method,
        //headers : (params.header)? params.header : header,
        headers : header
    };
    //console.log("QUERIES LENGTH : "+params.queries.length);
    //console.log("METHOD --------------",options.method);
    //console.log("QUERIESS -----------------", params.queries);
    //console.log("request path" + options.path);
    //console.log("request headers" + JSON.stringify(options.headers));
    
    var request = http.request(options, function(resp) {
        
        //console.log('RESPONSE STATUS: ' + resp.statusCode);
        //console.log('RESPONSE HEADERS: ' + JSON.stringify(resp.headers));
        
        resp.on('data', (chunk) => {
            if(JSON.parse(chunk).error){
                console.log(JSON.parse(chunk));
                params.res.send({});
            }else{
            //console.log(JSON.parse(chunk));
            }
        });
        
        resp.on('end', () => {
            //console.log('No more data in response.');
        });
           
    });
    request.write(JSON.stringify(params.data));
    request.end();
    
    params.res.sendStatus(200);
    
}





function getDados(req, res){
    
    // PARAMETROS => OBRIGATÓRIO : tabela, id, response  |  OPICIONAL : host, porta, header //
    
    var parametros = {
        path : req.originalUrl,
        id : req.params.id,
        query : req.query,
        res : res
    };
    
    pegarLinha(parametros);
}

function setDados(req, res){
  
    var parametros = {
        data : req.body,
        path : req.path,
        id : req.params.id,
        res : res
    };
    
    setarLinha(parametros);
}


function setDadosCustom(data1, path1, data2, path2, idKey, res, response){
    
    if (idKey.length > 0) {
        data1.resource[0].estab_id = idKey;
    }

    var parametros = {
        data : data1,
        path: path1,
        data2: data2,
        path2: path2,
        res: res,
        response : response
    };
    
    setarLinha(parametros);
}


function delOrAlterDados(req, res){
    
    console.log("REQ BODY ---------",JSON.stringify(req.body));
    var parametros = {
        header : {'X-DreamFactory-Api-Key' : '8ddf1fa46aed16279712dea2d446bc5b35e0c5a7c940ddc204caa6be38391f1b',
        'Content-type' : 'application/json',
        'Content-length' : JSON.stringify(req.body).length
        },
        path : req.path,
        id : req.params.id,
        data : req.body,
        method : req.method,
        res : res
    };
    
    excluirLinha(parametros);
    
}


var aviso = function (tipo, req, status) {
    switch (tipo) {
        case "avisoReq":
            console.log("[INFO]".yellow);
            console.log(("[DATA/HORA : "+ new Date()+"]").green);
            console.log(("Novo Request do IP : " + req.ip).green);
            console.log(((req.session.user != undefined) ? "Possui seção ? SIM -> USUÁRIO : "+req.session.user : "Possui seção ? NÃO").cyan);
            console.log(("Para o Servico : " + req.originalUrl).cyan);
            console.log(("Utilizando o método: " + req.method).cyan);
            console.log(("Com o[s] Parâmetro[s] : " + JSON.stringify(req.params)).cyan);
            console.log(("Com a[s] Query[ies] : " + JSON.stringify(req.query)).cyan);
            console.log(("Com o body : " + JSON.stringify(req.body)).cyan);
            console.log((status.code == 0)? ("REQUISIÇÃO PASSOU (Motivo : Path está na lista de exceções)").yellow : (status.code == 1)? ("REQUISIÇÃO PASSOU (Motivo : Usuário possui sessão válida)").green : ("REQUISIÇÃO BLOQUEADA E REDIRECIONA (Para : /login) (Motivo : Usuário não possui seção válida) ").red);
            console.log("---------------------------------------------------------------\n".yellow);
            break;
        default:
            break;
    }
};


//----------------------------------------FUNCTIONS------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------------------//