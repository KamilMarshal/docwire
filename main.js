const path = require("path")
const fs = require("fs")

const dirPath = path.join(__dirname, "../src/pages/Posts")
let postList = []

const main = () => {
     fs.readdir(dirPath, (err, files) => {
        if (err) {
            return console.log("Fail to list contents of directory: " + err)
        }
        files.forEach((file, i) => {
            let obj = {}
            let post
            fs.readFile(`${dirPath}/${file}`, "utf-8", (err, contents) => {
                const getMetadataIndicies = (acc, elem, i) => {
                    if (/^---/.test(elem)) {
                        acc.push(i)
                    }
                    return acc
                }
                const parseMetadata = ({lines, metadataIndicies}) => {
                    if (metadataIndicies.length > 0) {
                        let metadata = lines.slice(metadataIndicies[0] + 1, metadataIndicies[1])
                        metadata.forEach(line => {
                            obj[line.split(": ")[0]] = line.split(": ")[1].slice(0, -1)
                        })
                        return obj
                    }
                }
                const parseContent = ({lines, metadataIndicies}) => {
                    if (metadataIndicies.length > 0) {
                        lines = lines.slice(metadataIndicies[1] + 1, lines.length)
                    }
                    return lines.join("\n")
                }
                const lines = contents.split("\n")
                const metadataIndicies = lines.reduce(getMetadataIndicies, [])
                const metadata = parseMetadata({lines, metadataIndicies})
                const content = parseContent({lines, metadataIndicies})
                post = {
                    id: i,
                    title: metadata.title ? metadata.title : "No title given",
                    author: metadata.author ? metadata.author : "No author given",
                    authorImage: metadata.authorImage ? metadata.authorImage : "No author image given",
                    preview: metadata.preview ? metadata.preview : "No preview given",
                    date: metadata.date ? metadata.date : "No date given",
                    content: content ? content : "No content given",
                }
                postList.push(post)
                if (i === files.length - 1) {
                    let data = JSON.stringify(postList)
                    fs.writeFileSync("src/posts.json", data)
                }
            })
        })
    })
    return
}

main()
