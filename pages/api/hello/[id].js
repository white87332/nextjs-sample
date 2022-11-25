// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// http://127.0.0.1:3000/api/hello/123

export default function handler(req, res) {
    res.status(200).json({ name: `hello ${req.query.id}` })
}
