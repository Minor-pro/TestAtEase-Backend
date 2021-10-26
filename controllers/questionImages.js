const Teacher=require("../models/teacher");

const questionImages = async (req, res,next) => {
    const { textUrl, diagramUrl } = req.body;
    
    console.log(textUrl,diagramUrl)
};
module.exports={questionImages}