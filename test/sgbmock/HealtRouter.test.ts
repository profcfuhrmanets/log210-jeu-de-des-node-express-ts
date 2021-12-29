import chai from 'chai';
import chaiHttp from 'chai-http';
import SgbMock from './SgbMock';

chai.use(chaiHttp);
const expect = chai.expect;
const should = chai.should();

describe("HealtRouterTest", () => {

  it('ping', async () => {
      let mock:SgbMock = new SgbMock('http://localhost:3000');
      let message = await mock.ping();
      expect(message).to.equal("Success")
      }, 10000);

});
