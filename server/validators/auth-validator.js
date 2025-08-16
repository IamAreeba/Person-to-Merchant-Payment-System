const { z } = require('zod')

// Crreating an object schema 
const signupSchema = z.object({
    username: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(7, { message: "Name must be atleast 3 chars. "})
        .max(255, { message: "Name must not be more than 255 chracters. "}),

    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address"})
        .min(3, { message: "Email must be atleast 3 chars. "})
        .max(255, { message: "Email must not be more than 255 chracters. "}),
    
    accNo: z
        .string({ required_error: "accNo is required" })
        .trim()
        .min(14, { message: "accNo must be atleast 14 chars. "})
        .max(14, { message: "accNo must not be more than 14 chracters. "}),

    phone: z
        .string({ required_error: "Phone No. is required" })
        .trim()
        .min(11, { message: "Phone No. must be atleast 11 chars. "})
        .max(11, { message: "Phone No. must not be more than 11 chracters. "}),
    
    password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(6, { message: "Password must be atleast of 6 chars. "})
        .max(255, { message: "Password must not be more than 255 chracters. "}),
})


module.exports = signupSchema