var app = angular.module('myApp', ['ngRoute']);
var cadastros = [];
app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'view/inicio.html',
	controller  : 'InicioController'
  })

  .when('/cadastro', {
    templateUrl : 'view/cadastro.html',
	controller  : 'CadastroController'
  })

  .when('/pesquisa', {
    templateUrl : 'view/pesquisa.html',
	controller  : 'PesquisaController'
  })

  .otherwise({redirectTo: '/'});
});

app.controller('InicioController', function($scope) {
  $scope.message = 'InicioController';
});

app.controller('CadastroController', function($scope) {
  $scope.cadastros = cadastros;
  $scope.message = '';
  
  $scope.adicionarCadastro = function(cadastro) {
    $scope.cadastros.push(cadastro);
	cadastros = $scope.cadastros;
	$scope.message = 'Cadastro do '+ cadastro + ' realizado com sucesso';
  };
  
});

app.controller('PesquisaController', function($scope) {
  $scope.cadastros = cadastros;
  if (cadastros.length == 0)
	$scope.message = 'Não há cadastros.';
});