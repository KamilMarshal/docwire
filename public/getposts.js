const path = require("path")
const fs = require("fs")
const {getMetadata} = require("next/dist/server/lib/squoosh/main");
const metadata = require("next/dist/server/typescript/rules/metadata");

const dirPath = path.join(__dirname, "../src/pages/Posts")
let postList = []

const getPosts = async () => {
    await fs.readdir(dirPath, (err, files) => {
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
                            obj[line.split(": ")[0]] = line.split(": ")[1]
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
                    date: metadata.date ? metadata.date : "No date given",
                    content: content ? content : "No content given",
                }
                postList.push(post)
            })
        })
    })
    setTimeout(() => {
        console.log(postList)
    }, 500)
}

getPosts()
