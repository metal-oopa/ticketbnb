import { app } from "../../app";
import request from "supertest";

it("should return a 401 error if no token is provided", async () => {
  await request(app)
    .post("/api/tickets")
    // .set("Cookie", global.signin())
    .send({
      title: "asdf",
      price: 20,
    })
    .expect(401);
});
