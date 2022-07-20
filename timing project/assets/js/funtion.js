/**
 * Alert Funtion
 */
const alertFun =(ms, alertType='danger')=>{
    return `<p class="alert alert-${alertType} d-flex justify-content-between">${ms} <button class="btn-close" data-bs-dismiss="alert"></button> </p>`;
}