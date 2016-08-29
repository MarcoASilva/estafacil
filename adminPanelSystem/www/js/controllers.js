angular.module('app.controllers', [])

    .controller('loginCtrl', function ($scope, $http, $location) {
        $scope.alerta = "";

        $scope.login = function (user, senha) {
            console.log("user : " + user);
            console.log("senha : " + senha);

            $http.post('/login', { email: user, password: senha }).then(function (response) {
                if (response.status == 200) {
                    $location.path('/insert');
                } else {
                    $scope.alerta = "Usuário ou senha incorreto(s)";
                }
            }, function (errorResponse) {
                console.log(errorResponse.message);
                $scope.alerta = "Usuário ou senha incorreto(s)";
            });

        };
    })
    .controller('insertCtrl', function ($scope, $http) {
        
        
        $scope.erro = false;
        $scope.sucesso = false;
        
        alert("ois");
        $http.get('/loggedas').then(function (response) {
            $scope.primeiroNome = response.data.name;
            $scope.sobrenome = response.data.lastname;
        }, function (error) {
            console.log(error);
        });
        
        $scope.enviar = function () {
            
            console.log($scope.form);
            
            $http.post('/estabelecimentos', $scope.form).then(function (response) {
                console.log(JSON.stringify(response.body));
                $scope.form = {};
                if (response.status == 200 && response.data != "Error") {
                    $scope.erro = false;
                    $scope.sucesso = true;
                    $scope.form = {};
                }
            }, function (errorResponse) {
                console.log(errorResponse.message);
                $scope.sucesso = false;
                $scope.erro = true;
            });
            
        };
    })
    .controller('homeCtrl', function ($scope) {
    });