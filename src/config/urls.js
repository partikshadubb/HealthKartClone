const API_BASE_URL = 'http://192.168.99.194:8002';
const getApiUrl = (endpoint) => API_BASE_URL + endpoint;
export const LOGIN = getApiUrl('/user/loginUser');
export const SIGNUP = getApiUrl('/user/registerUser');
export const UPLOAD_IMAGE = getApiUrl('/common/uploadFile')
export const OTP_RECIEVE =" https://api.talktier.com/user/v1/loginSignupOtp";
export const OTP_VARIFY ="  https://api.talktier.com/user/v1/verifyOtp";
export const INFINITE_LIST= "https://api.talktier.com/user/v1/getUserSearch ";
export const SEARCH = "https://api.talktier.com/user/v1/getUserNearMe";
export const CHAT_USER="https://api.talktier.com/user/v1/getAllConversations";
export const USER_CONVERSATION="https://api.talktier.com/user/v1/getConversationMessages";