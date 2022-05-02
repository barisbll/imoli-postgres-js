const supertest = require("supertest");

const createServer = require("../util/server");
const controller = require("../controller/controller");
const parametersAndPayloads = require("./parametersAndPayloads");

const app = createServer();

describe("film", () => {
  describe("get films route", () => {
    describe("given the /films route is called", () => {
      it("should return a movies array with 6 movie objects", async () => {
        const { body, statusCode } = await supertest(app).get("/films");

        expect(statusCode).toBe(200);

        expect(body.movies.length).toBe(6);
      });
    });

    describe("get favorites route", () => {
      describe("given favorites route with pagination", () => {
        it("should return a 200 with response object", async () => {
          const { body, statusCode } = await supertest(app).get(
            "/favorites?page=2&limit=3"
          );

          expect(statusCode).toBe(200);

          expect(body).toEqual(parametersAndPayloads.getFavoritesResponse);
        });
      });
    });

    describe("get favorite/:id route", () => {
      describe("given favorite route with id", () => {
        it("should return a 200 with response object", async () => {
          const { body, statusCode } = await supertest(app).get("/favorite/7");

          expect(statusCode).toBe(200);

          expect(body).toEqual(parametersAndPayloads.getFavoriteIdResponse);
        });
      });
    });

    describe("get favorite/:id/file route", () => {
      describe("given favorite route with id and file", () => {
        it("should return a 200", async () => {
          const { body, statusCode } = await supertest(app).get(
            "/favorite/7/file"
          );

          expect(statusCode).toBe(200);
        });
      });
    });
  });
});
