const URL = require("../models/URL");

function generateShortCode() {
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let shortCode = "";

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);

        shortCode += characters[randomIndex];
    }

    return shortCode;
}

const shortenURL = async (req, res) => {
    try {
        const { url } = req.body;

        if (!url) {
            return res.status(400).json({
                message: "URL is required"
            });
        }

        if ( typeof url !== "string") {
            return res.status(400).json({
                message: "URL must be String"
            })
        }

        try {
            const parsedURL =new globalThis.URL(url);
            if (parsedURL.protocol !== "http:" && parsedURL.protocol !== "https:") {
                return res.status(400).json({
                    message: "Invalid URL Only HTTP and HTTPS URLs are allowed "
                });
            }

        } catch {
            return res.status(400).json({
                message: "Invalid URL"
            });
        }

        let shortCode = generateShortCode();

        while (await URL.findOne({ shortCode })) {
            shortCode = generateShortCode();
        }

        const newURL = await URL.create({
            originalUrl: url,
            shortCode: shortCode
        });

        res.status(201).json({
            originalUrl: newURL.originalUrl,
            shortCode: newURL.shortCode,
            shortUrl: `http://localhost:${process.env.PORT || 3000}/${newURL.shortCode}`
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Internal server error"
        });
    }
};

const redirectURL = async (req, res) => {
    try {
        const { shortCode } = req.params;

        const url = await URL.findOne({ shortCode });

        if (!url) {
            return res.status(404).json({
                message: "Short URL not found"
            });
        }

        url.clicks += 1;

        await url.save();

        res.redirect(url.originalUrl);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Internal server error"
        });
    }
};

const getURL = async(req,res) =>{
    try {
        const { shortCode } = req.params;
        const url = await URL.findOne({ shortCode  });
        if (!url) {
            return res.status(404).json({
                message: "Short URL not found"
            });
        }
        res.status(200).json({
            originalUrl: url.originalUrl,
            shortCode: url.shortCode,
            clicks: url.clicks
        })
        }
    catch (error) {
        res.status(500).json({
            message: "Internal server error"    
        })

    }
};

const getAllURLs = async (req,res) => {
    try {
        const urls = await URL.find()
        .select('-_id ')
        res.status(200).json(urls);
    } catch (error) {
        res.status(500).json({
            message: "Internal server error"    
        })
    }

};


const deleteURL = async( req,res) => {
    try {
        const { shortCode } = req.params;
        const url = await URL.findOneAndDelete({ shortCode });
        if(!url){
            return res.status(404).json({
                message: "URL not found"
            })
        }
        res.status(200).json({
            message: "URL Deleted successfully",
            shortCode: shortCode
        })
    }
    catch (error){
        return res.status(500).json({
            message: "Internal server error"
        })
    }

}

module.exports = {
    shortenURL,
    redirectURL,
    getURL,
    getAllURLs,
    deleteURL
};