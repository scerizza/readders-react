import {CognitoUserPool} from 'amazon-cognito-identity-js';

const poolData =  {
    UserPoolId : 'us-east-1_xeBgb6svl',
    ClientId:'3pgbl0o6recko4cmp1mpladdk6'
};

export default new CognitoUserPool(poolData)