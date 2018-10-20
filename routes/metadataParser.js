const formidable = require('formidable')

exports.parseMetadata = (req, res) => {

    let form = new formidable.IncomingForm()

    form.parse(req, (err, fields, files) => {
        if(err)
            return res.sendError(err)
            
        res.status(200).json({name: files['upfile'].name, type: files['upfile'].type, size: files['upfile'].size})
    })
} 