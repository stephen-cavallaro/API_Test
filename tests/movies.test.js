const request = require("supertest")("");
const expect = require("chai").expect;

describe("GET all movies form API", () => {
  const hostname = "https://api.themoviedb.org/"
  
  context("GET /movie/movie_id, one specific movie", () => {
    before("Test setup", () => {

    })

    it("returns 1 movie result", async () => {
      const response = await request.get(`${hostname}/3/movie/744`)
      .query({ api_key: '454b354872cb994294cf06265870be92' })
      .set('Host', 'api.themoviedb.org')
      // console.log(response.body)
      expect(response.status).to.eql(200);
      expect(response.body.title).to.eql("Top Gun")
      expect(response.body.id).to.eql(744)
    });  
  })

  context("GET now playing movies", () => {
    before("Test setup", () => {
    })  
    it("returns now playing movies", async () => {
      const response = await request.get(`${hostname}3/movie/now_playing`)
      .query({ api_key: '454b354872cb994294cf06265870be92' })
      .set('Host', 'api.themoviedb.org')
      //console.log(response.body)
      expect(response.status).to.eql(200);
      expect(response.body.results[0].title).to.eql("Wonder Woman 1984");
      expect(response.body.results[2].overview).to.contains("WWII");

    });  
  }) 
  
  context("Get top movies", () => {
    before("Test setup", () => {

    })
    it("returns top movies", async () => {
      const response = await request.get(`${hostname}3/tv/top_rated`)
      .query({ api_key: '454b354872cb994294cf06265870be92' })
      .set('Host', 'api.themoviedb.org')

      //console.log(response)

      expect(response.status).to.eql(200);
      expect(response.body.results[0].id).to.eql(100)
      expect(response.body.results[1].overview).to.contains("Tightly")




    })

  })
 
});