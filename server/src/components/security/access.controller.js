/**
 * Authenticate user credentials.
 */
const signin = (req, res) => {
    const { email, password } = req.body
    if (email === 'user@email.com' && password === '123456') {
        res.json({ token: 'usqsne7fHxaxpdgryFyjuvcw6wFsyqhqrsvidnpspxsxicv2fjjucajvfk6gjhdh' })
    } else {
        res.status(401).json({ messages: ['Account information invalid.'] })
    }
}

/**
 * Register new users.
 */
const signup = (req, res) => {
    const { fullname, phone, email, password } = req.body
    console.log(`Registering user ${fullname} with phone: ${phone}, email: ${email}, password: ${password}`)
    res.json({ success: true })
}

module.exports = {
    signin,
    signup
}
