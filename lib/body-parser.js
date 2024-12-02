import bodyParser from 'body-parser'

export default () => {
    return bodyParser.urlencoded({ extended: true })
}