import { rest } from "msw";

export const handlers = [
  rest.get(`http://localhost:4000/users`, async (req, res, ctx) => {
    const { email, password } = req.url.searchParams;
    if (email && password) {
      return res(
        ctx.status(200),
        ctx.json({
          message: "allow",
          token: "token",
          id: 1,
        })
      );
    } else {
      return res(
        ctx.status(401),
        ctx.json({ message: "Email already exists" })
      );
    }
  }),
  rest.post(`http://localhost:4000/users/`, async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          pincode: "500012",
        },
        {
          area: "5000",
        },
        {
          address: "5-1-140",
        },
      ])
    );
  }),
];
