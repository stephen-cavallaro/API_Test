const request = require("supertest")("");
const expect = require("chai").expect;

describe("Auth API Test", () => {
    const hostname = "https://api.themoviedb.org/3"
    let request_token, guest_session;

    context("GET Guest Session", () => {
      before("Test setup", () => {
      })  
      it("returns a single guest session", async () => {
        const response = await request.get(`${hostname}/authentication/guest_session/new`)
        .query({ api_key: '454b354872cb994294cf06265870be92' })
        .set('Host', 'api.themoviedb.org')
        // console.log(response.body)
        guest_session = response.body.guest_session_id
        expect(response.status).to.eql(200);
        expect(response.body.success).to.eql(true);

      });  
    }) 

    context("GET auth token", () => {
        before("Test setup", () => {
        })  
        it("returns a token to validate user", async () => {
          const response = await request.get(`${hostname}/authentication/token/new`)
          .query({ api_key: '454b354872cb994294cf06265870be92' })
          .set('Host', 'api.themoviedb.org')
          console.log(response.body)
          request_token = response.body.request_token
          expect(response.status).to.eql(200);
          expect(response.body.success).to.eql(true);
  
        });  
      }) 

      context("Get fully valid session id", () => {
        before("Test setup", () => {
        })  
        it("validates user and returns session id", async () => {
          const response = await request.post(`${hostname}/authentication/session/new`)
          .query({ api_key: '454b354872cb994294cf06265870be92' })
          .set('Host', 'api.themoviedb.org')
          .send({
              "request_token": guest_session  
          })
          //console.log(response)
          //console.log(response.body)
          expect(response.status).to.eql(200);
          expect(response.body.success).to.eql(true);
  
        });  
      })

    
  });