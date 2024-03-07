import { environment } from "environments/environment";

// const prefix = ".."
const prefix = environment.apiPrefix

//login 
export const API_AUTH: string = `${prefix}/token/generate-token`;
export const API_AUTH_VALIDATE_TOKEN: string = `${prefix}/menu/validate-token`;
export const API_AUTH_REFRESH_TOKEN: string = `${prefix}/menu/refresh-token`;

export const API_USER_LOGOUT: string = `${prefix}/user/logout/`;


export const API_GET_APPLICATION_LIST: string = `${prefix}/alaram/module/get`;
export const API_GET_APPLICATION_LIST_WITHID: string = `${prefix}/alaram/module/getApp/`;
export const API_GET_MODULEAPP_PDFDATA: string = `${prefix}/alaram/module/pdfData`;
export const API_GET_MODULEAPP_LIST_WITHID: string = `${prefix}/alaram/module/getModule`;
export const API_SAVE_MODULEAPP: string = `${prefix}/alaram/module/save`;
export const API_UPDATE_MODULEAPP: string = `${prefix}/alaram/module/update`;
export const API_SAVE_MODULEAPP_DETAILS: string = `${prefix}/alaram/module/savemoduledetails`;
export const API_UPDATE_MODULEAPP_DETAILS: string = `${prefix}/alaram/module/updatemoduledetails`;
export const API_AUTHENTICATE_USER: string = `${prefix}/alaram/module/authenticateUser`;
export const API_GET_FILTERDATA: string = `${prefix}/alaram/module/getFilterData`;
export const API_GET_FILENAME_LIST: string = `${prefix}/alaram/module/getFileNameList`;

//lov Mst services 
export const API_GET_LOV_MST_LIST: string = `${prefix}/lov/lovmstList`;
export const API_UPDATE_LOV_MST: string = `${prefix}/lov/updateLovMst/`;
export const API_ADD_LOV_MST: string = `${prefix}/lov/addLovMst/`;
export const API_GET_LOV_MST_BYNAME: string = `${prefix}/lov/getLovMstByName`;

//customer
export const API_GET_CUSTOMER_LIST: string = `${prefix}/customer/customer-list`;
export const API_SAVE_CUSTOMER_DETAILS: string = `${prefix}/customer/add-customer`;
export const API_UPDATE_CUSTOMER_DETAILS: string = `${prefix}/customer/update-customer`;



// export const API_GENERATE_PDF: string = `${prefix}/customer/generate-pdf`;


//line
export const API_GET_LINE_LIST: string = `${prefix}/line/line-list`;
export const API_SAVE_LINE_DETAILS: string = `${prefix}/line/add-line`;
export const API_UPDATE_LINE_DETAILS: string = `${prefix}/line/update-line`;
export const API_GET_LINE_LIST_BY_CUSTOMERID: string = `${prefix}/line/getlist-by-customerid`;
export const API_GET_ATTACHMENT_LIST: string = `${prefix}/line/getAttachmentList`;

//URS-details
export const API_GENERATE_PDF: string = `${prefix}/urs-details/generate-pdf`;
export const API_GET_URS_DETAILS_LIST: string = `${prefix}/urs-details/urs-list`;
export const API_GET_URS_DETAILS_PDFDATA: string = `${prefix}/urs-details/pdfData`;
export const API_UPLOAD_PDFDATA: string = `${prefix}/urs-details/uploadPDF`;
export const API_UPDATE_URS_DETAILS: string = `${prefix}/urs-details/update`;

