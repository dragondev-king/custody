import { Amplify } from 'aws-amplify'
import awsExports from '../aws-exports.js'

const initAmplify = () => {
  Amplify.configure(awsExports)
}

export default initAmplify
