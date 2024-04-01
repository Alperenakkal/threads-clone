import jwt from 'jsonwebtoken'
const generateTokenAndSetCookie =(userId,res) =>{
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '15d',

    })

    res.cookie("jwt" ,token,{
        httpOnly:true, //daha güvenli bir hal aldırdık
        maxAge: 15*24*60*60*1000, //15 gün geçerli bir token
        sameSite: "strict", //tokenın sadece bizim sitede geçerli olmasını sağlıyoruz CSRF'ye izin vermiyoruz
    })

    return token;
};

export default generateTokenAndSetCookie;