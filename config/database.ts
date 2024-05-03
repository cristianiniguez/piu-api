import path from 'path'

console.log(__dirname)

export default () => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', '..', 'database', 'data.db')
    },
    useNullAsDefault: true
  }
})
