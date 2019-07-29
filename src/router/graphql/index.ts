import user from './user'
import permission from './permission'
import { gql } from 'apollo-server-koa'

const schema = [ user, permission ]

// const schema = src.map(v => gql`${v}`)


export default schema