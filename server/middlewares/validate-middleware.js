
const validate = (schema) => async (req, res, next) => {
    try {
        // req.body ic checked with this schema and then again passed in req.body
        const parseBody = await schema.parseAsync(req.body)
        req.body = parseBody
        next()

    } catch (err) {
        console.log(err)
        const message = err.issues.map((curElem) => curElem.message);
        // console.log(message)
        res.status(400).json({ msg: message })
    }
}

module.exports = validate   