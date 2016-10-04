/* jshint -W079 */
/*jshint unused:false, maxlen:false*/
/* jscs:disable */
var mockData = (function () {
    return {
        getMockStates: getMockStates,
        getMockDashboard: getMockDashboard,
        getMockLogin: getMockLogin,
    };

    function getMockStates() {
        return [
            {
                state: 'home',
                config: {
                    url: '/',
                    templateUrl: 'app/home/template/home.html',
                    title: 'home',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-home"></i> Home'
                    }
                }
            }
        ];
    }

    function getMockDashboard() {
        return [
            {
                state: 'dashboard',
                config: {
                    url: '/dashboard',
                    title: 'dashboard',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-dashboard"></i> Dashboard'
                    }
                }
            }
        ];
    }

    function getMockLogin() {
        return [
            {
                'id': 1,
                'email': 'danibeca@okazo.co',
                'name': 'Daniel Betancur',
                'created_at': {
                    'date': '2016-09-07 21:19:14',
                    'timezone_type': 3,
                    'timezone': 'UTC'
                },
                'updated_at': {
                    'date': '2016-10-20 06:05:37',
                    'timezone_type': 3,
                    'timezone': 'UTC'
                },
                'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cL2xvY2FsaG9zdFwvbGFyYXZlbFwvc2lnbWFcL2FwaVwvbG9naW4iLCJpYXQiOjE0NzM5MTIwMTcsImV4cCI6MTQ3MzkxNTYxNywibmJmIjoxNDczOTEyMDE3LCJqdGkiOiJmMmUyNjFkNzcwNDUwMzJlODFiMDJjMTU0NzU0Yjk5ZiJ9.LmaH6gMzLXP-Yn9EFxiNzAxWA01gDQca-ZDQOTtGXAw'
            }
        ];
    }

})();
