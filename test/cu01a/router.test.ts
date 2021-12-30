import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../src/App';

chai.use(chaiHttp);
const expect = chai.expect;
const should = chai.should();

// enlever le x devant xdescribe et xit pour activer les test
xdescribe("cu01a router test", () => {

      xit('get all courses', async () => {
        const res = await chai.request(app).get('/api/v3/course/all')
        expect(res.status).to.equal(200);
        expect(res).to.be.json;
        
        // let courses: CourseJSON[] = require('../../src/data/courses.json');
        expect(res.body.data).to.deep.equal(courses);
      }, 10000);

});
