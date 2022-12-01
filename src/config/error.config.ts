
const UNAUTHORIZED = {
    status_code: 401,
    custom_msg: 'You are not authorized to perform this action.',
    type: 'UNAUTHORIZED'
}

const EMAIL_ERROR = {
    status_code: 400,
    custom_msg: 'Sorry this email already exists',
    type: 'EMAIL_ERROR'
}

const WRONG_PASSWORD = {
    status_code: 400,
    custom_msg: 'Sorry you entered a wrong password. Please try again',
    type: 'WRONG_PASSWORD'
}

const EMAIL_NOT_FOUND = {
    status_code: 400,
    custom_msg: 'Sorry this email address is not registered with us. Please try again',
    type: 'EMAIL_NOT_FOUND'
}

const FILE_SIZE_ERROR = {
    status_code: 400,
    custom_msg: 'File size should be less than 3Mb',
    type: 'FILE_SIZE_ERROR'
}

const ACCOUNT_BLOCKED = {
    status_code: 400,
    custom_msg: 'Sorry this account is temporary blocked.',
    type: 'ACCOUNT_BLOCKED'
}

const EMAIL_NOT_REGISTERED = {
    status_code: 400,
    custom_msg: 'The email address provided is not registered with us',
    type: 'EMAIL_NOT_REGISTERED'
}

const USER_NOT_FOUND = {
    status_code: 400,
    custom_msg: 'User not found!!',
    type: 'USER_NOT_FOUND'
}


export {
    EMAIL_ERROR,
    WRONG_PASSWORD,
    EMAIL_NOT_FOUND,
    FILE_SIZE_ERROR,
    ACCOUNT_BLOCKED,
    EMAIL_NOT_REGISTERED,
    UNAUTHORIZED,
    USER_NOT_FOUND
}