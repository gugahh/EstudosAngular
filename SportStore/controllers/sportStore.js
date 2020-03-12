angular.module("sportStore")
    .controller("sportStoreCtrl", function($scope) {
        $scope.data = {
            products: [
                {
                    name: "Alcachofra",
                    description: "Um planta boa pro fígado",
                    category: "Plantas",
                    price: 100    
                },
                {
                    name: "Alfazema",
                    description: "Planta perfumada",
                    category: "Plantas",
                    price: 200
                },
                {
                    name: "Zero Call",
                    description: "Adoçante Dietético",
                    category: "Dietéticos",
                    price: 5
                },
                {
                    name: "Fender Stratocaster",
                    description: "Guitarra Elétrica Vintage",
                    category: "Instrumentos",
                    price: 7000
                } ]
        };
    });