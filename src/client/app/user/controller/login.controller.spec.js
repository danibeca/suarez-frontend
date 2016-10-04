/* jshint -W117, -W030 */
describe('LoginController', function () {
    var controller;
    var user = mockData.getMockLogin();


    beforeEach(function () {
        module('app.user', bard.fakeToastr);
        bard.inject('$controller', '$log', '$rootScope', '$q', 'auth', '$state', 'routerHelper', '$timeout');
    });

    beforeEach(function () {
        routerHelper.configureStates(mockData.getMockDashboard(), '/dashboard');
        controller = $controller('LoginController');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Login controller', function () {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        it('should call auth.login once', function () {
            var authMock = sinon.mock(auth);
            authMock.expects('getLogin').once().returns($q.when(user));
            controller.login();
            authMock.restore();
            authMock.verify();
        });

        it('when it success', function (done) {
            var authStub = sinon.stub(auth, 'getLogin');
            authStub.returns($q.when(user));
            controller.login();
            $timeout(function () {
                expect($log.info.logs).to.match(/LOGIN_SUCCESS/);
                done();
            }, 1000);
            $timeout.flush();

        });

        it('when it fail', function () {

        });

    });
});
